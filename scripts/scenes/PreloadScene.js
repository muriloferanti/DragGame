export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('preload');
  }
  preload() {
    // Carrega ícones remotos para corpo e rodas do carro
    this.load.image('carBody',
      'https://img.icons8.com/fluency/128/car.png');
    this.load.image('wheel',
      'https://img.icons8.com/fluency/64/car-wheel.png');
  }
  create() {
    this.scene.start('menu');
  }
}
