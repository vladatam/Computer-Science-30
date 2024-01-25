// Generative Art Design 
// Vlad Atamanchuk
// Oct 30, 2023
//
//Generative Art assingment, e

//Global Variables

let offset = 0.3;
let gridSize = 50;
let angle = 0;
let r = 10;

function setup() {
  createCanvas(2000, 2000);
  background(220);
  //revolvedLines(width);
  //grid();

}

function draw(){
  spiral();
}

function spiral() {
  push();
  colorMode(HSB);
  strokeWeight(4);
  translate(width/2, height/2); //Sets orgin point middle of screen. 
  strokeWeight(500);
  let x = r * cos(angle); //Using trig to figure out a spiral pattern for x,y coordinates.
  let y = r * sin(angle);
  let colour = y; //Colour value dependent on x,y coordinate. 
  let colour2 = x;
  if(colour<0 || colour2 < 0){ //Since orgin is set to middle of screen, need to reverse signs for values when drawing above as they are negative. 
    colour = -colour;
    colour2 = -colour2;
  }
  stroke(colour*0.2,colour2*colour,colour2*colour);
  point(x, y, 10); //draws a point at the x,y coordinate size 500. 
  angle += 0.04; //Increments the values of angle and r each frame. 
  r -= 0.2;
  pop(); 
}

function revolvedLines(x){
  push();
  translate(width*0.55,height*0.55);
  for(let i = 0; i <1000; i++){ //Loop to create a 1000 lines
    rotate(radians(i)); //Rotate them around orgin. 
    translate(-i,+i); // while also translating the orgin to create a revolution effect. 
    line(0,0,x,50); //Renders the line. 
  }
  pop();
}

function grid(){
  rectMode(CENTER);
  colorMode(HSB);
  for(let x = 0; x<width; x+=gridSize){ //Nested loop for grid. 
    for(let y = 0; y<height; y+=gridSize){
      push();
      translate(x,y); 
      strokeWeight(50);
      stroke(y%360,360,360); //Loop the fill value using %.
      rect(x,y,20);
      line(x+random(gridSize,-gridSize),y+random(gridSize,-gridSize),x,y); 
      //Draws a line out of each square, randomly  
      pop();
    }
  }
}

function keyPressed(){ //Save Images
  if(key === "s"){
    save("Progress#1.png");
  }
}