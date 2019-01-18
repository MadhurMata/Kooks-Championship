"use strict"

function Game(canvas) {
  this.ctx = canvas.getContext("2d");
  this.player = new Player(canvas)
  this.enemies;


  

  Game.prototype.gameStart(function (element){
    this.player();
  });


    startLoop();
    gameStop();
    checkCollideWithEnemy();




}
