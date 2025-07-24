export default class EndScene extends Phaser.Scene {
  constructor() {
    super('end');
  }
  init(data) {
    this.finalTime = data.time || 0;
  }
  create() {
    const { width, height } = this.scale;
    this.add.text(width / 2, height / 2 - 20, `Tempo: ${this.finalTime.toFixed(2)}s`, {
      fontSize: '24px',
      color: '#ffffff'
    }).setOrigin(0.5);
    this.add.text(width / 2, height / 2 + 20, 'Press SPACE to Menu', {
      fontSize: '18px',
      color: '#ffffff'
    }).setOrigin(0.5);
    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('menu');
    });
  }
}
