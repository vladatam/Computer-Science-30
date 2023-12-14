// Major Capstone Project -- The Fruit Game
// Vlad Atamanchuk
// Dec 6, 2023 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variables
let balls = [];
let ground, wall, wall2;
let pictures = [];
let picture; 
let currentImage = 0; 

let diameter = 40; 



function preload(){
  //picture = loadImage("assets/Diamond.png");
  //= loadImage("assets/Strawberry.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke("white");

  world.gravity.y = 2;

  ground = createSprite(width / 2, height - 10, width, 20);
  ground.static = true;
  ground.color = "white";

  wall = createSprite(0, 0, 40, height*2);
  wall.static = true;
  wall.color = "white";

  wall2 = createSprite(width, 0, 40, height*2);
  wall2.static = true;
  wall2.color = "white";
  }

function draw() {
  background(200);
  for(let i = 0; i < balls.length; i++){
    balls[i].overlay();
   // balls[i].merge();

  }
  
  drawSprites();
}

function mousePressed(){
  balls.push(new Balls);
  balls[balls.length-1].create();
}

class Balls {
  constructor(){
    this.diameter = 40; 
    this.velocity = 5; 
    this.rotation = 2;
    this.shapeColor = color('red');
  }
  
  create(){
    let ball = createSprite(mouseX, 200, 20, 20);
    //ball.img = picture;
    ball.d = this.diameter;
    ball.velocity.y = this.velocity;
    ball.rotation = this.rotation;
    ball.shapeColor = this.shapeColor;
    print(balls);
  }

  merge(){
    for(let i = 0; i<balls.length; i++){
      if(balls[i].collide(balls[i])){
        this.diameter = 20; 
      }
    }
    
  }


  overlay(){
    //Overlay of where the ball will be dropped. 
    circle(mouseX, 200, diameter); 
    line(mouseX, 200, mouseX, height);
  }


}

