// Intro screen
Crafty.scene('Intro', function() {
  Crafty.e('2D, DOM, Text')
    .text('<h1>Welcome to Professor Rex VonScience Saves The World</h1> (press any key to start)')
    .attr({ x: 0, y: 100, w: Game.width() })
    .css($text_css);

  // load sprite maps

  // define sprites

  // load sounds

  // start game on keypress
  this.start_game = this.bind('KeyDown', function() {
    Crafty.scene('Area1');
  });
}, function() {
  this.unbind('KeyDown', this.start_game);
});

Crafty.scene('Area1', function() {
  // encounter small mammals

  var start_x = 2;
  var start_y = 5;

  // A 2D array to keep track of all occupied tiles
  this.occupied = new Array(Game.map_grid.width);
  for (var i = 0; i < Game.map_grid.width; i++) {
    this.occupied[i] = new Array(Game.map_grid.height);
    for (var y = 0; y < Game.map_grid.height; y++) {
      this.occupied[i][y] = false;
    }
  }

  this.player = Crafty.e('ProfRexVonScience').at(start_x, start_y);
  this.occupied[start_x][start_y] = true;
  this.occupied[this.player.at().x, this.player.at().y] = true;

  for (var x = 0; x < Game.map_grid.width; x++) {
    for (var y = 0; y < Game.map_grid.height; y++) {
      var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

      if(at_edge) {
        // Put trees around the edges
        Crafty.e('Tree').at(x, y);
        this.occupied[x][y] = true;
      } else if (Math.random() < 0.06) {
        // Place a tree or rock entity at the current tile
        var tree_or_rock = (Math.random() > 0.3) ? 'Tree' : 'Rock';
        Crafty.e(tree_or_rock).at(x, y);
        this.occupied[x][y] = true;
      } else if (Math.random() < 0.005) {
        Crafty.e('LittleMammal').at(x, y);
        this.occupied[x][y] = true;
      }
    }
  }

  var piece1placed = false
  var piece2placed = false

  while(!piece1placed && !piece2placed) {
    if(!piece1placed) {
      var piece1x = getRandomInt(2, Game.map_grid.width - 2);
      var piece1y = getRandomInt(2, Game.map_grid.height - 2);

      if(!this.occupied[piece1x][piece1y]) {
        Crafty.e('RightWing').at(piece1x, piece1y);
        this.occupied[piece1x][piece1x] = true;
        piece1placed = true
      }
    }
    if(!piece2placed) {
      var piece2x = getRandomInt(2, Game.map_grid.width - 2);
      var piece2y = getRandomInt(2, Game.map_grid.height - 2);

      if(!this.occupied[piece2x][piece2y]) {
        Crafty.e('LeftWing').at(piece2x, piece2y);
        this.occupied[piece2x][piece2x] = true;
        piece2placed = true
      }
    }
  }

  this.death = this.bind('PlayerDie', function() {
    Crafty.scene('EverybodyDies');
  });

});

Crafty.scene('Area2', function() {
  // encounter small mammals and maybe some mammoths
});

Crafty.scene('Area3', function() {
  // small mammals, mammoths, and perhaps a time travler or 2
});

Crafty.scene('ShipLaunch', function() {
  // mainly just watch the spaceship launch
})

Crafty.scene('CometArea', function() {
  // shoot down a comet from a space ship
});

Crafty.scene('EverybodyDies', function() {
  // go to this scene if Rex dies in any area
  Crafty.e('2D, DOM, Text')
    .text('<h2>You failed, now all the dinosaurs die.</h2> (press any key to restart)')
    .attr({ x: 0, y: 100, w: Game.width() })
    .css($text_css);

  this.restart_game = this.bind('KeyDown', function() {
    Crafty.scene('Intro');
  });
}, function() {
  this.unbind('KeyDown', this.restart_game);
});

Crafty.scene('Win', function() {
  // you've won the game!
});




