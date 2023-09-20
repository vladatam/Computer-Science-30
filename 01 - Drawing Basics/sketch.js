// P5 Drawing Basics
// Vlad Atamanchuk
// Sep 12, 2023
//
// Extra for Experts:
// Draw and Driving a bus

//Global Variables
let busX = 0; let busY = 0; //Declaring global variables

function setup() {
  createCanvas(windowWidth, windowHeight);
  //full screen windowWidth, and full window Height
}

function draw() {
  background(220);
  //Start the drawing of our bus. 
  ground();
  drawBus();
  moveBus();

}
function drawBus(){
  fill(252, 186, 3);
  rect(50+busX,50+busY,100,50);
  fill(0);
  circle(70+busX,100+busY,20);
  circle(130+busX,100+busY,20);
}
function moveBus(){
  if (keyIsPressed){
    if (keyCode === LEFT_ARROW){
     busX -= 10;
    }
    if (keyCode === RIGHT_ARROW){
      busX +=10;
    }
    if (keyCode === UP_ARROW){
      busY -=10;
    }
    if (keyCode === DOWN_ARROW){
      busY +=10;

    }
  }
}

//add a green rectangle near the bottom of screen 
function ground(){
  fill(11, 252, 3);
  rect(0,300,windowWidth,windowHeight);
}

function keyPressed(){
  //come back to movement
  print("a key!", key, "\tkeyCode:", keyCode);
  
} 
