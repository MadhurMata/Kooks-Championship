"use strict"
function main() {
function startGame(){
  // var canvas = document.getElementById("canvas");
  // var game = new Game(canvas);
  buildScreen(gameScreen);
  // timeOut();
}


function buildScreen(html) {
  //Crear una varianle y seleccionar un elemento del DOM por el ID
  var div = document.getElementById("container");
  //MOdificar todo el interior del html de lo selecionado anteriormente por el atributo que me pasa la funcion
  div.innerHTML = html;
}

// var splashScreen =
// `<div id="x">
//   <h1>World Surf Kooks League</h1>
//   <a href="#" id="start" class="button">Start Game</a>
// </div>`;

var gameScreen =
  `<div id="y">         
    <a href="#" class="button"> tryig transitions</a>
    <canvas id="canvas" width="500" height="500"></canvas>
  </div>`;  

var gameOverScreen = 
  `<div id="z"> 
    <h1>Game Over</h1>
    <a href="#" id="start" class="button">Start Game</a>
  </div>`;

  function start(){
    //LLamo y pinto pantalla de inicio
    buildScreen(splashScreen);  
    //Pongo la funcion de ir a la pantalla de juego en un boton de splash screen
    document.getElementById("start").addEventListener("click", startGame);  
  }

    //Hago que la pantalla game espere tres segundos despues ejecuto buildScreen(gameover) y el addEventListener
  // function timeOut(){
  //   setTimeout(function(){
  //   buildScreen(gameOverScreen);
  //   document.getElementById("start").addEventListener("click", startGame);  
  //   }, 3000);
  // }  

  start();

};
// Hace que cargue la pagina antes de ejecutar todo el codigo en main
window.addEventListener("load", main)
