// Major Capstone Project -- The Fruit Game
// Vlad Atamanchuk
// Dec 6, 2023 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variables
let fruit;

let ball; 

function preload(){
  ball = createSprite();
  ball.img = loadImage("assets/Diamond.png");
}

let fruits; 




function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  fruits = new Fruit(width/2, height/2);
}

function draw() { 
  background(0);
fruits.display();
fruits.move();
 
}

class Fruit{
  
  constructor(){
    
	
  }

  move(){
	

  }

  display(){
	ball.x = width/2, ball.y = height/2;
	ball.scale = 0.2;
  }

}