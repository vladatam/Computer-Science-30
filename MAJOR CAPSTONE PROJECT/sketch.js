// Major Capstone Project -- The Fruit Game
// Vlad Atamanchuk
// Dec 6, 2023 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variables
let fruit;
let size1; 

function preload(){
  // fruit = createSprite();
  // fruit.img = loadImage("assets/Diamond.png");
  
}


function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight); 
  world.gravity.y = 10;
  fruits();
  inboundArea();


  // fruits = new Fruit();
  
}

function draw() { 
background(255);
// fruits.display();
// fruits.move();
 
}


function fruits(){
   size1 = random(floor(10, 100));
  if(mouse.presses()){
    fruit = createSprite(width/2,height/2, size, "d");
  }
  
  
}



function inboundArea(){
  let walls;
  let floor = createSprite();
  //Create the bottom of the canvas. 
  floor.y = height;
  floor.w = width;
  floor.h = 200;
  floor.color = "white";
  floor.collider = "kinematic";

  //create the sides 
  walls = createSprite(0, height/2, 100, height, "static");
  
}





// class Fruit{
  
//   constructor(){
   
	
//   }

//   move(){
	

//   }

//   display(){
//   fruit.collider = "static";
// 	fruit.x = width/2, fruit.y = height/2;
// 	fruit.scale = 0.2;
//   }

// }