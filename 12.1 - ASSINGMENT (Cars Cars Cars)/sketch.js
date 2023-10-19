// Cars Cars Cars Assignment
// Vlad Atamanchuk
// October 17, 2023
//
// Creating a traffic simulation

//Global Variables
let carImageL, carImageR, truckImageL, truckImageR;
let car, truck; 
let currentCar;
let driveRight = [];
let driveLeft = [];

let carFacing, truckFacing; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  carImageL = loadImage("assets/CarLeft.png");
  carImageR = loadImage("assets/CarRight.png");
  truckImageL = loadImage("assets/TruckLeft.png");
  truckImageR =loadImage("assets/TruckRight.png");
}

function mouseClicked(){
  let randomLocation = int(random(50,150));

  driveRight.push(new Vehicle(0, height/2 + randomLocation, int(random(2)), 1));
  driveLeft.push(new Vehicle(0, height/2 - randomLocation, int(random(2)), 1));
}

function draw() {
  background(220);
  drawRoad();
  for(let i = 0; i < driveRight.length; i ++){
    driveRight[i].display();
    driveRight[i].move();
  }
  for(let i = 0; i < driveLeft.length; i ++){
    driveLeft[i].display();
    driveLeft[i].move();
  }
  
}

function drawRoad(){  //Display a road on screen
  rectMode(CORNERS);
  fill(0);
  rect(0,height/2-200,width,height/2 + 200);
  let x = 0;
  while(x < width){
    x += 50;

    strokeWeight(6);
    stroke("yellow");

    line(x,height/2,x-20,height/2);

    strokeWeight(0);
  }
  
}

class Vehicle{        //Create a vehicle class
  constructor(x,y,direction,xSpeed){
    this.type = int(random(2)), 
    this.x = x, 
    this.y = y;
    this.direction = direction;
    this.speed = xSpeed;
    this.start = int(random(150));

  }

  speedUp(){
    this.speed += 1; 
    if(this.speed > 15){   //max value for speed. 
      this.speed = 15; 
    }
  }
    
  move(){
    if(this.x > width){
      this.x = 0;
    }
    if(this.x < 0){  
      this.x = width;
    }
  }


  display(){
    this.direct();
    if(this.type === 0){   // 0 = car
      this.drawCar();
    }
  
    if(this.type === 1){  // 1 = truck 
      this.drawTruck();
    }
  }

  drawCar(){
    image(carFacing, this.x, this.y, 100, 100);
  }

  drawTruck(){
    image(truckFacing, this.x, this.y, 100, 100);
  }

  direct(){
    if(this.direction === 1){ //1 = left draw cars driving left
      carFacing = carImageL;
      truckFacing = truckImageL;
      this.x -= this.speed;  //updates to drive to left 
    }
    if(this.direction === 0){  //0 = cars driving right 
      carFacing = carImageR;
      truckFacing = truckImageR;           
      this.x += this.speed;      //updated to drive right. 
    }
  }
}

function keyPressed(){
  this.speedUp();
  print(key);
}