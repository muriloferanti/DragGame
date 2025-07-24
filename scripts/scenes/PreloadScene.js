export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('preload');
  }
  preload() {
    // Assets would be loaded here
  }
  create() {
    this.scene.start('menu');
  }
}
