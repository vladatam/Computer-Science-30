// Puzzle Game Starter
// Vlad Atamanchuk
// Nov 6, 2023
// A first foray into working with 2D arrays


const NUM_ROWS = 4;  const NUM_COLS = 5;
let rectWidth, rectHeight, row, col;


let grid = [];


function setup() {
  rectWidth = 70;  rectHeight = 70;
  createCanvas(NUM_COLS*rectWidth, NUM_ROWS*rectHeight); 

  //Push random fill values into array. 
  for(let i = 0; i<NUM_COLS; i++){
    grid.push([random(0,255)]);

    for(let z = 0; z<NUM_ROWS; z++){
      grid[i].push(floor(random(2)*255));
    }
  }

  print(grid);
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
  if(keyIsPressed){
    if(key === "Shift")flip(col,row); //flip only @ mouse position if shift is held.
  }
  else {
    flip(col,row);
    if(col < NUM_COLS -1) flip(col+1,row); //Right Neighbour
    if(row>0)flip(col,row-1); //Up Neighbour
    flip(col-1,row);
    if(row < NUM_ROWS-1) flip(col,row+1);
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
}