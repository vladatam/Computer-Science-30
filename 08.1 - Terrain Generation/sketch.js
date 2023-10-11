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


function randomTerrain(){

  let noiseReduction = height;
  let tallestRect =0, tallestRectX;
  let averageCalc = 0;
  let totalHeight =0; 

  rectMode(CORNERS);
  strokeWeight(lineWidth);

  for(let i=0; i < width; i++){

    numSegments = i;
    x += segmentLength;

    let heightRect = random(height);
    
    //Noise reduction
    heightRect = noise(noiseReduction); // 0 to 1
    heightRect = map(heightRect,0,1,0,height);
    noiseReduction += noiseShift; 

    //Find tallest rectangle
    let currentRect = heightRect;
    if(currentRect > tallestRect){
      tallestRect = currentRect;
      print(height - tallestRect);
    }
    

    //Render the mountains
    rect(x,height,x,heightRect);

    //Calculate the average
    totalHeight += heightRect;
    averageCalc = totalHeight/numSegments;  
    

    
  } 

  //Render the line at average
  stroke("red");
  strokeWeight(2);
  line(0,averageCalc,width,averageCalc);
  stroke(0);

  //Put flag at tallest
  drawFlag(100,height - tallestRect);
}

function drawFlag(positionX,positionY){
  rectMode(CORNER);
  stroke("red");
  rect(positionX,positionY,1,10);
  triangle(positionX,positionY,positionX+2,positionY+2,positionX+4,positionY+5);
  stroke(0);
  rectMode(CORNERS);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomTerrain();
}

function draw() {

}
