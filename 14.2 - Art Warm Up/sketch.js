// Art Replication Warm Up
// Vlad Atamanchuk
// Oct 26, 2023
//
// 

let pointsX = [];
let pointsY = [];


function setup() {
  createCanvas(windowWidth, windowHeight);  
  generateRandom(width,height*0.95);
}

function generateRandom(x1,y1){
  
  for(let i = 0; i<100; i++){

    fill(0);
    circle(x1,y1,5);

    y1 -= Math.floor(random(0,100));
    if(y1 < 0){
      y1 += height;
    }

    x1 = Math.floor(randomGaussian(width/2,100));
 
    pointsX.push(x1);
    pointsY.push(y1);
    
    
  }
  
  
  
}