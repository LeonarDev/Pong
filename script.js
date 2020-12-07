let xAxisBall = 300;
let yAxisBall = 200;
let ballDiameter = 15;
let ballRadius = ballDiameter / 2;

let xAxisBallSpeed = 6;
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
  circle(xAxisBall,yAxisBall,ballDiameter);
}

function moveBall() {
  xAxisBall += xAxisBallSpeed;
  yAxisBall += speedYAxisBall;
}

function checkEdgeCollision() {
  if (xAxisBall + ballRadius > width || xAxisBall - ballRadius < 0) {
  xAxisBallSpeed *= -1;
  }
  if (yAxisBall + ballRadius > height || yAxisBall - ballRadius < 0) {
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
  if (xAxisBall - ballRadius < xAxisRacket + widthRacket && yAxisBall - ballRadius < yAxisRacket + heightRacket && yAxisBall + ballRadius > yAxisRacket) {
    xAxisBallSpeed *= -1;
  }
}
