// 3D primitives and CSS Centering 
// Vlad Atamanchuk
// Nov 23, 2023
//
// Making a fractal in 3D, Load an STL

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  
  rotateY(radians(frameCount));
  angle = map(mouseX,0,width,-120,120);
  boxes(70);


}


let angle = 5; 


function boxes(size){
  if(size > 10){
    rotateZ(radians(angle));
    translate(size*1,5,0);
    box(size);

    boxes(size*0.8);
  
  
  
  
  }
}