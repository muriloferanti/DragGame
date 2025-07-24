export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('menu');
  }
  create() {
    const { width, height } = this.scale;
    this.add.text(width / 2, height / 2, 'Press SPACE to Start', {
      fontSize: '24px',
      color: '#ffffff'
    }).setOrigin(0.5);
    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('race');
    });
  }
}
