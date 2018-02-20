let game;

let arrow;
let ball;
let catchFlag = false;

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
    game.load.image('analog', '/assets/tests/fusia.png');
    game.load.image('arrow', '/assets/sprites/longarrow2.png');
    game.load.image('ball', '/assets/sprites/pangball.png');
    game.load.image('space', '/assets/skies/deep-space.jpg');
  },
  create () {
    //
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 200;
    game.stage.backgroundColor = '#0072bc';
    let space = game.add.tileSprite(0, 0, 800, 600, 'space');
    space.autoScroll(0, 10);
    //
    let graphics = game.add.graphics(0, 0);
    graphics.beginFill(0x049e0c);
    graphics.drawRect(395, 350, 10, 250);
    //
    analog = game.add.sprite(400, 350, 'analog');
    game.physics.enable(analog, Phaser.Physics.ARCADE);
    analog.body.allowGravity = false;
    analog.width = 8;
    analog.rotation = 220;
    analog.alpha = 0.3;
    analog.anchor.setTo(0.5, 0.0);
    //
    arrow = game.add.sprite(400, 350, 'arrow');
    game.physics.enable(arrow, Phaser.Physics.ARCADE);
    arrow.anchor.setTo(0.1, 0.5);
    arrow.body.moves = false;
    arrow.body.allowGravity = false;
    arrow.alpha = 0.2;
    //
    ball = game.add.sprite(100, 400, 'ball');
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.anchor.setTo(0.5, 0.5);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.setTo(0.9, 0.9);
    //
    ball.inputEnabled = true;
    ball.input.start(0, true);
    ball.events.onInputDown.add(this.set);
    ball.events.onInputUp.add(this.launch);
  },
  update () {
    arrow.rotation = game.physics.arcade.angleBetween(arrow, ball);
    //
    if (catchFlag === true) {
      ball.x = game.input.activePointer.worldX;
      ball.y = game.input.activePointer.worldY;
      arrow.alpha = 1;
      analog.alpha = 0.5;
      analog.rotation = arrow.rotation - Math.PI / 2;
      analog.height = game.physics.arcade.distanceToPointer(arrow);
      launchVelocity = analog.height;
    } else {
      analog.rotation = arrow.rotation - Math.PI / 2;
      analog.height = game.physics.arcade.distanceBetween(arrow, ball);
    }
  },
  render () {
    game.debug.text('Drag the ball and release to launch', 32, 32);
    game.debug.bodyInfo(ball, 32, 32 * 2);
  },
  set () {
    ball.body.moves = false;
    ball.body.velocity.setTo(0, 0);
    ball.body.allowGravity = false;
    catchFlag = true;
  },
  launch () {
    catchFlag = false;

    ball.body.moves = true;
    arrow.alpha = 0.1;
    analog.alpha = 0.1;
    let Xvector = (arrow.x - ball.x) * 3;
    let Yvector = (arrow.y - ball.y) * 3;
    ball.body.allowGravity = true;
    ball.body.velocity.setTo(Xvector, Yvector);
  }

};
