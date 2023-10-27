// Art Replication Warm Up
// Vlad Atamanchuk
// Oct 26, 2023

//Global Variables
let pointsX = []; //Arrays to store X,Y
let pointsY = [];


function setup() {
  createCanvas(windowWidth, windowHeight);  
  generateRandom(width,height*0.95); 
}

function generateRandom(x,y){ //Pass in the first starting positions
  
  for(let i = 0; i<100; i++){ //Loop to create 100 Gaussian points
    y -= Math.floor(random(0,100)); 
    if(y < 0){       //if negative y, turns to positive. 
      y += height;
    }
    x = Math.floor(randomGaussian(width/2,100)); //Gaussian generated x coordinate, mean = half of screen size, and deviation = 100
 
    pointsX.push(x); //pushes the generated points x,y into array.
    pointsY.push(y);

      
  }
  for(let i = 0; i<99; i++){ //Loop connects 99 lines between the points 
    line(pointsX[i],pointsY[i], pointsX[i+1], pointsY[i+1]);
  }

}