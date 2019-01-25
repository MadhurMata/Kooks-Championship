"use strict"

function main() {

  function buildScreen(html) {
    var div = document.getElementById("container");
    div.innerHTML = html;
  }
  function startScreen() {
    var splashScreen =
      `<div id="firstScreen">
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

  
    document.getElementById("start").addEventListener("click", function() {
      var name = document.getElementById("insertName").value
      console.log(name)
      startGame(name)
    });
    
  
  }
  function startGame(name) {
    
    var gameScreen =
      `<div id="secondScreen">
    <div class="info">
      <div><h2 id="score">0</h2></div>
      <div><h2>Score</h2></div>
    </div>
    <div><canvas id="canvas" width="700" height="600"></canvas></div>
  </div>`;
    buildScreen(gameScreen);

    var backGroundAudio = new Audio("./music/bustinsurf.mp3");
    backGroundAudio.play();
    var div = document.getElementById("score");

    var canvas = document.getElementById("canvas");
    var game = new Game(canvas, endGame);
    game.start();
    function endGame() {
      game.stopGame();
      backGroundAudio.pause();
      buildGameOverScreen(name)
    }
    function setPoints(points) {
      div.innerText = points
    }
    game.onSetPoints(setPoints)

  }

  function buildGameOverScreen(name) {
    var gameOverScreen =
    `<div id="thirdScreen">
      <div><img class="gameOver" src="./images/gameOver.png" alt="Game over words"></div> 
      <div class="rankingButtons">
        <div class="table">
          <div class="tableTitle"><h2>League Ranking</h2></div>
          <div class="bestScores">
            <ol id="ranking">
            </ol>
          </div>
        </div>
        <div class="buttons">
          <div><a href="#" id="start" class="startButton">Play again</a></div>  
          <div><a href="#" id="newPlayer" class="returnButton">New Player</a></div>   
        </div>
      </div>  
    </div>`;


    var score = document.getElementById("score").textContent;

    
    var players = JSON.parse(localStorage.getItem("players"));
    if(players) {
      players.push({name, score})
    } else {
      var players = [{name, score}]
    }
    
    var playersSorted = players.sort(function(a, b) {
      return b.score - a.score;
    });

    var rankingPlayers = playersSorted.slice(playersSorted-6, 5);

    localStorage.setItem("players", JSON.stringify(playersSorted));
    
    buildScreen(gameOverScreen);
    var name = localStorage.getItem("name")
    var points = localStorage.getItem("score")
    var ol = document.getElementById("ranking")

    rankingPlayers.forEach(function (player) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(`${player.name}  - ${player.score} Points`));
        ol.appendChild(li);
    });
    
      document.getElementById("start").addEventListener("click", startGame);
      document.getElementById("newPlayer").addEventListener("click", startScreen);
    
  }


  startScreen();
}

window.addEventListener("load", main)



