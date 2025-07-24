import { cars, loadState } from '../gameState.js';

export default class MenuScene extends Phaser.Scene {
  constructor() { super('menu'); }

  create() {
    this.state = loadState();
    const { width, height } = this.scale;
    this.add.text(width / 2, 60, 'Drag Game', {
      fontFamily: 'Roboto',
      fontSize: '36px',
      fontStyle: 'bold',
      color: '#ffcc00'
    }).setOrigin(0.5);
    this.add.text(width / 2, 110, `Carro: ${cars[this.state.carIndex].name}`, {
      fontFamily: 'Roboto',
      fontSize: '22px',
      color: '#ffffff'
    }).setOrigin(0.5);
    this.pointsText = this.add.text(width / 2, 140, `Pontos: ${this.state.points}`, {
      fontFamily: 'Roboto',
      fontSize: '22px',
      color: '#ffffff'
    }).setOrigin(0.5);
    const run = this.add.text(width / 2, height / 2 - 30, 'Correr', {
      fontFamily: 'Roboto',
      fontSize: '26px',
      color: '#ffff00'
    }).setOrigin(0.5).setInteractive();
    run.on('pointerdown', () => { this.scene.start('race'); });
    const upgrade = this.add.text(width / 2, height / 2 + 10, 'Upgrade', {
      fontFamily: 'Roboto',
      fontSize: '26px',
      color: '#ffff00'
    }).setOrigin(0.5).setInteractive();
    upgrade.on('pointerdown', () => { this.scene.start('upgrade'); });
    const changeCar = this.add.text(width / 2, height / 2 + 50, 'Trocar Carro', {
      fontFamily: 'Roboto',
      fontSize: '26px',
      color: '#ffff00'
    }).setOrigin(0.5).setInteractive();
    changeCar.on('pointerdown', () => { this.scene.start('carselect'); });
  }
}
