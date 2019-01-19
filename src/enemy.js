"use strict"


function Enemy(){
  this.x =  x;
  this.y = y; 
  this.size = 20;
  this.speed = speed;
  this.ctx = canvas.getContext('2d');

}

Enemy.prototype.draw = function(){
  this.ctx.fillRect(this.x, this.y, this.size, this.size);

};

Enemy.prototype.update = function (){

};

Enemy.prototype.inScreen = function () {
  
};
