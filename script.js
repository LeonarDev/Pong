let xAxisBall = 300;
let yAxisBall = 200;
let diameterBall = 15;
let radiusBall = diameterBall / 2;

let speedXAxisBall = 6;
let speedYAxisBall = 6;

let xAxisRacket = 5;
let yAxisRacket = 150;
let widthRacket = 15;
let heightRacket = 80;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(40);
  createBall();
  moveBall();
  checkEdgeCollision();
  createRacket();
  moveRacket();
  checkRacketCollision();
}

function createBall() {
  circle(xAxisBall,yAxisBall,diameterBall);
}

function moveBall() {
  xAxisBall += speedXAxisBall;
  yAxisBall += speedYAxisBall;
}

function checkEdgeCollision() {
  if (xAxisBall + radiusBall > width || xAxisBall - radiusBall < 0) {
  speedXAxisBall *= -1;
  }
  if (yAxisBall + radiusBall > height || yAxisBall - radiusBall < 0) {
  speedYAxisBall *= -1;
  }
}

function createRacket(){
  rect(xAxisRacket, yAxisRacket, widthRacket, heightRacket);
}

function moveRacket(){
  if (keyIsDown(UP_ARROW)){
    yAxisRacket -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAxisRacket += 10;
  }
}

function checkRacketCollision(){
  if (xAxisBall - radiusBall < xAxisRacket + widthRacket && yAxisBall - radiusBall < yAxisRacket + heightRacket && yAxisBall + radiusBall > yAxisRacket) {
    speedXAxisBall *= -1;
  }
}
