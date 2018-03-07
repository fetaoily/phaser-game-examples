(() => {
  let game;

  window.onload = () => {
    game = new NewGame();
  };

  class NewGame extends Phaser.Game {
    constructor () {
      super(800, 600, Phaser.AUTO);
      this.state.add('PlayGame', PlayGame);
      this.state.start('PlayGame');
    }
  }

  class PlayGame extends Phaser.State {
    constructor () {
      super();
    }

    preload () {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
      this.botData = {
        "frames": [

          {
            "filename": "running bot.swf/0000",
            "frame": {"x": 34, "y": 128, "w": 56, "h": 60},
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {"x": 0, "y": 2, "w": 56, "h": 60},
            "sourceSize": {"w": 56, "h": 64}
          },
          {
            "filename": "running bot.swf/0001",
            "frame": {"x": 54, "y": 0, "w": 56, "h": 58},
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {"x": 0, "y": 3, "w": 56, "h": 58},
            "sourceSize": {"w": 56, "h": 64}
          },
          {
            "filename": "running bot.swf/0002",
            "frame": {"x": 54, "y": 58, "w": 56, "h": 58},
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {"x": 0, "y": 3, "w": 56, "h": 58},
            "sourceSize": {"w": 56, "h": 64}
          },
          {
            "filename": "running bot.swf/0003",
            "frame": {"x": 0, "y": 192, "w": 34, "h": 64},
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {"x": 11, "y": 0, "w": 34, "h": 64},
            "sourceSize": {"w": 56, "h": 64}
          },
          {
            "filename": "running bot.swf/0004",
            "frame": {"x": 0, "y": 64, "w": 54, "h": 64},
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {"x": 1, "y": 0, "w": 54, "h": 64},
            "sourceSize": {"w": 56, "h": 64}
          },
          {
            "filename": "running bot.swf/0005",
            "frame": {"x": 196, "y": 0, "w": 56, "h": 58},
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {"x": 0, "y": 3, "w": 56, "h": 58},
            "sourceSize": {"w": 56, "h": 64}
          },
          {
            "filename": "running bot.swf/0006",
            "frame": {"x": 0, "y": 0, "w": 54, "h": 64},
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {"x": 1, "y": 0, "w": 54, "h": 64},
            "sourceSize": {"w": 56, "h": 64}
          },
          {
            "filename": "running bot.swf/0007",
            "frame": {"x": 140, "y": 0, "w": 56, "h": 58},
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {"x": 0, "y": 3, "w": 56, "h": 58},
            "sourceSize": {"w": 56, "h": 64}
          },
          {
            "filename": "running bot.swf/0008",
            "frame": {"x": 34, "y": 188, "w": 50, "h": 60},
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {"x": 3, "y": 2, "w": 50, "h": 60},
            "sourceSize": {"w": 56, "h": 64}
          },
          {
            "filename": "running bot.swf/0009",
            "frame": {"x": 0, "y": 128, "w": 34, "h": 64},
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {"x": 11, "y": 0, "w": 34, "h": 64},
            "sourceSize": {"w": 56, "h": 64}
          },
          {
            "filename": "running bot.swf/0010",
            "frame": {"x": 84, "y": 188, "w": 56, "h": 58},
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {"x": 0, "y": 3, "w": 56, "h": 58},
            "sourceSize": {"w": 56, "h": 64}
          }],
        "meta": {
          "app": "http://www.texturepacker.com",
          "version": "1.0",
          "image": "running_bot.png",
          "format": "RGBA8888",
          "size": {"w": 252, "h": 256},
          "scale": "0.2",
          "smartupdate": "$TexturePacker:SmartUpdate:fb56f261b1eb04e3215824426595f64c$"
        }
      };
      //
      this.load.atlas('bot', '/assets/sprites/running_bot.png', null, this.botData);

    }

    create () {
      this.bot = this.add.sprite(this.world.centerX, 300, 'bot');
      this.bot.animations.add('run');
      this.bot.animations.play('run', 10, true);
    }

    update () {
    }

    render () {
    }
  }
})();