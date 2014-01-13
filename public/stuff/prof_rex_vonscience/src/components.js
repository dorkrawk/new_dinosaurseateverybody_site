// The Grid
Crafty.c('Grid', {
  init: function() {
    this.attr({
      w: Game.map_grid.tile.width,
      h: Game.map_grid.tile.height
    })
  },

  at: function(x, y) {
    if (x === undefined && y === undefined) {
      return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
    } else {
      this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height});
      return this;
    }
  }
});

// an Actor is any entity on a 2D canvas grid
Crafty.c('Actor', {
  init: function() {
    this.requires('2D, Canvas, Grid');
  }
});

// the player!
Crafty.c('ProfRexVonScience', {
  init: function() {
    this.requires('Actor, Fourway, Collision, Color')
      .fourway(2)
      .stopOnSolids()
      .dieOnMobHit()
      .onHit('ShipPiece', this.pickUpPiece)
      .color('rgb(44, 103, 0)')
      .bind("keydown", function(e) {
        if(e.keyCode === Crafty.keys.SP) {
          if(!this.shoot) {
            this.shoot = true;
            this.delay(function() {
                this.shoot = false;
            }, 100);

            // create bullet to be shot
          }
        }
      });

  },

  stopOnSolids: function() {
    this.onHit('Solid', this.stopMovement);

    return this;
  },

  stopMovement: function() {
    this._speed = 0;
    if (this._movement) {
      this.x -= this._movement.x;
      this.y -= this._movement.y;
    }
  },

  dieOnMobHit: function() {
    this.onHit('Mob', function() {
      Crafty.trigger('PlayerDie', this);
    });

    return this;
  },

  pickUpPiece: function(data) {
    piece = data[0].obj;
    piece.collect();
  }
});

// all the spaceship pieces
Crafty.c('ShipPiece', {
  init: function() {
    this.requires('Actor, Color')
      .color('silver');
  },

  collect: function() {
    this.destroy();
    Crafty.trigger('PieceCollected', this);
  }
});

Crafty.c('RightWing', {
  init: function() {
    this.requires('ShipPiece');
  }
});

Crafty.c('LeftWing', {
  init: function() {
    this.requires('ShipPiece');
  }
});

Crafty.c('AntiCometLaser', {
  init: function() {
    this.requires('ShipPiece');
  }
});

Crafty.c('ShipBody', {
  init: function() {
    this.requires('ShipPiece');
  }
});

Crafty.c('Engine', {
  init: function() {
    this.requires('ShipPiece');
  }
});

Crafty.c('FuzzyDice', {
  init: function() {
    this.requires('ShipPiece');
  }
});

// Mobs

Crafty.c('Mob', {
  init: function() {
    this.requires('Actor, Solid, Collision, Color');
  }
});

Crafty.c('LittleMammal', {
  init: function() {
    this.requires('Mob')
      .color('rgb(128, 102, 65)')
      .redirectOnSolid();
    this.v = 5; // speed of mob
    this.bind('EnterFrame', this.doMotion);
  },

  doMotion: function() {
    if (Math.random() < 0.9) {
      this.x = this.x + this.v;
    } else {
      this.y = this.y + this.v;
    }
  },

  redirectOnSolid: function() {
    this.onHit('Solid', this.redirect);

    return this;
  },

  redirect: function() {
    this.v = -this.v;
  }
});

Crafty.c('Mammoth', {
  init: function() {
    this.requires('Mob')
      .color('rgb(127, 84, 23)');
  }
});

Crafty.c('TimeTraveler', {
  init: function() {
    this.requires('Mob')
      .color('rgb(247, 220, 180)');
  }
});

Crafty.c('Commet', {
  init: function() {
    this.requires('Mob')
      .color('rgb(0, 0, 5)');
  }
});

// Shooting things

Crafty.c('Projectile', {
  projectile: function(dir) {
    this.bind('EnterFrame', function() {
      this.move(dir, 15);
      if(this.x > Game.width() || this.y > Game.height() || this.x < 0 || this.y < 0) {
        this.destroy();
      }
    });
    return this;
  }
});

// build more general laser beam element here
//Crafty.e("2D, DOM, color, Projectile").attr({x: bx, y: this.y + 31, w: 5, h: 2, z:50}).color("rgb(250,0,0)").bullet(dir);

// World things

Crafty.c('Tree', {
  init: function() {
    this.requires('Actor, Solid, Color')
      .color('rgb(20, 185, 40)');
  }
});

// oh look, a rock
Crafty.c('Rock', {
  init: function() {
    this.requires('Actor, Solid, Color')
      .color('rgp(241, 239, 226)');
  }
});

Crafty.c('Fern', {
  init: function() {
    this.requires('Actor, Solid, Color')
      .color('rgp(146, 205, 0)');
  }
});