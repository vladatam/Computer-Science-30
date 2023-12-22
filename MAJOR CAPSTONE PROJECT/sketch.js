// Major Capstone Project -- The Fruit Game
// Vlad Atamanchuk
// Dec 6, 2023 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variables
let score; 
let balls;
let button;
let ballManager; 
let borders;
let pictures = [];
let picture; 
let currentImage = 0; 

let currentScore = 0; 

let colorIndex = 0;
let colours = ["red", "blue", "purple", "green","brown", "cyan"];

let diameter = 40; 

let gameOver = false; 



function preload(){
  pictures.push(loadImage("assets/Diamond.png"));
  pictures.push(loadImage("assets/Strawberry.png"));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  score = createGraphics(width,height);
  stroke("white");
  ballManager = new Balls; 
  
  ballManager.setUpBorders();

  balls = new Group();

  world.gravity.y = 2; //Gravity so the balls fo

  button = createSprite(50,50, 50, 20);
  button.text = "Restart";
  button.static = true;
} 


function draw() {
  background(200);
  if(!gameOver){
    for(let i = 0; i < balls.length; i++){
      ballManager.overlay();
      ballManager.merge();
      ballManager.losingLine();
    }
  }
  ballManager.score();
  restart();
  
}

function mousePressed(){ 
  if(!gameOver){
    ballManager.create(); 
  }
  
}

class Balls {
  constructor(){
    this.velocity = 5; 
    this.rotation = 2;
    borders = new Group();
    
  }
  

  setUpBorders(){


    borders.add = new borders.Sprite(width / 2, height-20, width, 50); //Floor
    borders.add = new borders.Sprite(0, 0, width*0.45, height*2); //Left Wall 
    borders.add = new borders.Sprite(width, 0, width*0.45, height*2); //Right Wall
    borders.static = true;
    borders.color = "white";

  }
  
  create() {
    this.diameter = 20;
  let ball = createSprite(mouseX, 200, this.diameter, this.diameter);
  ball.img = pictures[colorIndex];
  ball.scale = this.diameter / pictures[colorIndex].width; // Adjust scale based on diameter
  ball.d = this.diameter * 4; // Set the diameter for the ball
  ball.velocity.y = this.velocity;
  ball.rotation = this.rotation; // Initial color
  balls.add(ball);
  }

  merge() {
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        if (balls[i].collides(balls[j])) {
          if (floor(balls[j].diameter) === floor(balls[i].diameter)) {
            balls[j].diameter += balls[i].diameter / 3;
            currentScore += this.diameter / 2;
            balls[j].position.x = balls[i].position.x;
            balls[j].position.y = balls[i].position.y;
            colorIndex ++;
            // Assigning a different color for each new diameter
            balls[j].img = pictures[colorIndex];
            
            balls[i].remove();
          }
        }
      }
    }
  }


  overlay(){
    //Overlay of where the ball will be dropped. 
    circle(mouseX, 200,this.diameter); 
    line(mouseX, 200, mouseX, height);
  }

  losingLine() {
    line(0, 200, width, 200);
    for (let i = 0; i < balls.length; i++) {
      if (balls[i].position.y < 200) {
        print("YOU LOSE");
        textAlign(CENTER);
        text('YOU LOSE', width / 2, height / 2);
        gameOver = true;
      }
    }
  }

  score(){
    textAlign(CENTER);
    textSize(40);
    text(currentScore, 200, height/2);
  }
  

}

function restart(){
  if(button.mouse.hovering()){
    button.color = "red";
    if(mouse.pressing()){
      gameOver = false; 
      print("Restart");
      button.color = "green";
      balls.remove();
    }
  }
  else{
    button.color = "white";
  }
  
}