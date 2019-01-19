"use strict"

function Game(canvas) {
  this.ctx = canvas.getContext("2d");
  this.player = new Player(canvas);
  this.enemies =[];
  this.animation;

  this._clearCanvas = function() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  this._drawCanvas = function() {
        this.player.draw();
        this.enemies.forEach(function(enemy) {
            enemy.draw();
        })
    }

  this._updateGame = function() {
      this.player.update();
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

Game.prototype.keyUp = function(){
  this.player.setDirection("up")
}
Game.prototype.keyDown = function(){
  this.player.setDirection("down")
}
Game.prototype.keyLeft = function(){
  this.player.setDirection("left")
}
Game.prototype.keyRight = function(){
  this.player.setDirection("right")
}