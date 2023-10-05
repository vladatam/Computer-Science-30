// Terrain Generation
// Vlad Atamanchuk
//  Oct 5, 2023 
//

//Global Variables

let segmentLength = 2;
let lineWidth =2;
let x =0;
const noiseShift = 0.01;


function randomTerrain(){
  let noiseReduction = height;
  rectMode(CORNERS);
  let tallest = 0;
  strokeWeight(lineWidth);
  while(x < width){
    line(x,height,x,height);
    //option 1 
    let heightRect = random(height);
    //Noise reduction
    heightRect = noise(noiseReduction); // 0 to 1
    heightRect = map(heightRect,0,1,0,height);
    noiseReduction += noiseShift; 

    rect(x,height,x,heightRect);

    stroke("red");
    line(0,heightRect,width,heightRect);
    stroke(0);
    x += segmentLength;
  } 


}

function drawFlag(positionX,positionY){
  rect()
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  randomTerrain();
}
