// Major Capstone Project -- The Fruit Game
// Vlad Atamanchuk
// Dec 6, 2023 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variables
let balls;
let ballManager; 
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

  ballManager = new Balls; 
  balls = new Group();


  world.gravity.y = 2;

  borders = new Group();
  borders.add = new borders.Sprite(width / 2, height - 10, width, 20); //Floor
  borders.add = new borders.Sprite(0, 0, 40, height*2); //Left Wall 
  borders.add = new borders.Sprite(width, 0, 40, height*2); //Right Wall
  borders.static = true;
  borders.color = "white";

  borders.add = new borders.Sprite(0, 200, width*2, 1);
  borders[3].static = false; 

}



function draw() {
  background(200);
  for(let i = 0; i < balls.length; i++){
    ballManager.overlay();
    ballManager.merge();
    ballManager.losingLine();

  }
  
  drawSprites();
}

function mousePressed(){
  ballManager.create();
}

class Balls {
  constructor(){
    this.diameter = 100; 
    this.velocity = 5; 
    this.rotation = 2;
    this.shapeColor = color("red");
  }
  


  
  create(){
    let ball = createSprite(mouseX, 200, 20, 20);
    //ball.img = picture;
    ball.d = this.diameter;
    ball.velocity.y = this.velocity;
    ball.rotation = this.rotation;
    ball.shapeColor = this.shapeColor;
    balls.add(ball);
    
  }

  merge(){
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        if (balls[i].collides(balls[j])) {
          if (floor(balls[j].diameter) === floor(balls[i].diameter)) {
            balls[j].diameter += balls[i].diameter / 3;
            balls[j].position.x = balls[i].position.x;
            balls[j].position.y = balls[i].position.y;
            balls[j].shapeColor = "blue";
            balls[i].remove();
          }
        }
      }
    }
    
  }


  overlay(){
    //Overlay of where the ball will be dropped. 
    circle(mouseX, 200, diameter); 
    line(mouseX, 200, mouseX, height);
  }

  losingLine() {
    for (let i = 0; i < balls.length; i++) {
      if (balls[i].position.y < borders[3].position.y) {
        print("YOU LOSE");
        textAlign(CENTER);
        text('YOU LOSE', width / 2, height / 2);
        noLoop();
      }
    }
  }

}