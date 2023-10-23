// CLock Challenge
// Vlad Atamanchuk
// Oct 23, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  //Translate to middle of screen,
  
  translate(width/2,height/2);
  rotate();
  clock(0,0);
  
}



function clock(x,y){
  strokeWeight(2);
  circle(x,y,200);
  //Big Line

  strokeWeight(4);
  for(let i = 0; i < 12; i ++){
    rotate(radians(30));
    line(x,y-80, x, y-95);
  }
  strokeWeight(1);

  //Small Line 

  for(let i = 0; i<60; i++){
    strokeWeight(1);
    rotate(radians(6));
    line(x,y-80,x,y-95);
  }

  //Animated
  strokeWeight(5);
  for(let i = 0; i<60; i++){
    line(x,y,x,y-60);
  }
}