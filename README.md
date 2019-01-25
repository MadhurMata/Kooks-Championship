



MVP (CANVAS)



# Project's name
Kooks Championship


## Description
Game where the “kook” (player) is a surfer that moves around an ocean with sick waves, but it is also nested of sharks. Try to get as many waves you can in order to be one of the top 5 players in the ranking.

## MVP (DOM - CANVAS)

CANVAS One square moving around trying to avoid diferent other squares. The player loose if it collides with the other squares.

## Backlog
  - Give player lives
  - Give player points
  - Images
  - Backgrounds
  - Design
  - Music & sounds
  - High score

## Data structure
  ```function Game() {
    this.player;
    this.enemies;
    this.ctx;

    drawCanvas();
    gameStart();
    startLoop();
    gameStop();
    checkCollideWithEnemy();
  }

  function Player() {
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
  function Enemy() {
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
  ```

## States y States Transitions
Definition of the different states and their transition (transition functions)

Splash Screen
- Build splash screen
- Build splash DOM
- AddEventListener

Game Screen
  - Build game screen
  - Build game DOM
  - Destroy game DOM

Gameover Screen
  - Build Game Over Screen
  - Build DOM
  - AddEventListener

## Task
Task definition in order of priority

Pre-coding
  - Sketch DOM's for three screens
  - Define classes
  - Create main.js, game.js, player.js and       enemy.js document
  - Create index.html
  - Create css
  - Link documents
  - Create a canvas

 Design 
  - build html and css 3 screens

  Main
  - Call startGame function
  - buildSplashScreen();
  - destroySplashScreen();
  - addEventListener();
  - buildGameScreen();

  - buildGameoverScreen();
  - addEventListener
  - Test transition between screens

Game
  - Declare game constructor in game.js
      player, enemy, ctx, gameOver, animation
  - Declare clearCanvas 
  - Declare draw canvas function
      playerdraw() & enemiesdraw()
  - Declare updateGame
  - Declare start function
      declare loop function
        call gameOver function
        requestAnimationFrame
      requestAnimationFrame  
  - Declare createEnemies
  - Declare stop function
      cancelAnimationFrame
  - Declare key up, key down, key left and key right functions

 Player 
  - Declare player constructor function
      x, y direction, size, speed, canvas, ctx
  - Declare draw function
  - Declare setDirection function
      up, down, left, right
  - Declare Update function
      x, y
  - Declare checkCollideWithEnemy function
    rignt, left, up, down
    
Enemy
  - Declare enemy constructur function
      x, y, size, speed, ctx
  - Declare draw function
  - Declare update function
      x, y
  - Declare isInScreen



## Links


### Git
URls for the project repo and deploy
(https://github.com/MadhurMata/world-surf-kooks-league.git)

### Slides
URls for the project presentation (slides)
https://slides.com/madhursmg/wol/live