import { cars, loadState, saveState } from '../gameState.js';

export default class CarSelectScene extends Phaser.Scene {
  constructor() { super('carselect'); }

  create() {
    this.state = loadState();
    const { width } = this.scale;
    this.add.text(width / 2, 40, 'Escolher Carro', {
      fontFamily: 'Roboto',
      fontSize: '26px',
      color: '#ffffff'
    }).setOrigin(0.5);
    cars.forEach((car, i) => {
      const y = 100 + i * 30;
      const color = i === this.state.carIndex ? '#ffff00' : '#ffffff';
      const text = this.add.text(width / 2, y, car.name, {
        fontFamily: 'Roboto',
        fontSize: '22px',
        color
      }).setOrigin(0.5).setInteractive();
      text.on('pointerdown', () => {
        this.state.carIndex = i;
        saveState(this.state);
        this.scene.start('menu');
      });
    });
    const back = this.add.text(width / 2, 100 + cars.length * 30 + 40, 'Voltar', {
      fontFamily: 'Roboto',
      fontSize: '22px',
      color: '#ffffff'
    }).setOrigin(0.5).setInteractive();
    back.on('pointerdown', () => { this.scene.start('menu'); });
  }
}
