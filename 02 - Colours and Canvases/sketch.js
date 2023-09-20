// Colours and Canvases Program
// Vlad Atamanchuk  
// Sep 13, 2023
// Practice using colour variables, layers, and animation


// Global Variables
let ballX, ballY, ballSize = 30, xSpeed = 5,ySpeed = 5; 
let overlay;

let colorA;
let colorB;

function keyPressed(){
  if(key === "a") fill(colorA);
  if(key === "b") fill(colorB);
  //once per key pressed. Key holds what was pressed
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width,height);
  ballX = width/2;
  ballY = height/2;
  colorA = color(128,20,150);
  colorB = color("blue");
  
  
}


function draw() {
  background(220);
  moveAndDrawBall();
  //draw a triangle at mouse cursor
  overlay.triangle(mouseX,mouseY-20,mouseX-10,mouseY+10,mouseX+10,mouseY+10);
  image(overlay,0,0);
}

function moveAndDrawBall() {
  //update the position
  ballX += xSpeed;
  ballY += ySpeed;
  //update the direction
  let radius = ballSize/2;
  if (ballX <= 0 || ballX + ballSize/2 >= width){
    xSpeed *= -1;
  }
  if (ballY <= 0 || ballY + ballSize/2 >= height){
    ySpeed *= -1;
  }

  //render the ball
  fill();
  circle(ballX,ballY,ballSize);
}