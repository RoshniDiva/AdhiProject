var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var p;
var carsAtEnd;

var form, player, game;
var canvas, profileDiv;
var questionDiv;
var answerDiv;
var level = null;
var roomAr;
function preload(){
  
}

function setup(){
  canvas = createCanvas(displayWidth+400, displayHeight);
  
  profileDiv = createDiv();
  profileDiv.position(displayWidth-500, 0);
  profileDiv.style('border-style','solid');
  //profileDiv.style('border-color',"black");
  profileDiv.style( 'font-size', 'x-large');
  profileDiv.style('font-family', 'cursive');
  profileDiv.style('text-align','bottom-center');
  profileDiv.style('display','block');

  profileDiv.size(300, 300);
  
  questionDiv = createDiv();
  questionDiv.position(displayWidth-500,300);
  questionDiv.style('border-style','solid');
  //questionDiv.style('background-color', "pink");

  questionDiv.size(300,200);

  answerDiv = createDiv();
  answerDiv.position(displayWidth-500,500);
 answerDiv.style('border-style','solid');
  answerDiv.size(300,200);


  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 /* if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    //game.winnerlist();
    game.end();
  }*/
}
