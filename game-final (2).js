let rand =75;
let t0 = 75;
let t1 = 75;
let t2 = 75;
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
var beginImg, img1, img2;
var  c; // our text color as a variable, set in setup

function preload() {

  img1 = loadImage('mario.png');
  img2 = loadImage('mario.png'); //background L1
  beginImg = loadImage('giphy.gif');
  // song = loadSound('Y2Mate.is - Mario Coin Sound - Sound Effect (HD)-mQSmVZU5EL4-128k-1656675803193.mp3');
  // song2 = loadSound('Y2Mate.is - Mario Kart 64 Music - Star Theme-ZadBqUJlSaA-160k-1654296539929.mp3');
  // song3 = loadSound('Y2Mate.is - Super Mario 64 - Thank you so much a-for-to playing my game-msMkeJTEGuU-128k-1656675892423.mp3');
}

function setup() {
  createCanvas(600, 600);
  let c =color(200, 100, 100); //text color
  fill(c);
  textAlign(CENTER);
  textSize(20);
  smooth();
  frameRate (30);
} // end of setup


function draw() {
  background(220);
  if (gameState=="L1"){
  levelOne();
  }
  if (gameState=="L2"){
   levelTwo();
  }
  if (gameState=="L3"){
   levelThree();
  }
  if(gameState =="Win"){
      background(50);
    win();
  }

  text(("Score: " + score), width/2, 40);


} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){

// call level 2
 // fill(random(255));
 gameState= "L2";
  }

  ellipse(ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);

} // end level one

function levelTwo(){
  background(random(t0),random(t1),random(t2));
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    fill(random(t0),random(t1),random(t2));
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";

  }

//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level two

function levelThree(){
    background(beginImg);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  } // end if
  if (score>=35){
       gameState= "Win";
  }
      image(img1, ballx, bally, ballSize, ballSize);
} // end level 3

function win(){
  text("You Won", width/2, height-20);
} // end win
