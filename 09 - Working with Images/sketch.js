// Working with Images
// Mr. Scott
// October 10, 2023

// Global Variables
let lionL, lionR, facing = "left";
let pinImages = [];
let currentPin = 0;

function preload(){
  // happens BEFORE setup. will ensure all loading
  // is done, before moving on to setup()
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for(let i = 0; i < 9; i++){
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  //stepOne(); //lion display
  displayPin();
}

function displayPin(){
  //display our pinwheel animation
  image(pinImages[currentPin], width/2,height/2);

  //advance to next image
  currentPin++; 
  if(currentPin > 8) currentPin = 0;

}

function stepOne(){
  //step one - lion display
  //determine update to facing:
  if(movedX > 0) facing = "right";
  else if (movedX < 0) facing = "left";
  
  if(facing === "left"){
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
  else{
    image(lionR, mouseX, mouseY);
  }
   
}