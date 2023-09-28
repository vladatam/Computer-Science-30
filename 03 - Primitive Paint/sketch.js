// Primitive Paint Assingment 
// Vlad Atamancuk
// Sep 15, 2023
//
// Extra for Experts:
// -Designing a primitive painting program using P5 library and refrence.

//Global Variables
let overlay, overlay2, overlay3;
let nodeColors = [ ];
let colorIndex = 2;
let shapeSize = 10;
let currentBrush =0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay,overlay2,overlay3 = createGraphics(width,height);
  rectMode(CENTER);
  noStroke();
  overlay.noStroke();
  
}

function draw() { 
  background(225);
  autoArt();
  reset();
  drawShape();
  image(overlay,0,0);
  changeSize();
  image(overlay2,0,0);
  

}

//Change size of the shapes. 
function changeSize(){
  if(keyIsPressed){
    if (keyCode === 38){
      shapeSize+=1;
    }
    if (keyCode === 40){
      shapeSize -=1;
    }
    if(shapeSize< 0){
      shapeSize =0;
    }
  }
}

//Draw a rectangle at mouse position
function drawShape(){
  if (keyPressed){
    if(key === "a"){
      overlay.rect(mouseX,mouseY,shapeSize);
      currentBrush =1;
    }
    if(key === "s"){
      overlay.circle(mouseX,mouseY,shapeSize);
      currentBrush =2;
    }
    if(key === "d"){  
      overlay.triangle(mouseX,mouseY-shapeSize,mouseX-shapeSize,mouseY+shapeSize,mouseX+shapeSize,mouseY+shapeSize);
      currentBrush =3;
    }
  }
  if (mouseIsPressed){ 
    if(currentBrush === 1){
      overlay2.rect(mouseX,mouseY,shapeSize);
    }
    if(currentBrush === 2){
      overlay2.circle(mouseX,mouseY,shapeSize);
    }
    if(currentBrush ===3){
      overlay2.triangle(mouseX,mouseY-shapeSize,mouseX-shapeSize,mouseY+shapeSize,mouseX+shapeSize,mouseY+shapeSize);

    }
  }
  
}
//Autonomous Art
function autoArt(){ 
  overlay2.circle(width/2,height/2,random(0,100));
  overlay2.fill(random(0,255),random(0,255),random(0,255));
  image(overlay2,0,0);
}
function reset(){
  if(keyCode === 32){
    overlay.clear();
    overlay2.clear();
  }

}
//Check which inputs are pressed. 
function keyPressed(){
  print("key", key, "\tkeyCode", keyCode);  
}
function mousePressed(){
  print("mouse", mouseButton);
}
//Change colours using scroll wheel
function mouseWheel(event){
  let colours = ["blue", "red", "green", "yellow", "orange","purple"];
  print(event.delta);
  if(event.delta < 0){
    colorIndex ++;
    print(colorIndex);
    if(colorIndex >= colours.length){
      colorIndex = 0;
    }
    fill(colours[colorIndex]);
    overlay.fill(colours[colorIndex]);
  }
  else if(event.delta > 0){
    colorIndex --;
    print(colorIndex);
    if (colorIndex <= 0){
      colorIndex = colours.length-1;
    }
    fill(colours[colorIndex]);
    overlay.fill(colours[colorIndex]);  
  }
  return false; //Disables browser scrolling. 
}
