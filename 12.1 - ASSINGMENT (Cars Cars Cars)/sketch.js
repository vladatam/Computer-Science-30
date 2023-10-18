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


function setup() {
  createCanvas(windowWidth, windowHeight);
  carImageL = loadImage("assets/CarLeft.png");
  carImageR = loadImage("assets/CarRight.png");
  truckImageL = loadImage("assets/TruckLeft.png");
  truckImageR =loadImage("assets/TruckRight.png");
  car = new Vehicle(1, width/2, height/2, 1, 2);
  truck = new Vehicle(0, width/2, height/2);
  
}

function draw() {
  background(220);
  drawRoad();
  
  car.move();
  car.display();
  truck.display();
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
  constructor(type,x,y,direction,xSpeed){
    this.type = type, this.x = x, this.y = y;
    this.direction = direction; this.speed = xSpeed;

  }

  speedUp(){
    if(this.direction === 1){
      this.speed += 1;
    }
    if(this.direction === 0){
      this.speed = -1;
    }
    if(this.speed > 15){
      this.speed = 15;
    }
    if(this.speed < -15){
      this.speed = -15;
    }
  }
    
  move(){
    this.x += this.speed;
    if(this.x > width){
      this.x = 0;
    }
    if(this.x < 0){  
      this.x = width;
    }
  }


  display(){
    //Above Right hand Side of the road direction = 1
    if(this.type === 0 && this.direction === 1){
      image(carImageR, this.x, this.y + 50, 100, 100);
    } 
    if(this.type === 1 && this.direction === 1){
      image(truckImageR, this.x, height/2 + 50, 100,100);
    }
  }
  
}

function keyPressed(){
  car.speedUp();
  print(key);
}