// Multicolour Grid
// Vlad Atamanchuk
// Sep 27, 2023
//
// Create a interactive square grid randomly coloured 

//Global Variables
let numSegments = 30;
let squareSize = 50;
let colour;

function changeSize(){
  if(mouseIsPressed){
    if(mouseButton === LEFT){ //Left click increases size, right click decreases size. 
      squareSize -= 1;
      print(mouseButton);
      
    }
    if(mouseButton === RIGHT){
      squareSize +=1; 
      print(mouseButton);
    }
  }

  //Minimun Square Size
  if(squareSize < 20){
    squareSize = 20;
  }

  //Maximum Square Size
  if(squareSize > 100){
    squareSize = 100;
  }
} 

function grid(){
  //A double loop to draw a grid,
  for(let x = 0; x < width-squareSize; x += squareSize){
    for(let y = 0; y < height-squareSize; y += squareSize){
      
      fill(random(0,255),random(0,255),random(0,255));
      rect(x,y,squareSize);
    }
  }
  
}

function keyPressed(){ //Redraw the grid after key is pressed. 
  clear();
  changeSize();
  grid();
}


 
function setup() {
  //Remove browser rightclick
  document.addEventListener("contextmenu", event => event.preventDefault());
  createCanvas(windowWidth, windowHeight);
  changeSize();
  
  
}

function draw() {
  
}
