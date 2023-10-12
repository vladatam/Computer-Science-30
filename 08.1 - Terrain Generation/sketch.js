// Terrain Generation
// Vlad Atamanchuk
//  Oct 5, 2023 
//

//Global Variables

let segmentLength = 1;
let lineWidth =1.5;
let x = 0;
const noiseShift = 0.01;
let numSegments; 
let tallestRect =0;
let currentRectX,currentRectY;


function randomTerrain(){
  rectMode(CORNERS);
  strokeWeight(lineWidth);


  let noiseReduction = height; 
  let averageCalc = 0;
  let totalHeight =0; 

  for(let i=0; i < width; i++){
    numSegments = i;
    x += segmentLength;

    let heightRect = random(height);
    
    //Noise reduction
    heightRect = noise(noiseReduction); // 0 to 1
    heightRect = map(heightRect,0,1,0,height);
    noiseReduction += noiseShift; 

    //Find tallest rectangle
    currentRectY = heightRect;
    if(currentRectY > tallestRect){
      tallestRect = currentRectY; 
      currentRectX = numSegments;
      tallestRect -= height;
      tallestRect *=-1;
      print('x', currentRectX, 'y', tallestRect);
    }
    //Render the mountains
    rect(x,height,x,heightRect);

    //Calculate the average
    totalHeight += heightRect;
    averageCalc = totalHeight/numSegments;  
    

    
  } 

  //Put flag at tallest
  print('FINAL x', currentRectX, 'y', tallestRect);
  drawFlag(currentRectX,tallestRect);

  //Render the line at average
  stroke("red");
  strokeWeight(2);
  line(0,averageCalc,width,averageCalc);
  stroke(0);

  
} 

function drawFlag(positionX,positionY){
  positionY -=20;
  rectMode(CORNER);
  fill("red");
  strokeWeight(0);
  rect(positionX,positionY,4,20);
  triangle(positionX+4,positionY+10,positionX+14,positionY+10,positionX+4,positionY);
  fill(0);
  rectMode(CORNERS);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomTerrain();
}

function draw() {

}
