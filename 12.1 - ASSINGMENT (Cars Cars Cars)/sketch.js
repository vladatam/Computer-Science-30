// Cars Cars Cars Assignment
// Vlad Atamanchuk
// October 17, 2023
//
// Creating a traffic simulation

//Global Variables
let carImageL, carImageR, truckImageL, truckImageR;
let car, truck; 


let driveRight = [];
let driveLeft = [];

let carFacing, truckFacing; 

let randomLocation;


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  carImageL = loadImage("assets/CarLeft.png");
  carImageR = loadImage("assets/CarRight.png");
  truckImageL = loadImage("assets/TruckLeft.png");
  truckImageR =loadImage("assets/TruckRight.png");
}

function mouseClicked(){
  randomLocation = int(random(0,200));
  let randomDirection = int(random(2));
  if(randomDirection === 1){
    randomLocation *= -1;
    driveLeft.push(new Vehicle(0, height/2 + randomLocation, 1));
  }
  else{
    driveRight.push(new Vehicle(0, height/2 + randomLocation, 0));
  }
  
}

function draw() {
  background(220);
  drawRoad();
  for(let i = 0; i < driveRight.length; i ++){
    driveRight[i].action();
  }
  for(let i = 0; i < driveLeft.length; i ++){
    driveLeft[i].action();  
  }
  print(frameCount);
  
}

function drawRoad(){  //Display a road on screen
  rectMode(CORNERS);
  fill(0);
  rect(0,height/2-200,width,height/2 + 200); //Draw the asphalt
  let x = 0;
  while(x < width){  //Draw the yellow dotted lines
    x += 50;
    strokeWeight(6);
    stroke("yellow");
    line(x,height/2,x-20,height/2);

    strokeWeight(0);
  }
  
}

class Vehicle{                    //Create a vehicle class
  constructor(x,y,direction){       
    this.type = int(random(2)),     //random type for 0 - car, 1 - truck
    this.x = x;                     // x position
    this.y = y;                     // y position
    this.direction = direction;      // direction 1 - left, 0 - right
    this.speed = 5;                 
  }

  action(){
    this.move();
    this.display();
  }

  move(){
    print(this.speed);
    if(this.direction === 1){
      this.x -= this.speed;
    }
    if(this.direction === 0){
      this.x += this.speed;
    }
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
    image(carFacing, this.x, this.y, 100, 100);     //renders car, depending on which direction is facing.
  }

  drawTruck(){
    image(truckFacing, this.x, this.y, 100, 100);   //renders truck, depending on whcih direction is facing.
  }

  direct(){
    if(this.direction === 1){ //1 = left draw cars driving left
      carFacing = carImageL;
      truckFacing = truckImageL; //updates to drive to left 
    }
    if(this.direction === 0){  //0 = cars driving right 
      carFacing = carImageR;
      truckFacing = truckImageR;               //updated to drive right. 

    }
  }
}

