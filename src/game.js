"use strict"

function Game(canvas) {
  this.ctx = canvas.getContext("2d");
  this.player = new Player(canvas);
  this.enemy = new Enemy(canvas);
  this.enemies = [];
  this.animation;

  this._clearCanvas = function() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  this._drawCanvas = function() {
        this.player.draw();
        this.enemy.draw();
        
    }

  this._updateGame = function() {
      this.player.update();

      this.enemy.update();
      
  }
};

  

Game.prototype.start = function(){
  function loop() {

    this._updateGame();

    this._clearCanvas();

    this._drawCanvas();

    this.animation = window.requestAnimationFrame(loop.bind(this));

  }

  this.animation = window.requestAnimationFrame(loop.bind(this));

};


 