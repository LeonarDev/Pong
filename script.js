let xAxisBall = 300;
let yAxisBall = 200;
let diameterBall = 15;
let radiusBall = diameterBall / 2;

let speedXAxisBall = 6;
let speedYAxisBall = 6;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(40);
  createBall();
  moveBall();
  checkEdgeCollision();
  createRacket();
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