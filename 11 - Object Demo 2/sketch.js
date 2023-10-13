// Objects Demo Two 
// Vlad Atamanchuk  
// Oct 13, 2023
//
// Looking at objects that can interact with each other

//Global Variables
let points =[];
let reach = 250;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  for(let p of points){
    p.move();
    p.display();
    p.connectPoints();
  } 
}

function mouseClicked(){
  points.push(new MiniPoint(mouseX,mouseY)); 

}

class MiniPoint {

  //constrcutor function -- intializes objects created from this class
  constructor(x,y){ //set up class variable using this.(variable)
    this.x=x; 

    this.y=y;  

    this.s=20;  

    this.c = color(random(255),random(255),random(255));
    this.xTime = random(10); this.yTime = random(10); //random starting times for objects.
    this.timeShift = 0.01; //shift in the time values
    this.maxSpeed = 5; 
  }
  //class functions 
  move(){
    let xSpeed = noise(this.xTime);
    xSpeed = map(xSpeed, 0,1, -this.maxSpeed, this.maxSpeed);
    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed,0,1,-this.maxSpeed, this.maxSpeed);
    this.x += xSpeed; this.y += ySpeed;
    this.xTime += this.timeShift; this.yTime += this.timeShift;

    if(this.x <0) this.x += width;
    if(this.x >width) this.x -=width;
    if(this.y <0) this.y +=height;
    if(this.y > height) this.y -=height;

  }

  display(){
    fill(this.c);
    noStroke();
    //modify size based on mouse proximity
    let d = dist(this.x, this.y, mouseX, mouseY)
    if(d < reach){
      this.s = map(d, 0,reach, 50,20);
    }
    else{
      this.s = 20;
    }
    circle(this.x,this.y,this.s);
  }

  connectPoints(pointArray){
    //take an array, and connect this object to any 
    //neatrby Minipoints with a line segment 
    stroke(this.c);
    for(let p of points){
      // p - object we are comparing to 
      if(this !== p){ //this = to current, check that p isnt myself.
        if(dist(this.x, this.y, p.getX(), p.getY()) < reach){
          line(this.x, this.y, p.getX(), p.getY());
        }
      }
    }
    //this.x, this.y, p.x, p.y or p.getx() p.gety()

  }
  getX(){return this.x}
  getY(){return this.y}


}
