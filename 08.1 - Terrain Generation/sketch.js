
// Terrain Generation
// Vlad Atamanchuk
//  Oct 5, 2023 
//
//Creating a randomly generate terrain using perlin noise to make a smoother transition between values. 

//Global Variables
let segmentLength = 1;
let lineWidth = 1.5;
let x = 0;
let noiseValue = 0; // Initial noise value
const noiseShift = 0.01;
let numSegments;
let tallestRect = 0;
let currentRectX, currentRectY;


let terrainPoints = []; // Store the generated terrain points

function setup() {
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  createCanvas(windowWidth, windowHeight);
}

function generateTerrainPoint() {
  let heightRect = random(canvasHeight);
  heightRect = noise(noiseValue); // Use the noiseValue
  heightRect = map(heightRect, 0, 1, 0, canvasHeight);
  noiseValue += noiseShift; // Increment noise value
  return heightRect;
}

function renderTerrain() {
 
  rectMode(CORNERS);
  strokeWeight(lineWidth);


let segmentLength = 1; //space between rectangles
let lineWidth =1; //Stroke weight 
let x = 0;
const noiseShift = 0.01;  
let numSegments; //Number of rectangles drawn
let tallestRect =0; 
let currentRectX,currentRectY;

function calculateTerrain(){
  rectMode(CORNERS); //Draw the rectangles from corner to corner
  strokeWeight(lineWidth);


  let noiseReduction = height; 

  let averageCalc = 0;
  let maxTerrainHeight = 0;
  let maxTerrainX = 0;

  for(let i=0; i < width; i++){  //Loop until edge of screen to create mountains
    numSegments = i; 
    x += segmentLength;   

    let heightRect = random(height); //Generate a random height for each rectangle 
    
    //Noise reduction between the rectangle heights 
    heightRect = noise(noiseReduction); // 0 to 1
    heightRect = map(heightRect,0,1,0,height);
    noiseReduction += noiseShift; 

    //Need to fix. 
    //Find tallest rectangle (Error is assuming Y coordinate will be larger, it will be smaller as p5 increases the y
    //coordinate the lower it is down the screen. This technically need to look for lowes y coordinate to figure out the tallest peak)
    
    currentRectY = heightRect;
    if(currentRectY > tallestRect){
      tallestRect = currentRectY; 
      currentRectX = numSegments;
      tallestRect -= height;
      tallestRect *=-1;
      //Test
      // print('x', currentRectX, 'y', tallestRect);
    }
  }

    //Calculate the average
    totalHeight += heightRect;
    averageCalc = totalHeight/numSegments;  

  } 
  //FIX
  //Put flag at tallest
  //TEST
  // print('FINAL x', currentRectX, 'y', tallestRect);
  drawFlag(currentRectX,tallestRect);

  //Render the line at average
  stroke("red");
  strokeWeight(2);
  line(0, canvasHeight - averageCalc, canvasWidth, canvasHeight - averageCalc);
  stroke(0);
 
} 


function drawFlag(positionX,positionY){
  //Render the flag 
  positionY -=20;
  rectMode(CORNER);
  fill("red");
  strokeWeight(0);
  rect(positionX, positionY, 4, 20);
  triangle(positionX + 4,positionY + 10,positionX + 14,positionY + 10,positionX + 4,positionY);
  fill(0);
}

function draw() { 
  background(255); // Clear the background
  renderTerrain();
}
