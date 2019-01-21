"use strict"
function main() {
  
  function buildScreen(html) {
    //Crear una varianle y seleccionar un elemento del DOM por el ID
    var div = document.getElementById("container");
    //MOdificar todo el interior del html de lo selecionado anteriormente por el atributo que me pasa la funcion
    div.innerHTML = html;
  }
  function startScreen(){
    var splashScreen =
    `<div id="x">
    <div>
      <div><h1>World Surf Kooks League</h1></div>
      <div class="playerName">
        <div>
          <h2>Player Name</h2>
        </div>
        <div>
          <textarea id="insertName" cols="30" rows="1"></textarea>
          </div>
      </div>
      <div><a href="#" id="start" class="button">Start Game</a></div> 
    </div>
  </div>`;
    //LLamo y pinto pantalla de inicio
    buildScreen(splashScreen);  
    //Pongo la funcion de ir a la pantalla de juego en un boton de splash screen
    document.getElementById("start").addEventListener("click", startGame);  
  }
  
  function startGame(){
    var gameScreen =
    `<div id="y">         
      <canvas id="canvas" width="600" height="600"></canvas>
    </div>`;
    buildScreen(gameScreen);
    var canvas = document.getElementById("canvas");
    var game = new Game(canvas, endGame);
    game.start();

    function endGame(){
    game.stop();
    buildGameOverScreen()
  }
  
    function buildGameOverScreen(){
      var gameOverScreen = 
      `<div id="z"> 
        <h1>Game Over</h1>
        <a href="#" id="start" class="button">Start Game</a>
      </div>`;    
      buildScreen(gameOverScreen);
      document.getElementById("start").addEventListener("click", startGame);  
      
    }  
}

  startScreen();


};
// Hace que cargue la pagina antes de ejecutar todo el codigo en main
window.addEventListener("load", main)

document.body.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});

