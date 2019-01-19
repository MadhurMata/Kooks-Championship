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
  this.directionX = 0; 
  this.directionY = 0; 
  this.speed = 2;
  this.canvas = canvas
  this.ctx = canvas.getContext('2d');
  
};

Player.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

Player.prototype.setDirection = function(direction) {
  if (direction === "up" || direction === "left" ) {
      this.direction = -1;
  } else if (direction === "down" || direction === "right") {
      this.direction = 1;
  }
}


Player.prototype.update = function(){
  // update x and y

  this.y += this.directionY * this.speed;
  this.x += this.directionX * this.speed;

};