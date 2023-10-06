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
  let tallest = 0;
  let averageCalc = 0;

  rectMode(CORNERS);

  strokeWeight(lineWidth);

  for(let i=0; i < width; i++){
    x += segmentLength;
    let heightRect = random(height);
    //Noise reduction

    heightRect = noise(noiseReduction); // 0 to 1
    heightRect = map(heightRect,0,1,0,height);
    noiseReduction += noiseShift; 
    //Render the mountains
    rect(x,height,x,heightRect);

    //Draw flag at tallest
    // tallest = heightRect+2; 
    
    // if(tallest > heightRect){
    //   drawFlag(x,heightRect);
    // } 
    
    //Average
    print(round(Math.floor(heightRect)));
    

    //Render the line
    // stroke("red");
    // line(0,tallest,width,tallest);
    // stroke(0);
    
  } 
  print("width",width);

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
