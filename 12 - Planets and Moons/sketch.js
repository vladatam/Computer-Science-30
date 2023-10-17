// Planets and Moons
// Vlad Atamanchuk
// Oct 17, 2023
//
// A look at re-creating objects, objects IN objects. 
let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(0);
  myPlanet.display();
}

function mouseClicked(){
  if(keyIsPressed && keyCode === SHIFT){
    //overwrite an object?
    myPlanet = new Planet(mouseX,mouseY);

  }
  else{
    myPlanet.createMoon();
  }
}

class Planet{
  constructor(x,y){
    this.x = x;     this.y = y;
    this.s = 100;   this.radius = this.s/2;
    this.moons = [];  //fill with moon objects
  }
  display(){
    circle(this.x, this.y, this.s);
    for(let m of this.moons){
      
      m.update();
    }
  }
  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }
}

class Moon{
  constructor(x,y){
    this.x = x;  this.y = y;
    this.steps = 10;  this.speed = 5;
  }
  update(){
    this.x += this.speed;     //MOVEMENT
    this.steps--;  //-=1
    if(this.steps === 0){
      this.steps = 20;
      this.speed *= -1;
    }                         //DISPLAY
    circle(this.x, this.y, 30);
  }

}