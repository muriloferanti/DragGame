export default class RaceScene extends Phaser.Scene {
  constructor() {
    super('race');
  }
  create() {
    const { width, height } = this.scale;
    this.trackLength = 201; // meters
    this.distance = 0;
    this.startTime = this.time.now;

    this.car = this.add.rectangle(50, height / 2, 60, 20, 0xff0000);
    this.physics.add.existing(this.car);
    this.speed = 0;
    this.maxSpeed = 400; // pixels per second
    this.acceleration = 600; // per second
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
      // natural slow down
      this.speed -= this.acceleration * dt * 0.5;
      if (this.speed < 0) this.speed = 0;
    }

    this.car.x += this.speed * dt;
    this.distance += this.speed * dt;

    if (this.distance >= this.trackLength) {
      const finalTime = (time - this.startTime) / 1000;
      this.scene.start('end', { time: finalTime });
    }
  }
}
