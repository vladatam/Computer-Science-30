// Generative Art Design 
// Vlad Atamanchuk
// Oct 30, 2023
//
// 

//Global Variables

let offset = 0.3;
let gridSize = 50;

function setup() {
  createCanvas(800, 800);
  background(220);

  // revolvedLines(width,height);
  grid();
}

function revolvedLines(x,y){
  push();
  
  translate(width*0.55,height*0.55);
  for(let i = 0; i <1000; i++){
    rotate(radians(i));
    translate(-i,+i);
    line(0,0,x,50);
  }
  pop();
}

function grid(){
  rectMode(CENTER);
  colorMode(HSB);
  for(let x = 0; x<width; x+=gridSize){
    for(let y = 0; y<height; y+=gridSize){
      push();
      translate(x,y);
      fill(random(y*offset,x*offset), 100,250);
      strokeWeight(50);
      stroke(y%360,360,360);
      rect(x,y,10);
      line(x+random(gridSize,-gridSize),y+random(gridSize,-gridSize),x,y);
      pop();
    }
  }
}

function keyPressed(){
  if(key === "s"){
    save("Progress#1.png");
  }
}