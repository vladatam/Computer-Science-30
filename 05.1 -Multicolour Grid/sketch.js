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
  //use a nested loop to draw a grid on the screen.
  for(let x = 0; x < width; x += squareSize){
    for(let y = 0; y < height; y += squareSize){
      fill(random(0,255),random(0,255),random(0,255));
      rect(x,y,squareSize);
    }
  }
}





function setup() {
  document.addEventListener("contextmenu", event => event.preventDefault());
  createCanvas(windowWidth, windowHeight);
  
  
}

function draw() {
  grid();
  changeSize();
 
  

}
