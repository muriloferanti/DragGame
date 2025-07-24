import PreloadScene from './scenes/PreloadScene.js';
import MenuScene from './scenes/MenuScene.js';
import RaceScene from './scenes/RaceScene.js';
import EndScene from './scenes/EndScene.js';
import UpgradeScene from './scenes/UpgradeScene.js';
import CarSelectScene from './scenes/CarSelectScene.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: [PreloadScene, MenuScene, RaceScene, EndScene, UpgradeScene, CarSelectScene]
};

const game = new Phaser.Game(config);
