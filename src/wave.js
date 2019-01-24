"use strict"


function Wave(canvas, y, speedX, speedY) {
  this.size = 50;
  this.y = Math.random() * canvas.height - canvas.height / 2;
  this.x = -this.size;
  this.canvas = canvas;
  this.speed = 2;
  this.direction = 1;
  this.ctx = canvas.getContext('2d');
  this.img = new Image();
  this.img.src = "./images/wave.svg";
  this.sickSound = new Audio("./music/sick.m4a");
    
}

Wave.prototype.draw = function () {
  this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
};

Wave.prototype.update = function () {
  this.x += this.direction * this.speed;
  this.y += this.direction * this.speed;
};

Wave.prototype.isInScreen = function () {
  return this.x + this.size >= 0;
};

Wave.prototype.collide = function () {
  this.sickSound.play();
  this.x = -100000;
};



