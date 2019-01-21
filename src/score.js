"use strict"


function Wave(canvas, y, speedX, speedY){
  this.size = 30;
  this.y = canvas.height-(this.size * 5);
  this.x = canvas.width-(this.size * 5);
  this.speedX = speedX;
  this.speedY = speedY;
  this.canvas = canvas;
  this.directionX = 1;
  this.directionY = 1;
  this.ctx = canvas.getContext('2d');
  this.img = new Image();
}

Wave