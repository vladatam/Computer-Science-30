// Primitive Paint Assingment 
// Vlad Atamancuk
// Sep 15, 2023
//
// Extra for Experts:
// -Designing a primitive painting program using P5 library and refrence.

//Global Variables
let overlay;
let overlay2;
let nodeColors = [ ];
let colorIndex = 2;
let sizeX = 10;
let sizeY = 10; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width,height);
  overlay2 = createGraphics(width,height);
}

function draw() {
  background(220);
  reset();
  changeSize();
  drawRectangle();
  image(overlay,0,0);
  drawCircle();
  image(overlay,0,0);
  drawTriangle();
  image(overlay,0,0);
  autoArt();
}

//Change size of the shapes. 
function changeSize(){
  if(keyIsPressed){
    if (keyCode === 38){
      sizeX += 5;
      sizeY += 5;
      print(sizeX,sizeY);
    }
    if (keyCode === 40){
      sizeX -= 5;
      sizeY -= 5;

    }
    if(sizeX < 0 || sizeY < 0){
      sizeX =0;
      sizeY =0;
    }
  }
}

//Draw a rectangle at mouse position
function drawRectangle(){
  if(keyPressed){
    if (key === "a"){
      rect(mouseX-10,mouseY-10, sizeX, sizeY);
      if (mouseIsPressed){
        if (mouseButton === LEFT){
          overlay.rect(mouseX-10,mouseY-10, sizeX, sizeY);
          image(overlay,0,0);
        }
      }
    }

  }
}
//Draw a circle at mouse poistion
function drawCircle(){
  if(keyPressed){
    if (key ==="s"){
      circle(mouseX,mouseY,30);
      if (mouseIsPressed){
        if (mouseButton === LEFT){
          overlay.circle(mouseX, mouseY, 30);
          image(overlay,0,0);
        }
      }
  
    }
  }
    
}
//Draw a triangle 
function drawTriangle(){
  if(keyPressed){
    if (key ==="d"){
      triangle(mouseX,mouseY-20,mouseX-10,mouseY+10,mouseX+10,mouseY+10);
      if (mouseIsPressed){
        if (mouseButton === LEFT){
          overlay.triangle(mouseX,mouseY-20,mouseX-10,mouseY+10,mouseX+10,mouseY+10);
          image(overlay,0,0);
        }
      }
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
