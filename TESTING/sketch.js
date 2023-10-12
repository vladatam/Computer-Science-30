// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawFlag(width/2,height/2);
}

function drawFlag(positionX,positionY){
  rectMode(CORNER);
  fill("red");
  strokeWeight(0);
  rect(positionX,positionY,4,20);
  triangle(positionX+4,positionY+10,positionX+14,positionY+10,positionX+4,positionY);
  fill(0);
  rectMode(CORNERS);
}