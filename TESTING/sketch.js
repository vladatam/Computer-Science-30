let segmentLength = 1;
let lineWidth = 1.5;
let x = 0;
let noiseValue = 0; // Initial noise value
const noiseShift = 0.01;
let numSegments;
let tallestRect = 0;
let currentRectX, currentRectY;
let terrain = [];
let terrainBuffer = [];
let canvasWidth;
let canvasHeight;
let bufferOffset = 0;

function setup() {
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  createCanvas(canvasWidth, canvasHeight);
  generateInitialTerrain();
}

function generateInitialTerrain() {
  for (let i = 0; i < canvasWidth; i++) {
    terrainBuffer.push(generateTerrainPoint());
  }
}

function generateTerrainPoint() {
  let heightRect = random(canvasHeight);
  heightRect = noise(noiseValue); // Use the noiseValue
  heightRect = map(heightRect, 0, 1, 0, canvasHeight);
  noiseValue += noiseShift; // Increment noise value
  return heightRect;
}

function updateTerrain() {
  let newTerrainPoint = generateTerrainPoint();
  terrainBuffer.shift();
  terrainBuffer.push(newTerrainPoint);
  bufferOffset += segmentLength; // Move the terrain to the right
}

function renderTerrain() {
  background(255); // Clear the background
  rectMode(CORNERS);
  strokeWeight(lineWidth);

  let averageCalc = terrainBuffer.reduce((a, b) => a + b, 0) / terrainBuffer.length;

  for (let i = 0; i < terrainBuffer.length; i++) {
    x = i * segmentLength;
    // Render the mountains
    rect(x, canvasHeight, x, canvasHeight - terrainBuffer[i]);
  }

  // Put flag at the tallest point in the terrain
  let maxTerrainHeight = Math.max(...terrainBuffer);
  let flagX = terrainBuffer.indexOf(maxTerrainHeight) * segmentLength;
  drawFlag(flagX, canvasHeight - maxTerrainHeight);

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
  triangle(
    positionX + 4,
    positionY + 10,
    positionX + 14,
    positionY + 10,
    positionX + 4,
    positionY
  );
  fill(0);
  rectMode(CORNERS);
}

function draw() {
  updateTerrain();
  renderTerrain();
  if (bufferOffset >= segmentLength) {
    // Add a new terrain point at the right end of the buffer
    terrainBuffer.push(generateTerrainPoint());
    terrainBuffer.shift(); // Remove the leftmost terrain point
    bufferOffset -= segmentLength; // Offset correction
  }
}
//change