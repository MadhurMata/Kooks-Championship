"use strict"

// - Declare player constructor function
//       x, y direction, size, speed, canvas, ctx
//   - Declare draw function
//   - Declare setDirection function
//       up, down, left, right
//   - Declare Update function
//       x, y
//   - Declare checkCollideWithEnemy function
//     rignt, left, up, down

function Player(canvas) {
  this.x =  280;
  this.y = 280;
  this.size = 40;
  this.velY = 0;
  this.velX = 0; 
  this.speed = 3;
  this.friction = 0.8;
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  
};

Player.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
};
var keys = [];

Player.prototype.update = function() {
  if (keys[38]) {
    if (this.velY > -this.speed) {
        this.velY--;
    }
}

if (keys[40]) {
    if (this.velY < this.speed) {
        this.velY++;
    }
}
if (keys[39]) {
    if (this.velX < this.speed) {
        this.velX++;
    }
}
if (keys[37]) {
    if (this.velX > -this.speed) {
        this.velX--;
    }
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

Player.prototype.checkCollition = function(enemy){
  
    var rightCollition = this.x + this.size / 2 > enemy.x - enemy.size / 2;
    var leftCollition = this.x < enemy.x + enemy.size / 2;
    var topCollition = this.y  < enemy.y + enemy.size / 2;
    var bottomCollition = this.y + this.size / 2 > enemy.y - enemy.size / 2;

    return leftCollition && rightCollition && topCollition && bottomCollition;

}
