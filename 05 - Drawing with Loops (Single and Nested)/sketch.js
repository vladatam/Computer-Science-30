// Drawing with Loops 
// Vlad Atamanchuk
// Sep 25, 2023
//
// Using single and nested loops for drawing purposes. 

//Global Variables
let numSegments = 30;
let segmentHeight;
let currentBackground = 0; //state variable (0,2)
const GRID_SPACING = 40; // CAP > const

function grid(){
  //use a nested loop to draw a grid on the screen.
  for(let x = 0; x < width; x += GRID_SPACING){
    for(let y = 0; y < height; y += GRID_SPACING){
      if(dist(x,y,mouseX,mouseY) < 50){
        fill(255,0,0);
      }
      else{
        fill(0);
      }
      circle(x,y,10);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  segmentHeight = height/numSegments;
}

function gradient(){
  noStroke();
  // draw a series of skinny rectangles > gradient 
  for(let i = 0; i < numSegments; i ++){  //repeat numSegment (7) times. 
    let y = i * segmentHeight;
    let c = map(y,0,height,0,255);
    fill(c,255-c,255); // ^ red, - green, max blue
    rect(0,y,width,segmentHeight);
  }
  stroke(0);
}

function selectBackground(){
  //check the state varibale currentBackground 
  //and render the appropriate one. 
  if (currentBackground === 0) {
    gradient();
  }
  else if(currentBackground ===1) {
    background(255);
  }
  else {
    background(60,240,102);
  }
  changeStateVar();
}

function changeStateVar(){
  if (mouseIsPressed){
    if(mouseButton ===LEFT){
      currentBackground ++;
    }
    if (currentBackground > 2){
      currentBackground = 0;
    }
    if (mouseButton === RIGHT){
      currentBackground --;
      if (currentBackground < 0){
        currentBackground =2;
      }
    }
    
  }
}


function draw() {
  selectBackground();
  grid();
}

function mousePressed(){
  print(mouseButton);
  return false;
}
