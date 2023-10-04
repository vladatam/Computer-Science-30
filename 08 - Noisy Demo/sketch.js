// Working with Noise
// Vlad Atamanchuk
// Oct 4, 2023
//
// Psuedo-random Numbers: Uniform Distribution, Perlin Noise Using Random()



//Global Variables

let segmentLength = 5;
let ballY = 200;
let noisePositionRound = 50; // arbitrary starting spot
let noisePositionLine = 200;
let noisePositionBallY = 0;

const noiseShift = 0.2; //the larger the value the more unrelated the noise becomes 

//noise = random value between numbers/time



function setup() {
  createCanvas(500,500);
  frameRate(100);
}


function watefullLine(){
  //using a loop to draw a horizontal line made up of little segments.
  let x = 0;
  strokeWeight(20);
  while (x < width){
    //option 1 - using random()
    let lineValue = random(0,255);
    
    //option 2 - using noise()

    lineValue = noise(noisePositionLine); // 0 to 1
    lineValue = map(lineValue,0,1,0,255);
    noisePositionLine += noiseShift;
    stroke(lineValue);
    line(x,height/2,x+segmentLength,height/2);
    x += segmentLength; 
  }
  
  

  

}

function moveBall(){
  //option 1 using random()
  //ballY += random(-20,20);
  //option 2 using noise()
  let dY = noise(noisePositionBallY);
  dY = map(dY,0,1,-20,20);
  noisePositionBallY += noiseShift;
  ballY += dY;

  circle(width*0.75,ballY,30);
  
}

function drawRectangle(){
  //draw a rectangle that always sits on the line. 
  rectMode(CORNERS);
  stroke(0);
  strokeWeight(2);

  //option 1 - using random() [unfirom distribution]
  let roundAmount = random(2,70);
  // option 2 - noise
  roundAmount = noise(noisePositionRound); // noise choses a value between 0 to 1;
  roundAmount = map(roundAmount,0,1,2,70); // need to map these values to required regions
  noisePositionRound += noiseShift;
  rect(width*0.2,height/2,width*0.5,height*0.2,roundAmount);
}

function draw() {
  background(220);
  watefullLine();
  drawRectangle();
  moveBall();
}


