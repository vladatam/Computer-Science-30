// First Object Demo
// Vlad Atamanchuk
// Oct 2, 2023
//
// A bunch of walkers out for a walk  

//Global Variables
let w

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = new Walker(width/2,height/2,color("red"));
}

function draw() {
  background(220);
  w.display();
  w.move();
}


class Walker{
  //class constrcutor and properties
  constructor(x, y, c){
    this.x = x;
    this.y = y;
    this.c = c;
    this.speed = 10;
    this.size =10;
  }

  display(){ //draw the Walker at its position
    rectMode(CENTER);
    fill(this.c);
    square(this.x,this.y,this.size);    
  }

  move(){ //move via random walker algorithm
    //25% → ↑ ← ↓ chance of each random() 0-3 0,1,2,3
    let myChoice = Math.floor(random(4));
    if(myChoice === 0) this.x -= this.speed; //Left
    else if(myChoice === 1) this.x += this.speed; //Right
    else if(myChoice === 2) this.y += this.speed; //Down
    else this.y -= this.speed; //Up
  }

  //class methods/functions/procedures 
}