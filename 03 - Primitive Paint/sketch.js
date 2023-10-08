// Primitive Paint Assingment 
// Vlad Atamancuk
// Sep 15, 2023
//
// Creating a mediocare paint program using p5 library. 

//Global Variables
let render, autonomous, name;
let nodeColors = [ ];
let colorIndex = 0;
let shapeSize = 20;
let currentBrush = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  render = createGraphics(width,height);
  name =  createGraphics(width,height);
  autonomous = createGraphics(width,height);
  rectMode(CENTER);
  
  

}

function draw() { 
  background(225);
  type();
  image(name,0,0);
  autoArt(); 
  reset(); 
  image(render,0,0);
  drawShape();
 
  image(autonomous,0,0);
  
  

}

//Change size of the shapes. 

function changeSize(){
  if(keyIsPressed){
    if (keyCode === 38){
      shapeSize+=2;
    }
    if (keyCode === 40){
      shapeSize -=2;
    }
    if(currentBrush === 1){
        rect(mouseX,mouseY,shapeSize);
      }
    if(currentBrush === 2){
        circle(mouseX,mouseY,shapeSize);
      }
    if(currentBrush === 3){
        triangle(mouseX,mouseY-shapeSize/2,mouseX-shapeSize/2,mouseY+shapeSize/2,mouseX+shapeSize/2,mouseY+shapeSize/2);
      }
    } 
    
    //Minimum Shape Size
    if(shapeSize< 20){
      shapeSize =20;
    }
    
    //Maximum Shape Size
    if(shapeSize >400){
      shapeSize = 400;
    }
  
}


//Draw a rectangle at mouse position
function drawShape(){
  
  if (keyPressed){
    if(key === "a"){
      rect(mouseX,mouseY,shapeSize);
      currentBrush =1;

    }
    if(key === "s"){
      circle(mouseX,mouseY,shapeSize);
      currentBrush =2;
    }
    if(key === "d"){  
      triangle(mouseX,mouseY-shapeSize/2,mouseX-shapeSize/2,mouseY+shapeSize/2,mouseX+shapeSize/2,mouseY+shapeSize/2);
      currentBrush =3;
    }
  }
  changeSize();
  if (mouseIsPressed){ 
    rectMode(CENTER);
    if(currentBrush === 1){
      render.square(mouseX-shapeSize/2,mouseY-shapeSize/2,shapeSize);
    }
    if(currentBrush === 2){
      render.circle(mouseX,mouseY,shapeSize);
    }
    if(currentBrush ===3){
      render.triangle(mouseX,mouseY-shapeSize/2,mouseX-shapeSize/2,mouseY+shapeSize/2,mouseX+shapeSize/2,mouseY+shapeSize/2);

    }
  }
  
}
//Autonomous Art
function autoArt(){ 
  autonomous.circle(width/2,height/2,random(0,100));
  autonomous.fill(random(0,255),random(0,255),random(0,255));
  image(autonomous,0,0);
}
function reset(){
  if(keyCode === 32){
    render.clear();
    shapeSize = 20;

  }

}

// Typography

function type(){
  name.textSize(40);
  name.textFont('Times New Roman');
  name.textAlign(CENTER);
  name.text ('Vlad Atamanchuk', width/2, height*0.9);

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
    render.fill(colours[colorIndex]);
  }
  else if(event.delta > 0){
    colorIndex --;
    print(colorIndex);
    if (colorIndex <= 0){
      colorIndex = colours.length-1;
    }
    fill(colours[colorIndex]);
    render.fill(colours[colorIndex]);  
  }
  return false; //Disables browser scrolling. 
}

