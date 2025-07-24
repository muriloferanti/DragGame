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
  scene: {
    preload,
    create,
    update
  }
};

let car;
let cursors;

function preload() {
  // Placeholder asset: simple rectangle graphics
  this.graphics = this.add.graphics();
}

function create() {
  car = this.add.rectangle(100, 300, 50, 20, 0xff0000);
  this.physics.add.existing(car);
  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (cursors.right.isDown) {
    car.x += 5;
  }
}

const game = new Phaser.Game(config);
