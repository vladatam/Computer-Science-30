// Cars Cars Cars Assignment
// Vlad Atamanchuk
// October 17, 2023
//
// Creating a traffic simulation

//Global Variables
let carImageL, carImageR, truckImageL, truckImageR;
let car, truck; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  carImageL = loadImage("assets/CarLeft.png");
  carImageR = loadImage("assets/CarRight.png");
  truckImageL = loadImage("assets/TruckLeft.png");
  truckImageR =loadImage("assets/TruckRight.png");
  car = new Vehicle(0);
  truck = new Vehicle(1);
  
}

function draw() {
  background(220);
  drawRoad();
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
    rect(x,height/2,x-20,height/2);
    strokeWeight(0);
  }
  
}

class Vehicle{        //Create a vehicle class
  constructor(type){
    this.type = type;
  }
  display(){
    if(this.type === 0){
      image(carImageL, width/2, height/2 - 150, 100, 100);
    }
    if(this.type === 1){
      image(truckImageL, width/2, height/2 + 50, 100,100);
    }
  }

}
