// Ball Bouncing Demo using localStorage and sound library
// Vlad Atamanchuk
// Nov 27, 2023
//
// Store the amount of times the ball has bounced and using the sound library

//Global Variables

let ball, totalBounces = 0; 

let bounceSound, music;

let start = false; 

let balls = [];

//localStorage.getItem("bounces")
//localStorage.setItem("bounces", totalBounces)

function preload(){ //waits here until all loads are complete
  bounceSound = loadSound("Assets/bounceSound.wav");
  music = loadSound("Assets/background.mp3");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for(let i = 0; i < 10; i++){
    balls.push(new Ball(random(width/2),random(height/2)));
  }

  if(localStorage.getItem("bounces") === null){ // no key yet
    localStorage.setItem("bounces", 0);
  }
  else{
    totalBounces = int(localStorage.getItem("bounces"));
  }

  //start some background music

}

function draw() {
  background(220);
  for(let i of balls){
    ball.display();
    ball.move();
  }

  if(start === false){
    textSize(15); textAlign(CENTER);
    text("Click to Begin", width/2, height/2);
    if(mouseIsPressed){
      start = true;
      music.setVolume(0.1);
      music.loop();
    }
  }
  
  //display the total number of bounces
  textSize(30); textAlign(CENTER);
  text(totalBounces, width/2, height/2);
}


class Ball{ //a ball that bounces on teh canvas edges. 
  constructor(x,y){
    this.pos = createVector(x,y);
    this.velocity = createVector(random(-6,6),random(-6,6));
  }
  

  display(){
    circle(this.pos.x, this.pos.y, 30);
  }

  move(){
    this.pos.add(this.velocity);
    //check for wall colisions;
    if(this.pos.x < 0 || this.pos.x > width){
      this.velocity.x*=-1;
      totalBounces ++; 
      bounceSound.play();
      localStorage.setItem("bounces", totalBounces);
    }
    if(this.pos.y < 0 || this.pos.y > height){
      this.velocity.y*=-1;
      totalBounces ++;
      bounceSound.play();
      localStorage.setItem("bounces", totalBounces);
    }

  }
}

function keyPressed(){
  if(key === "r"){
    localStorage.setItem("bounces",0);
    totalBounces = 0;
  }
}