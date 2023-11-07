// Cars Cars Cars Assignment
// Vlad Atamanchuk
// October 17, 2023
//
// Creating a traffic simulation

//Global Variables
let carImageL, carImageR, truckImageL, truckImageR; //Variables for vehicles image,and directions
let trafficlight;

let driveRight = []; //Array to store vehicles
let driveLeft = [];

let carFacing, truckFacing; //Variable to store direction of the truck 

let randomLocation;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER); //Set refrence point to center for images
  carImageL = loadImage("assets/CarLeft.png"); 
  carImageR = loadImage("assets/CarRight.png");
  truckImageL = loadImage("assets/TruckLeft.png");
  truckImageR =loadImage("assets/TruckRight.png");
}

function mouseClicked(){
  //Populates the arrays with 5 vehicles per mouse click. Randomly selecting direction. 

  for(let i = 0; i < 5; i++){
  randomLocation = int(random(20,180)); //Random starting location on the road.
  let randomDirection = floor(int(random(2))); //Random direction, 1 =left or 0 =right 
  if(randomDirection === 1){
    randomLocation *= -1; //Left bound vehicles y value is subtracted due to p5 coordinate system. 
    driveLeft.push(new Vehicle(0, height/2 + randomLocation, 1)); //Pushes vehicles to array. 
  }
  else{
    driveRight.push(new Vehicle(0, height/2 + randomLocation, 0));
  }
}
  driveLeft.stopTraffic();
}

function draw() {
  background(220);
  drawRoad();
  for(let i = 0; i < driveRight.length; i ++){ //Executes the class functions for every vehicle in the arrays.
    driveRight[i].action(); 
  }
  for(let i = 0; i < driveLeft.length; i ++){
    driveLeft[i].action();  
  }
  
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
    this.type = int(random(2)),     //random vehicle type for 0 - car, 1 - truck
    this.x = x;                     // x position
    this.y = y;                     // y position
    this.direction = direction;     // direction 1 - left, 0 - right
    this.speed = 5;                 
  }

  action(){
    //Call all below functions with chances
    let chance = random(int(1)); //Random chance rolled each frame
    if(chance < 0.01){ //1% chance of random landing below 0.01
     this.speedUp();
    }
    else if(chance < 0.02){  //1% chance of random landing between 0.01 and 0.02. 
      this.speedDown();
    }
    //Called every frame
    this.move();
    this.display();
  }

  speedUp(){
    //Speeds vehicles down by increasing speed value
    this.speed += 1;
    if(this.speed >15){
      this.speed = 15; //Max speed
    }
  }

  speedDown(){
    //Slows vehicles down by decreasing speed value
    this.speed -= 1;
    if(this.speed <0){
      this.speed = 0; //Minimum speed
    }
  }

  move(){
    //Depending on direction speed value will either be subtracted or added,
    //to move the vehicles 
    if(this.direction === 1){
      this.x -= this.speed;
    }
    if(this.direction === 0){
      this.x += this.speed;
    }
    //Wraps Vehicles back on screen after they exit the screen.
    if(this.x > width){
      this.x = 0;
    }
    if(this.x < 0){  
      this.x = width;
    }
  }
  
 

  display(){
    //Renders the vehicles depending vehicle type
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
      truckFacing = truckImageL; //updates to face left
    }
    if(this.direction === 0){  //0 = cars driving right 
      carFacing = carImageR;
      truckFacing = truckImageR;               //updated to face right

    }
  }
}

