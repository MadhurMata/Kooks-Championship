"use strict"

function Player(canvas) {
  this.x = 280;
  this.y = 280;
  this.srcX = 0;
  this.srcY = 52;
  this.size = 52;
  this.velY = 0;
  this.velX = 0;
  this.speed = 2;
  this.friction = 0.98;
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.img = new Image();
  this.img.src = "./images/surfer.png";

};

Player.prototype.draw = function () {
  this.ctx.drawImage(this.img, this.srcX, this.srcY, this.size, this.size, this.x, this.y, this.size, this.size);
};
var keysPress = [];
console.log(keysPress)
Player.prototype.update = function () {
  if (keysPress[38]) { //up
    this.srcY = 104;
    if (this.velY > -this.speed) {
      this.velY--;
    }
  } else if (keysPress[40]) { //down
    this.srcY = 52;
    if (this.velY < this.speed) {
      this.velY++;
    }
  } else if (keysPress[39]) { //right
    this.srcY = 0;
    if (this.velX < this.speed) {
      this.velX++;
    }
  } else if (keysPress[37]) { //left
    this.srcY = 156;
    if (this.velX > -this.speed) {
      this.velX--;
    }
  } else {
    this.srcY = 52;
  }
  this.movement();
};

Player.prototype.movement = function () {
  this.velY *= this.friction;
  this.y += this.velY;
  this.velX *= this.friction;
  this.x += this.velX;

  if (this.x >= this.canvas.width - this.size) {
    this.x = this.canvas.width - this.size;
  } else if (this.x <= 0) {
    this.x = 0;
  };

  if (this.y > this.canvas.height - this.size) {
    this.y = this.canvas.height - this.size;
  } else if (this.y <= 0) {
    this.y = 0;
  };
};

Player.prototype.checkCollision = function (enemy) {

  var rightCollision = this.x + this.size / 2 > enemy.x - enemy.size / 2;
  var leftCollision = this.x < enemy.x + enemy.size / 2;
  var topCollision = this.y < enemy.y + enemy.size / 2;
  var bottomCollision = this.y + this.size / 2 > enemy.y - enemy.size / 2;

  return leftCollision && rightCollision && topCollision && bottomCollision;

}

Player.prototype.checkCollision = function (wave) {

  var rightCollision = this.x + this.size / 2 > wave.x - wave.size / 2;
  var leftCollision = this.x < wave.x + wave.size / 2;
  var topCollision = this.y < wave.y + wave.size / 2;
  var bottomCollision = this.y + this.size / 2 > wave.y - wave.size / 2;

  return leftCollision && rightCollision && topCollision && bottomCollision;
}