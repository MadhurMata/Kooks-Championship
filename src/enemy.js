"use strict"


function Enemy(canvas){
  this.x =  100;
  this.y = 100; 
  this.size = 20;
  this.speed = 2;
  this.ctx = canvas.getContext('2d');

}

Enemy.prototype.draw = function(){
  this.ctx.fillRect(this.x, this.y, this.size, this.size);

};

Enemy.prototype.update = function (){
  this.x -= this.speed;

};

Enemy.prototype.inScreen = function () {
  
};
