export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('preload');
  }
  preload() {
    // Cria textura base do carro
    const body = this.make.graphics();
    body.fillStyle(0xffffff);
    body.fillRect(0, 0, 120, 40);
    body.generateTexture('carBody', 120, 40);
    body.destroy();

    // Cria textura das rodas
    const wheel = this.make.graphics();
    wheel.fillStyle(0x000000);
    wheel.fillCircle(16, 16, 16);
    wheel.generateTexture('wheel', 32, 32);
    wheel.destroy();
  }
  create() {
    this.scene.start('menu');
  }
}
