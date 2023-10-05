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
    if(mouseButton === LEFT){
      squareSize -= 1;
      print(mouseButton);
    }
    if(mouseButton === RIGHT){
      squareSize +=1; 
      print(mouseButton);
    }
  }
  

} 

function grid(){
  //using a double loop (nested loop) to draw the grid. 
  for(let x = 0; x < width; x += squareSize){
    for(let y = 0; y < height; y += squareSize){
      fill(random(0,255),random(0,255),random(0,255));
      rect(x,y,squareSize);
    }
  }
  
}

function keyPressed(){
  clear();
  changeSize();
  grid();
}


 
function setup() {
  document.addEventListener("contextmenu", event => event.preventDefault());
  createCanvas(windowWidth, windowHeight);
  changeSize();
  
  
}

function draw() {
  
 
  

}
