"use strict"

function Game(canvas, endGame) {
  this.ctx = canvas.getContext("2d");
  this.player = new Player(canvas);
  this.enemies = [];
  this.waves = [];
  this.animation;
  this.canvas = canvas;
  this.endGame = endGame;
  this.score = 1;
  this.highScore = [];

};

Game.prototype.clearCanvas = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.drawCanvas = function () {
  this.player.draw();
  this.enemies.forEach(function (enemy) {
    enemy.draw();
  });
  this.waves.forEach(function (wave) {
    wave.draw();
  });

}

Game.prototype.updateGame = function () {

  this.player.update();

  if (Math.random() > 0.98 && this.enemies.length < 8) {
    this.createEnemies();
  };

  this.enemies = this.enemies.filter(function (enemy) {
    return enemy.isInScreen();
  });

  this.enemies.forEach(function (enemy) {
    enemy.update();

    if (this.player.checkCollition(enemy)) {
      this.endGame();
      enemy.sharkBite.play();

    }
  }.bind(this));


  if (this.waves.length < 1) {
    this.createWaves();
  };

  this.waves = this.waves.filter(function (wave) {
    return wave.isInScreen();
  });

  this.waves.forEach(function (wave) {
    wave.update();
    this.destroyWaves(wave);
    if (this.player.checkCollition(wave)) {
      wave.collide();
      this.setPoints(this.score);
      this.score++;
    }
  }.bind(this));

};

Game.prototype.createEnemies = function () {
  var speedX = Math.round(Math.random() * 2 + 2);
  var y = Math.round(Math.random() * canvas.height);
  var direction = Math.round(Math.random());
  var speedY = Math.round(Math.random() * 2 + 2);
  if (direction === 0) {
    speedY = Math.round(Math.random() * 2 + 2) * (-1);
    speedX = Math.round(Math.random() * 2 + 2) * (-1);

  }
  this.enemies.push(new Enemy(canvas, y, speedX, speedY));
}

Game.prototype.createWaves = function () {
    this.waves.push(new Wave(canvas));
};
Game.prototype.destroyWaves = function(wave){
  if(wave.y > this.canvas.height - (3 * wave.size)){
    wave.collide();
  }
}

Game.prototype.start = function () {
  function loop() {
    this.animation = window.requestAnimationFrame(loop.bind(this));

    this.updateGame();

    this.clearCanvas();

    this.drawCanvas();
  };

  this.animation = window.requestAnimationFrame(loop.bind(this));

};

Game.prototype.stopGame = function () {
  window.cancelAnimationFrame(this.animation);
}

Game.prototype.onSetPoints = function (callbackPoints) {
  this.setPoints = callbackPoints;
}

Game.prototype.storeScores = function(){
  if(this.score > highScore){
    
  }
}
