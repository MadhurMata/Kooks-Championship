"use strict"


function Wave(canvas, y, speedX, speedY){
  this.size = 50;
  this.y = (canvas.height-this.size) /2;
  this.x = canvas.width-(this.size * 5);
  this.speedX = speedX;
  this.speedY = speedY;
  this.canvas = canvas;
  this.directionX = 1;
  this.directionY = 1;
  this.ctx = canvas.getContext('2d');
  this.img = new Image();
  this.img.src = "./images/wave.svg";
}

Wave.prototype.draw = function(){
  this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  console.log("wave")
};


Wave.prototype.update = function (){
  this.x -= this.directionX * this.speedX;
  this.y += this.directionY * this.speedY;
  
  if ((this.y <= 0) || (this.y >= this.canvas.height - this.size)) {
    this.directionY *= -1;
    if (this.y <= 0) {
      this.y = 0;
  }
}
if ((this.x <= 0) || (this.x >= this.canvas.width - this.size)) {
  this.directionX *= -1;
  if (this.x <= 0) {
    this.x = 0;
}
}

};

Wave.prototype.isInScreen = function () {
  return this.x + this.size >= 0;

};