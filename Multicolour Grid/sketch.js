// Multicolour Grid
// Vlad Atamanchuk
// Sep 27, 2023
//
// Create a interactive square grid randomly coloured 

let segmentHeight; //state variable (0,2)
const GRID_SPACING = 10; // CAP > const
let x,y;

function grid(){
  //create grid 
  rect(x,y,10);
  for (let x = 0; x < width; x + GRID_SPACING){
    for (let y = 0; y < height; y +GRID_SPACING){
      rect(x,y,10);
    }
  }
}

  

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225);
  grid();
}
