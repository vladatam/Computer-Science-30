// Puzzle Game Starter
// Vlad Atamanchuk
// Nov 6, 2023
// A interactive puzzle game, win game by filling all the squares to black. 

//Global Variables 
const NUM_ROWS = 4; //Number of rows going horizontally. 
const NUM_COLS = 5; //Number of collumns going vertically. 

let rectWidth, rectHeight, row, col;

let grid = []; //Open array to store grid fill values. 

let flipMode = "cross"; //Keep track of the current flipping mode (crosshair)

function setup() {
  rectWidth = 70;  rectHeight = 70;
  createCanvas(NUM_COLS*rectWidth, NUM_ROWS*rectHeight); 
 
  for (let i = 0; i < NUM_COLS; i++) {  //Push random fill values into array using for loop. 
    grid.push([]); //First push empty array, 
    for (let z = 0; z < NUM_ROWS+1; z++) {
      let value = random(0, 1); // Generates a random value between 0 and 1
      if (value < 0.5) {
        grid[i].push(0); // Pushes black for values less than 0.5 to 0
      } else {
        grid[i].push(255); // Pushes white for values less than 0.5 to 1
      }
    }
  }
}

function draw() {
  row = getCurrentY();   col = getCurrentX();
  background(220);
  renderGrid();
  winner(); 
}

function mousePressed(){
  //when the mouse is clicked flip the value at current 
  //col,row + also flip 4 cardinal neighbours (N,E,S,W)

  //flip the 4 neighbours up,down,left,right
  if(keyIsPressed && key === "Shift"){
    flipMode = "single";
    flip(col,row); //flip only @ mouse position if shift is held.    
  }
  else flipMode === "cross";
  if(flipMode === "square") {
    flip(col,row);
    if(col < NUM_COLS -1) flip(col+1,row); //Right Neighbour
    flip(col+1,row+1); //Bottom Right Neightbour
    flip(col, row+1); //Bottom Neighbour. 
    
  }
  if(flipMode === "cross") {
    flip(col,row);
    if(col < NUM_COLS -1) flip(col+1,row); //Right Neighbour
    if(row>0)flip(col,row-1); //Up Neighbour
    flip(col-1,row); //Left Neightbour 
    if(row < NUM_ROWS-1) flip(col,row+1); //Bottom Neighbour
  }
  
}

function keyPressed(){
   if (keyCode === 32) { // Check if spacebar is pressed
    if (flipMode === "cross") {
      flipMode = "square"; // Toggle to square mode if currently in cross mode
    } else {
      flipMode = "cross"; // Toggle to cross mode if currently in square mode
    }
  print(flipMode);
   }
}

function flip(col,row){
  //at a given x,y flip the value in the 2D array. 
  //0=225, 225 =0
  if(grid[row][col] === 0)grid[row][col] =255;
  else grid[row][col] = 0;
  
}

function winner(){
  //Check to see if all the columns have been coloured black. 
  let score = 0;
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      let fillValue = grid[y][x];
      if(fillValue === 0){
        score ++;
      }
    }
  }  
  if(score === NUM_COLS*NUM_ROWS){
    textAlign(CENTER);
    fill('red'); 
    textSize(50);
    text("You Win!",width/2,height/2);
  }

}



function checkColour(colours){
  return colours === 0;

}

function getCurrentX(){ //determine current column mouse is in, and return
  let constrainMouseX = constrain(mouseX, 0, width-1);
  return floor(constrainMouseX/rectWidth);  
}
function getCurrentY(){ //determine current row mouse is in, and return
  let constrainMouseY = constrain(mouseY, 0, height-1);

  return floor(constrainMouseY/rectHeight);
}

function renderGrid(){
  //creates a 2D grid of squares using information from our
  //2D array for the corresponding fill values
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      let fillValue = grid[y][x];
      fill(fillValue);
      //x:    0,   1,   2,  3,   4
      //posx  0   50, 100, 150,200   expression? x→posx 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
  crosshair(col, row)
}


function crosshair(col, row) {
  // Highlight rectangles impacted by the click
  fill('rgba(0, 255, 0, 0.4)'); // Green transparent overlay
  rect(col * rectWidth, row * rectHeight, rectWidth, rectHeight);
  if(flipMode ==="single"){ 
    fill('rgba(0, 255, 0, 0.4)');
  }
  else if(flipMode === "square"){
  if(row<NUM_COLS)rect((col + 1) * rectWidth, row * rectHeight, rectWidth, rectHeight);
  if (row > 0) rect(col * rectWidth, (row + 1) * rectHeight, rectWidth, rectHeight);
  if (col > 0) rect((col + 1) * rectWidth, (row+1)* rectHeight, rectWidth, rectHeight);

  } 
  else if(flipMode === "cross"){
    if (col < NUM_COLS - 1) rect((col + 1) * rectWidth, row * rectHeight, rectWidth, rectHeight);
    if (row > 0) rect(col * rectWidth, (row - 1) * rectHeight, rectWidth, rectHeight);
    if (col > 0) rect((col - 1) * rectWidth, row * rectHeight, rectWidth, rectHeight);
    if (row < NUM_ROWS - 1) rect(col * rectWidth, (row + 1) * rectHeight, rectWidth, rectHeight);
  }
  
  
  
}
