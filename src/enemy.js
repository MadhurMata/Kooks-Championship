"use strict"


function Enemy(canvas, y, speedX, speedY){
  this.y = y;
  this.size = 20;
  this.x =  canvas.width-(this.size * 5);
  this.speedX = speedX;
  this.speedY = speedY;
  this.canvas = canvas;
  this.directionX = 1;
  this.directionY = 1;
  this.ctx = canvas.getContext('2d');
}

Enemy.prototype.draw = function(){
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

Enemy.prototype.update = function (){
  console.log(this.y);
  this.x -= this.directionX * this.speedX;
  this.y += this.directionY * this.speedY;
  
  if ((this.y <= 0) || (this.y >= this.canvas.height - this.size)) {
    this.directionY *= -1;
}
if ((this.x <= 0) || (this.x >= this.canvas.width - this.size)) {
  this.directionX *= -1;
}
  

};

Enemy.prototype.inScreen = function () {
  
};
