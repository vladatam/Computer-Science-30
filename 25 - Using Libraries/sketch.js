/* eslint-disable no-undef */
// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scribble;             // global mode
let circleD = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  scribble = new Scribble();
  
}

function draw() {
  background(225);
  if(collideRectCircle(mouseX,mouseY,120,60,width/2,height/2,circleD)){
    fill(randdom(255),random(255),random(255));
  }
  else{
    noFill();
  }
  circle(width/2, height/2, circleD);
  rect(mouseX, mouseY, 120, 60);
  //scribble.scribbleRect(mouseX,mouseY, 200,100);

}

