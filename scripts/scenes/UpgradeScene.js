import { loadState, saveState } from '../gameState.js';

export default class UpgradeScene extends Phaser.Scene {
  constructor() { super('upgrade'); }

  create() {
    this.state = loadState();
    const { width, height } = this.scale;
    this.add.text(width / 2, 40, 'Upgrades', { fontSize: '24px', color: '#ffffff' }).setOrigin(0.5);
    this.pointsText = this.add.text(width / 2, 80, `Pontos: ${this.state.points}`, { fontSize: '20px', color: '#ffffff' }).setOrigin(0.5);
    this.createUpgradeOption('Pneus (Tração)', 'tires', 0);
    this.createUpgradeOption('Turbo/Escapamento', 'turbo', 1);
    this.createUpgradeOption('ECU Tune', 'ecu', 2);
    const back = this.add.text(width / 2, height - 40, 'Voltar', { fontSize: '20px', color: '#ffffff' }).setOrigin(0.5).setInteractive();
    back.on('pointerdown', () => { saveState(this.state); this.scene.start('menu'); });
  }

  createUpgradeOption(label, key, index) {
    const { width } = this.scale;
    const y = 140 + index * 40;
    const level = this.state.upgrades[key];
    const text = this.add.text(width / 2, y, `${label}: Nivel ${level}`, { fontSize: '20px', color: '#ffffff' }).setOrigin(0.5).setInteractive();
    text.on('pointerdown', () => {
      const cost = 100;
      if (this.state.points >= cost) {
        this.state.points -= cost;
        this.state.upgrades[key] += 1;
        this.pointsText.setText(`Pontos: ${this.state.points}`);
        text.setText(`${label}: Nivel ${this.state.upgrades[key]}`);
      }
    });
  }
}
