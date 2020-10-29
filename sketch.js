var canvas, backImag;
var gameState=0;
var playerCount;
var database;
var Form, Player, Game;
function setup(){
  canvas=createCanvas(400,400)
  database=firebase.database()
  Game=new game();
  Game.getState();
  Game.start();
}

function draw(){}