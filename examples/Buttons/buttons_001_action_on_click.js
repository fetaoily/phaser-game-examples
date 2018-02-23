let game;

window.onload = () => {
  game = new Phaser.Game(800, 600, Phaser.AUTO);
  game.state.add('PlayGame', PlayGame);
  game.state.start('PlayGame');
};

let PlayGame = function () {
};

PlayGame.prototype = {
  preload () {
    //
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    //
    game.load.spritesheet('button', '/assets/buttons/button_sprite_sheet.png', 193, 71);
    game.load.image('background', '/assets/misc/starfield.jpg');

  },
  create () {
    game.stage.backgroundColor = '#182d3d';

    this.background = game.add.tileSprite(0, 0, 800, 600, 'background');

    this.button = game.add.button(game.world.centerX - 95, 400, 'button', this.actionOnClick, this, 2, 1, 0);
    //
    this.button.onInputOver.add(this.over, this);
    this.button.onInputOut.add(this.out, this);
    this.button.onInputUp.add(this.up, this);
  },
  update () {
  },
  render () {
  },
  over () {
    console.log('button over');
  },
  up () {
    console.log('button up', arguments);
  },
  out () {
    console.log('button out');
  },
  actionOnClick () {
    this.background.visible = !this.background.visible;
  }
};