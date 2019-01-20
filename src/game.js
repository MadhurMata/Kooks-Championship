"use strict"

function Game(canvas, endGame) {
  this.ctx = canvas.getContext("2d");
  this.player = new Player(canvas);
  this.enemies = [];
  this.animation;
  this.canvas = canvas;
  this.endGame = endGame;

};

Game.prototype.clearCanvas = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.drawCanvas = function(){
      this.player.draw();
      this.enemies.forEach(function(enemy){
        enemy.draw();
      });      
}

Game.prototype.updateGame = function() {
    this.player.update();

    if (Math.random()> 0.98 && this.enemies.length < 8){
      this.createEnemies();
    };

    this.enemies = this.enemies.filter(function(enemy){
      return enemy.isInScreen();
    });

    this.enemies.forEach(function(enemy){
      enemy.update();

      if(this.player.checkCollition(enemy)){
        console.log("chocan");
        this.endGame();
      }
    }.bind(this));
    
};

Game.prototype.createEnemies = function(){
  var speedX = Math.round(Math.random() * 2 + 2);
  var y = Math.round(Math.random() * canvas.height);
  var direction = Math.round(Math.random());
  var speedY = Math.round(Math.random() * 2 + 2);
  if(direction === 0){
    speedY = Math.round(Math.random() * 2 + 2)*(-1);
    speedX = Math.round(Math.random() * 2 +2)*(-1);

  }
  this.enemies.push(new Enemy(canvas, y, speedX, speedY));
}


Game.prototype.start = function(){
  function loop() {

    this.updateGame();

    this.clearCanvas();

    this.drawCanvas();

    this.animation = window.requestAnimationFrame(loop.bind(this));

  }

  this.animation = window.requestAnimationFrame(loop.bind(this));

};

Game.prototype.stop = function(){
  window.cancelAnimationFrame(this.animation);
}
 