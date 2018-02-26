let game;
let rect = new Phaser.Rectangle(100, 100, 100, 100);
let circle = new Phaser.Circle(280, 150, 100);
let point = new Phaser.Point(100, 280);

window.onload = () => {
  game = new Phaser.Game(800, 600, Phaser.AUTO);
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
  },
  create () {
  },
  update () {
  },
  render () {
    game.debug.geom(rect, 'rgba(255,0,0,1)');
    game.debug.geom(circle, 'rgba(255,255,0,1)');
    game.debug.geom(point, 'rgba(255,255,255,1)');
    game.debug.pixel(200, 280, 'rgba(0,255,255,1)');
    game.debug.text('This is debug text', 100, 380);
  }
};
