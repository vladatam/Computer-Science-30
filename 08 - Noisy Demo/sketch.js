// Working with Noise
// Vlad Atamanchuk
// Oct 4, 2023
//
// Psuedo-random Numbers: Uniform Distribution, Perlin Noise Using Random()



//Global Variables

let segmentLength = 5;



function setup() {
  createCanvas(500,500);
}


function watefullLine(){
  //using a loop to draw a horizontal line made up of little segments.
  let x = 0;
  while (x < width){
    line(x,height/2,x+segmentLength,height/2);
    x += segmentLength; 
  }
  

}

function drawRectangle(){
  //draw a rectangle that always sits on the line. 
  rectMode(CORNERS);
  stroke(0);
  strokeWeight(2);
  rect(width*0.2,height/2,width*0.5,height*0.2);
}

function draw() {
  background(220);
  watefullLine();
  drawRectangle();
}
