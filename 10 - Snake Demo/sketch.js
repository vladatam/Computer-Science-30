// Basic Snake Mechanic
// Vlad Atamanchuk  
// Oct 11, 2023
//
//Practice with arrays, practice with classes and objects. 

// Global Variables
let points = [];  //snake coordinates
let headLocation; //object - where the head is
let speed= 10;
let snakeLength = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  headLocation = new Point(width/2,height/2);
  initSnake();
  strokeWeight(15);
  
}
function draw() {
  background(220);
  moveSnake();
  displaySnake();
  
}

function initSnake(){
  // set up 5 points in aray
  for(let i = 0; i < snakeLength; i++){
    points.push(createPoint());
  }
}

function createPoint(){
  //keyboard control, return a Point object
  if(keyCode === RIGHT_ARROW) headLocation.x += speed; 
  else if(keyCode === LEFT_ARROW) headLocation.x -= speed;
  else if(keyCode === UP_ARROW) headLocation.y -= speed;
  else if(keyCode === DOWN_ARROW) headLocation.y += speed;
  return new Point(headLocation.x,headLocation.y);
}

function moveSnake(){
  //delete first point and add a new one at the end
  points.splice(0,1); //delte tail
  points.push(createPoint());
}

function displaySnake(){
  for(let i = 0; i <= points.length-1; i ++){
    let curr = points[i];  // i = index, or current item.
    let right = points[i+1]; //right item
    let alphaValue = map (i,0,points.length-1,0,255);
    stroke(0,alphaValue);
    line(curr.x,curr.y,right.x,right.y);
  }
}

class Point{ //simple class for an x,y pair 
  constructor(x,y){
    this.x = x;
    this.y = y;
    
  }
}