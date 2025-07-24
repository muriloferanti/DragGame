export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('preload');
  }
  preload() {
    // Carrega imagens SVG do corpo e rodas do carro
    this.load.image('carBody', 'assets/sprites/car_body.svg');
    this.load.image('wheel', 'assets/sprites/wheel.svg');
  }
  create() {
    this.scene.start('menu');
  }
}
