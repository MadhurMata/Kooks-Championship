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
    <div class="info">
      <div><h2 class="score">0</h2></div>
      <div><h2>Score</h2></div>
    </div>
    <div><canvas id="canvas" width="600" height="600"></canvas></div>
  </div>`;
    buildScreen(gameScreen);
    
    var div= document.querySelector(".score");
    
    // mySound = new sound("../music/bustinsurf.mp3")
    var canvas = document.getElementById("canvas");
    var game = new Game(canvas, endGame);
    game.start();

    function endGame(){
    game.stop();
    buildGameOverScreen()
  }
  function setPoints(points) {
    div.innerText = points
  }
  game.onSetPoints(setPoints)
}

  function buildGameOverScreen(){
    var gameOverScreen = 
    `<div id="z">
    <div><img class="gameOver" src="./images/gameOver.png" alt="Game over words"></div> 
    <div>
      <div class="tableTitle"><h2>Ranking</h2></div>
      <div class="bestScores">
        <ol>
          <li>..............</li>
          <li>..............</li>
          <li>..............</li>
          <li>..............</li>
          <li>..............</li>
        </ol>
      </div>
    </div>
    <div class="buttons">
      <div class="startButton"><a href="#" id="start" class="button">Play again</a></div>  
      <div class="returnButton"><a href="#" id="start" class="button">Return</a></div>   
    </div>
  </div>`;    
    buildScreen(gameOverScreen);
    document.getElementById("start").addEventListener("click", startGame);  
    
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

