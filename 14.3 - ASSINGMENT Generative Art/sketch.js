// Generative Art Design 
// Vlad Atamanchuk
// Oct 30, 2023
//
// 

//Global Variables

let offset = 100;

function setup() {
  createCanvas(800, 800);
  background(220);
  translate(width*0.55,height*0.55);
  revolvedLines(width,height);
}

function revolvedLines(x,y){
  for(let i = 0; i <1000; i++){
    rotate(radians(i));
    translate(-i,+i);
    line(0,0,x,0);
  }
  
}

function keyPressed(){
  if(key === "s"){
    save("Progress#1.png");
  }
}