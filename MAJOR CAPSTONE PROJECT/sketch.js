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
let mergeSound, loseSound; 

let fruit; 

let currentScore = 0; 

let imageIndex = 0;
let upcomingImage = 0;
let currentIndex = 0; 

let gameOver = false; 

let ballScale = 100; 




function preload(){
  pictures.push({images:  loadImage("assets/00_cherry.png"), size: 35});
  pictures.push({images:  loadImage("assets/01_strawberry.png"), size: 48})
  pictures.push({images:  loadImage("assets/02_grape.png"), size: 61});
  pictures.push({images:  loadImage("assets/03_gyool.png"), size: 76});
  pictures.push({images:  loadImage("assets/04_orange.png"), size: 95});
  pictures.push({images:  loadImage("assets/05_apple.png"), size: 117});
  pictures.push({images:  loadImage("assets/06_pear.png"), size: 137});
  pictures.push({images:  loadImage("assets/07_peach.png"), size: 156});
  pictures.push({images:  loadImage("assets/08_pineapple.png"), size: 204});
  pictures.push({images:  loadImage("assets/09_melon.png"), size: 220});
  pictures.push({images:  loadImage("assets/10_watermelon.png"), size: 260});
  mergeSound = loadSound("sounds/splatter.mp3");
  loseSound = loadSound("sounds/lose.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  print(pictures);
  score = createGraphics(width,height);
  stroke("white");
  ballManager = new Balls; 
  
  ballManager.setUpBorders();

  world.gravity.y = 2; 

  balls = new Group();

 
  
  button = createSprite(50,50, 50, 20);
  button.text = "Restart";
  button.static = true;
} 

function draw() {
  background(200);
  ballManager.losingLine();
  if(!gameOver){
    for(let i = 0; i < balls.length; i++){
      ballManager.overlay();
      ballManager.merge();
      
    }
  }
  ballManager.score();

  restart();
  
  debugging(); // Makes collider visible
   
  
}

function mousePressed(){ 
  if(!gameOver){
    if(!borders[1].mouse.hovering() && !borders[2].mouse.hovering()){ //See if mouse is in the playing area. 
      ballManager.create(); 
    }
  }
}

class Balls {
  constructor(){
    this.velocity = 5; 
    this.rotation = 2;
    borders = new Group();
    
  }
  
  setUpBorders(){
    push();
    strokeWeight(0);
    borders.add = new borders.Sprite(width / 2, height-20, width, 50); //Floor
    borders.add = new borders.Sprite(0, 0, width*0.45, height*2); //Left Wall 
    borders.add = new borders.Sprite(width, 0, width*0.45, height*2); //Right Wall
    borders.static = true;
    borders.color = "brown";
    pop();
  }
  
  create() {

    let ball = createSprite(mouseX, 200, this.diameter);
    ball.bounciness = 0;
    //imageIndex = floor(random(pictures.length-5));

    let currentImage = pictures[imageIndex].images; 

    currentIndex = imageIndex;

    ball.img = currentImage;
    this.diameter = pictures[imageIndex].size;
      // Adjust scale based on diameter
    ball.d = this.diameter;// Set the diameter for the ball
    ball.scale = 1.05;
    ball.velocity.y = this.velocity;
    ball.rotation = this.rotation; // Initial color
    balls.add(ball);

  }

  merge() {
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        if (balls[i].colliding(balls[j])) {
          if (balls[j].img === balls[i].img) {
            mergeSound.play();
          
            // Get the current level index 
            
            
           

            // Check the next level in the progression array
            let nextLevelIndex = imageIndex + 1;

            // Ensure the next level is within bounds of the pictures array
            if (nextLevelIndex < pictures.length) {
              currentScore += this.diameter / 2;

              // Update the merging ball with the next level image and size
              balls[j].position.x = balls[i].position.x;
              balls[j].position.y = balls[i].position.y;
              balls[j].img = pictures[nextLevelIndex].images;
              balls[j].d = pictures[nextLevelIndex].size;
              

              // Remove the lower level ball
              balls[i].remove();
            }
          }
        }
      }
    }
  }



  overlay(){
    let overlayImage = pictures[0].images;
    //Overlay of where the ball will be dropped. 
    imageMode(CENTER);
    image(overlayImage, mouseX, 200); 
    line(mouseX, 200, mouseX, height);
    //next image
    image(overlayImage, width* 0.70, 100);
  }

  losingLine() {
    line(0, 200, width, 200);
    for (let i = 0; i < balls.length; i++) {
      if (balls[i].position.y < 200) {
        loseSound.play();
        textAlign(CENTER);
        gameOver = true;
        balls.remove();
        text('YOU LOSE', width / 2, height / 2);
      }
    }
  }

  score(){
    textAlign(CENTER);
    textSize(40);
    text(currentScore, width/2, 150);
  }  
}

function debugging(){
  if (kb.pressing(' ')){
    balls.debug = true; 
  }
  else balls.debug = false; 
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