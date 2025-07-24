import { loadState } from '../gameState.js';

export default class EndScene extends Phaser.Scene {
  constructor() { super('end'); }
  init(data) {
    this.finalTime = data.time || 0;
  }
  create() {
    const { width, height } = this.scale;
    const state = loadState();
    this.add.text(width / 2, height / 2 - 40,
      `Tempo: ${this.finalTime.toFixed(2)}s`, {
        fontFamily: 'Roboto',
        fontSize: '26px',
        color: '#ffffff'
      }).setOrigin(0.5);
    this.add.text(width / 2, height / 2 - 10, '+50 Pontos!', {
      fontFamily: 'Roboto',
      fontSize: '22px',
      color: '#ffff00'
    }).setOrigin(0.5);
    this.add.text(width / 2, height / 2 + 20,
      `Total: ${state.points} pontos`, {
        fontFamily: 'Roboto',
        fontSize: '22px',
        color: '#ffffff'
      }).setOrigin(0.5);
    this.add.text(width / 2, height / 2 + 60, 'Pressione SPACE para Menu', {
      fontFamily: 'Roboto',
      fontSize: '20px',
      color: '#ffffff'
    }).setOrigin(0.5);
    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('menu');
    });
  }
}
