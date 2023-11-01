// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Global Variables
let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  // movers.push(new Mover(mouseX,mouseY));
}

function draw() {
  background(220);
  movers.push(new Mover(mouseX,mouseY));
  for(let i =0; i<movers.length; i++){
    let m = movers[i];
    m.move();   m.display();
  }
}

class Mover{
  //constrcutor and class properties
  constructor(x,y){
    this.position = createVector(x,y);  this.s = 20;
    this.velocity = createVector(random(-3,3), random(-5,-3));
    this.gravity = createVector(0,0.1);
    this.lifetime = Math.floor(random(100,200));
  }
  //class methods
  move(){
    //Apply forces first (modify our velocity)
    this.position.add(this.velocity);
    //Then appl
    this.velocity.add(this.gravity);
  }

  display(){
    push();
    translate(this.position.x, this.position.y);
    circle(0, 0, this.s);
    pop();
  }
}