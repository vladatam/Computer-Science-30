// Generative Art Design 
// Vlad Atamanchuk
// Oct 30, 2023
//
// 

//Global Variables

let offset = 0.3;
let gridSize = 20;

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
  colorMode(HSB);
  for(let x = 0; x<width; x+=gridSize){
    for(let y = 0; y<height; y+=gridSize){
      fill(random(y*offset,x*offset), 100,250);
      circle(x,y,15);


    }
  }
}

function keyPressed(){
  if(key === "s"){
    save("Progress#1.png");
  }
}