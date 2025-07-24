import { cars, loadState, saveState } from '../gameState.js';

export default class RaceScene extends Phaser.Scene {
  constructor() { super('race'); }

  create() {
    const { width, height } = this.scale;
    this.state = loadState();
    const carData = cars[this.state.carIndex];
    const ups = this.state.upgrades;
    this.trackLength = 201;
    this.distance = 0;
    this.startTime = this.time.now;

    // Container do carro com rodas
    this.car = this.add.container(50, height / 2);
    const body = this.add.sprite(0, 0, 'carBody').setOrigin(0.5);
    body.setTint(carData.color);
    this.frontWheel = this.add.sprite(50, 20, 'wheel').setOrigin(0.5);
    this.backWheel = this.add.sprite(-50, 20, 'wheel').setOrigin(0.5);
    this.car.add([body, this.frontWheel, this.backWheel]);

    this.speed = 0;
    const accelBonus = 1 + 0.1 * (ups.tires + ups.turbo);
    const speedBonus = 1 + 0.1 * ups.ecu;
    this.maxSpeed = carData.maxSpeed * speedBonus;
    this.acceleration = carData.acceleration * accelBonus;
    this.brakePower = 800;
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(time, delta) {
    const dt = delta / 1000;
    if (this.cursors.space.isDown || this.cursors.up.isDown) {
      this.speed += this.acceleration * dt;
      if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
    } else if (this.cursors.down.isDown) {
      this.speed -= this.brakePower * dt;
      if (this.speed < 0) this.speed = 0;
    } else {
      this.speed -= this.acceleration * dt * 0.5;
      if (this.speed < 0) this.speed = 0;
    }

    this.car.x += this.speed * dt;
    const wheelRadius = 16;
    const angleDelta = (this.speed * dt) / wheelRadius;
    this.frontWheel.rotation += angleDelta;
    this.backWheel.rotation += angleDelta;
    this.distance += this.speed * dt;

    if (this.distance >= this.trackLength) {
      const finalTime = (time - this.startTime) / 1000;
      this.state.points += 50;
      saveState(this.state);
      this.scene.start('end', { time: finalTime });
    }
  }
}
