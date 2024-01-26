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
let currentImage = 0; 
let upcomingImage = 0;

let gameOver = false; 

let ballScale = 100; 




function preload(){
  pictures.push([loadImage("assets/00_cherry.png")]);
  pictures.push([loadImage("assets/01_strawberry.png")])
  pictures.push([loadImage("assets/02_grape.png")]);
  pictures.push([loadImage("assets/03_gyool.png")]);
  pictures.push([loadImage("assets/04_orange.png")]);
  pictures.push([loadImage("assets/05_apple.png")]);
  pictures.push([loadImage("assets/06_pear.png")]);
  pictures.push([loadImage("assets/07_peach.png")]);
  pictures.push([loadImage("assets/08_pineapple.png")]);
  pictures.push([loadImage("assets/09_melon.png")]);
  pictures.push([loadImage("assets/10_watermelon.png")]);
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

  

  balls = new Group();

  world.gravity.y = 5; //Gravity so the balls fo

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
    imageIndex = floor(random(pictures.length-5));
    print(imageIndex);
    print(pictures[imageIndex][0]);
    ball.img = pictures[imageIndex][0];
    this.diameter = floor(random([20,30,40,50,60]));
  
    
    ball.scale = this.diameter / ballScale; // Adjust scale based on diameter
    ball.d = this.diameter;// Set the diameter for the ball
    ball.velocity.y = this.velocity;
    ball.rotation = this.rotation; // Initial color
    balls.add(ball);

  }

  merge() {
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        if (balls[i].colliding(balls[j])) {
          if (balls[i].img === balls[j].img) {
            mergeSound.play();

            // Set upcomingIndex for the merged ball
            balls[j].upcomingIndex = this.getIndex();

            // Set the properties for the merged ball
            balls[j].position.x = balls[i].position.x;
            balls[j].position.y = balls[i].position.y;
            balls[j].img = pictures[balls[j].upcomingIndex].images;
            balls[j].d = pictures[balls[j].upcomingIndex].size;

            // Remove the lower level ball
            balls[i].remove();
          }
        }
      }
    }
  }
}


  overlay(){
    //Overlay of where the ball will be dropped. 
    imageMode(CENTER);
    image(pictures[currentImage][0], mouseX, 200); 
    line(mouseX, 200, mouseX, height);
    //next image
    image(pictures[currentImage][0], width* 0.70, 100);
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