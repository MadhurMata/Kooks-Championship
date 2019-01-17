



MVP (CANVAS)



# Project's name
WSK (World Surf Kooks League)


## Description
Game where the “kook” (player) is a surfer that moves around an ocean with sick waves,but it is also nested of sharks.

## MVP (DOM - CANVAS)

CANVAS One square moving around trying to avoid diferent other squares. The player lose if it collides with the other squares.

## Backlog
  Give player lives
  Give player points
  Images
  Backgrounds
  Design
  Music
  High score

## Data structure
  function game() {
    this.player;
    this.enemies;
    this.ctx;

    gameStart();
    startLoop();
    gameStop();
    checkCollideWithEnemy();
  }

  function player() {
    this.x;
    this.y;
    this.size;
    this.direction;
    this.ctx;
    this.canvas;

    setDirection();
    checkCollition();
    setDraw;
    setUpdate;
  }
  function enemy() {
    this.x;
    this.y;
    this.size;
    this.direction;
    this.ctx;
    this.canvas;

    setDirection();
    checkCollition();
    setDraw;
    setUpdate;
  }

## States y States Transitions
Definition of the different states and their transition (transition functions)

Splash Screen
  Splash screen
  Build splash DOM
  AddEventListener

Game Screen
  Game screen
  Build game DOM
  Game start
  

Gameover Screen
  Game Over Screen
  Biuild DOM
  Play again
  AddEventListener

## Task
Task definition in order of priority

Pre-coding
  Sketch DOM's for three screens
  Write 
  Create main.js, game.js, player.js and enemy.js document
  Create index.html
  Link documents
  Build a game DOM
  Create a canvas
  Declare startGame function in main.js
  Build Splash DOM
  Build Game Over DOM


Game
  Declare game function in game.js
  Declare new player
  Declare new enemy
  Declare draw canvas function (playerdraw() & enemiesdraw())
  Declare start function
  Declare stop function
  Declare key up, key down, key left and key right functions



 Player 
  Declare player constructor funtion
  Declare draw function
  Declare setDirection function
  Declare Update function
  Declare collition function

Enemy
  Declare enemy constructur function
  Declare draw function
  Declare setDirection function
  Declare Update function

Collition function




## Links


### Trello
[Link url](https://trello.com)

### Git
URls for the project repo and deploy
(https://github.com/MadhurMata/world-surf-kooks-league.git)

### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)