export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('preload');
  }
  preload() {
    // Carrega sprites locais para o corpo e as rodas do carro
    // Usar arquivos locais evita falhas caso não haja acesso à internet
    this.load.image('carBody', 'assets/sprites/car_body.svg');
    this.load.image('wheel', 'assets/sprites/wheel.svg');
  }
  create() {
    this.scene.start('menu');
  }
}
