'use strict';

let game;

window.onload = () => {
  game = new Phaser.Game(600, 400, Phaser.AUTO);
  game.state.add('PlayGame', PlayGame);
  game.state.start('PlayGame');
};

let PlayGame = function () {
};

PlayGame.prototype = {
  preload () {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    //
    game.load.image('atari', '/assets/sprites/atari130xe.png');
    game.load.image('mushroom', '/assets/sprites/mushroom2.png');
  },
  create () {
    game.stage.backgroundColor = '#2d2d2d';

    this.sprite1 = game.add.sprite(50, 150, 'atari');
    this.sprite1.name = 'atari';
    game.physics.enable(this.sprite1, Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.x = -100;

    this.sprite1.body.immovable = true;
    this.sprite1.body.allowGravity = false;

    this.sprite2 = game.add.sprite(400, 150, 'mushroom');
    this.sprite2.name = 'mushroom';
    game.physics.enable(this.sprite2, Phaser.Physics.ARCADE);
    this.sprite2.body.velocity.x = -100;
    this.sprite2.body.bounce.x = 0.5;
    this.sprite2.body.collideWorldBounds = true;

    this.sprite2.inputEnabled = true;
    this.sprite2.input.enableDrag(false);


  },
  update () {
    game.physics.arcade.collide(this.sprite1, this.sprite2, this.collisionHandler, null, this);
  },
  render () {
    game.debug.bodyInfo(this.sprite1, 32, 32);
    game.debug.body(this.sprite1);
    game.debug.body(this.sprite2);
  },
  collisionHandler () {
    game.stage.backgroundColor = '#992d2d';
  }
};