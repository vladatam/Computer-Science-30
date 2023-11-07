
// Terrain Generation
// Vlad Atamanchuk
//  Oct 5, 2023 
//

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

  let averageCalc = 0;
  let maxTerrainHeight = 0;
  let maxTerrainX = 0;

  terrainPoints.unshift(generateTerrainPoint()); // Add new terrain point to the beginning

  if (terrainPoints.length > canvasWidth / segmentLength) {
    terrainPoints.pop(); // Remove the oldest point if it exceeds the canvas width
  }

  for (let i = 0; i < terrainPoints.length; i++) {
    let heightRect = terrainPoints[i];
    x = i * segmentLength;

    // Render the mountains
    rect(x, canvasHeight, x, canvasHeight - heightRect);

    averageCalc += heightRect;

    if (heightRect < maxTerrainHeight) {
      maxTerrainHeight = heightRect;
      maxTerrainX = numSegments;
    }
  }

  averageCalc /= terrainPoints.length;

  // Put flag at the tallest point in the terrain (which is the lowest y value)
  drawFlag(maxTerrainX, canvasHeight - maxTerrainHeight);

  // Render the line at average height
  stroke("red");
  strokeWeight(2);
  line(0, canvasHeight - averageCalc, canvasWidth, canvasHeight - averageCalc);
  stroke(0);
}

function drawFlag(positionX, positionY) {
  positionY -= 20;
  rectMode(CORNER);
  fill("red");
  strokeWeight(0);
  rect(positionX, positionY, 4, 20);
  triangle(positionX + 4,positionY + 10,positionX + 14,positionY + 10,positionX + 4,positionY);
  fill(0);
  rectMode(CORNERS);
}

function draw() { 
  background(255); // Clear the background
  renderTerrain();
}
