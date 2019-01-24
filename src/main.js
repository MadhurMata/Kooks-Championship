"use strict"

function main() {

  function buildScreen(html) {
    var div = document.getElementById("container");
    div.innerHTML = html;
  }
  function startScreen() {
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
    buildScreen(splashScreen);
    
    
    document.getElementById("start").addEventListener("click", startGame);
  }
  function startGame() {
    var gameScreen =
      `<div id="y">
    <div class="info">
      <div><h2 class="score">0</h2></div>
      <div><h2>Score</h2></div>
    </div>
    <div><canvas id="canvas" width="700" height="600"></canvas></div>
  </div>`;
    buildScreen(gameScreen);

    var backGroundAudio = new Audio("./music/bustinsurf.mp3");
    backGroundAudio.play();
    var div = document.querySelector(".score");

    var canvas = document.getElementById("canvas");
    var game = new Game(canvas, endGame);
    game.start();
    function endGame() {
      game.stopGame();
      backGroundAudio.pause();
      buildGameOverScreen()
    }
    function setPoints(points) {
      div.innerText = points
    }
    game.onSetPoints(setPoints)

  }

  function buildGameOverScreen() {
    var gameOverScreen =
    `<div id="z">
      <div><img class="gameOver" src="./images/gameOver.png" alt="Game over words"></div> 
      <div class="rankingButtons">
        <div class="table">
          <div class="tableTitle"><h2>League Ranking</h2></div>
          <div class="bestScores">
            <ol "ranking">
              <li class="primero">..........................</li>
              <li "segundo">..........................</li>
              <li "tercero">..........................</li>
              <li "cuarto">..........................</li>
              <li "quinto">..........................</li>
            </ol>
          </div>
        </div>
        <div class="buttons">
          <div><a href="#" id="start" class="startButton">Play again</a></div>  
          <div><a href="#" id="newPlayer" class="returnButton">New Player</a></div>   
        </div>
      </div>  
    </div>`;

    // function printRanking(){
    //   var ranking = document.getElementById("ranking");
    //   sessionStorage.getItem(highScore);
    //   ranking.innerHTML = highScore.name + highScore.score;
    // }
    // printRanking();
    buildScreen(gameOverScreen);
    document.getElementById("start").addEventListener("click", startGame);
    document.getElementById("newPlayer").addEventListener("click", startScreen);

  }

  startScreen();


};
window.addEventListener("load", main)

document.body.addEventListener("keydown", function (e) {
  keysPress[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
  keysPress[e.keyCode] = false;
});

