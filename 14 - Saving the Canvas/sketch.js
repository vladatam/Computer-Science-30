// Saving the Canvas
// Vlad Atamanchuk
// Oct 27, 2023
//
//Saving Image Files, Scaling up the Canvas

let scaleFactor = 5;

function setup() {
  createCanvas(600 * scaleFactor, 200 * scaleFactor);
  noLoop();
}

function draw() {
  background(220);
  for(let i=0; i<1000; i++){
    let x = random(width);
    let y = random(height);
    if(y < height*0.7 && y > height*0.3){
      circle(x,y,10*scaleFactor);
    }
  }
}
function keyPressed(){
  if(key === "s"){
    save("myImage.png"); 
  }
}

