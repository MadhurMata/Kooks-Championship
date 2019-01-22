"use strict"


function Wave(canvas, y, speedX, speedY) {
  this.size = 50;
  this.y = this.size;
  this.x = -this.size;
  // this.speedX = speedX;
  // this.speedY = speedY;
  this.canvas = canvas;
  // this.directionX = 1;
  // this.directionY = 1;
  this.speed = 2;
  this.direction = 1;
  this.ctx = canvas.getContext('2d');
  this.img = new Image();
  this.img.src = "./images/wave.svg";
}

Wave.prototype.draw = function () {
  this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
};



Wave.prototype.update = function () {
  this.x += this.direction * this.speed;
  console.log(this.x)
  this.y += this.direction * this.speed;

  //   if ((this.y <= 0) || (this.y >= this.canvas.height - this.size)) {
  //     this.directionY *= -1;
  //     if (this.y <= 0) {
  //       this.y = 0;
  //   }
  // }
  // if ((this.x <= 0) || (this.x >= this.canvas.width - this.size)) {
  //   this.directionX *= -1;
  //   if (this.x <= 0) {
  //     this.x = 0;
  // }
  // }

};

Wave.prototype.isInScreen = function () {
  return this.x + this.size >= 0;
};

Wave.prototype.collide = function () {
  this.x = -100000;
};

Wave.prototype.destroyWaves  = function(){
  if(this.y > this.canvas.height - (3 * this.size)){
    this.collide();
  }
}

