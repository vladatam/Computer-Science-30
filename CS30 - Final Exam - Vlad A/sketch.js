// CS30 - Final Programming Challenge
// Complete this comment header - - - (it's being graded!)
// Jan 25, 2024
// Vlad Atamanchuk  
// Final Exam - building a fox animation game 
//

//variable declarations - included for convenience, but you don't have to use these.
//                        feel free to handle this in a different way if you prefer.

let staticImages = [];      //array to hold 1 image for each direction -> should use this to start  
let animationImagesLeft = [];   //array to hold all 8 images in left direction
let animationImagesRight = [];   //array to hold all 8 images in right direction
let animationImagesUp = [];   //array to hold all 8 images in up direction
let animationImagesDown = [];   //array to hold all 8 images in down direction

//User Fox 
let curArr; //Current Array
let fox; 
let pepsi; //Variable to see if pepsi is active(true/false)
let on; //Varible to toggle pepsi off/on
let moving; //Variable to see if fox is currently moving
let staticIndex =0; //Index to control static array

//Computer Foxes
let directions = ["up", "down", "left", "right"]; //Array to randomly choose a direction
let dir; //Current direction
let dirArr; //Variable to store current animations array. 
let foxes = []; //Array to store computer controlled foxes.


function preload(){
  loadStatic();     //defined at bottom
  loadAnimation();  //also defined at bottom
}

function loadStatic(){
  staticImages.push(loadImage("/assets/up1.png"));   //0 - up
  staticImages.push(loadImage("/assets/down1.png"));   //1 - down
  staticImages.push(loadImage("/assets/left1.png"));   //2 - left
  staticImages.push(loadImage("/assets/right1.png"));   //3 - right
}

function loadAnimation(){
  for(let i = 1; i <= 8; i++){  //LEFT
    animationImagesLeft.push(loadImage("/assets/left" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //RIGHT
    animationImagesRight.push(loadImage("/assets/right" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //UP
    animationImagesUp.push(loadImage("/assets/up" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //DOWN
    animationImagesDown.push(loadImage("/assets/down" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER); 
  fox = new Fox(width/2,height/2); //Create user fox in the middle of the screen. 
  for(let i = 0; i<10; i++){ //Create 10 computer foxes at random places. 
    foxes.push(new ComputerFox(random(width),random(height)));
  }
  
}

function draw() {
  background(220);
  //User Controlled Fox - Call functions for User
  fox.move();
  fox.display();
  fox.pepsi();

  //Computer Controlled Foxes - Call functions for computer foxes
  for(let i =1; i<foxes.length; i++){
    foxes[i].randomWalker();
    foxes[i].display();
  }
}


class Fox {

  constructor(x,y){
    this.x = x, this.y=y;
    curArr = staticImages; //Set current animations to staticImages array. 
    this.xSize = 50; this.ySize = 50; //Control size. 
    pepsi = false; 
    this.currentFrame = 0; 
    this.speed = 5;
  }

  move(){
    //Checks to see if WASD is clicked and move accordingly up, keft, down, right 
      if(keyIsPressed){ 
        moving = true; 
      if(key === "w"){ //UP
        this.y -= this.speed; //Moves the fox
        curArr = animationImagesUp; //Sets the animations array to the current direction. 
        staticIndex =0; 
      }
      if(key === "s"){ //Down
        this.y += this.speed;
        curArr = animationImagesDown;
        staticIndex =1;
      }
      if(key ==="a"){ //Left
        this.x -= this.speed;
        curArr = animationImagesLeft;
        staticIndex =2;
      }
      if(key ==="d"){ //Right
        this.x += this.speed; 
        curArr = animationImagesRight;
        staticIndex =3;
      }   
    }
    else{
      moving = false;
    }
}
   
  sizeShift(){ 
    //Increases or decrease size when mouse is clicked depending if above or below the half of the screen.
    if(mousePressed){
      if(mouseY < height/2){ 
        //Check to see where mouse Y value is;
        this.xSize +=10; //Increase sizes accordingly
        this.ySize +=10;
        if(this.xSize > 200) this.xSize = 200, this.ySize = 200; //Sets maximum size
        print('LARGE');
      } 
      if(mouseY > height/2){
        this.xSize -=10; //Decrease sizes accordingly 
        this.ySize -=10;
        if(this.xSize < 10) this.xSize = 10, this.ySize = 10; //Sets minimum size
      }
    }
  }

  display(){    
    if(frameCount % 5 === 0){ //Animate fox every 5 frames. 
      this.currentFrame++
    }
    if(this.currentFrame > curArr.length-1){ //Ensures to not go over the array length.
      this.currentFrame = 0;
    }
    if(moving){ //If fox is currently moving with loop through animations
      image(curArr[this.currentFrame], this.x, this.y, this.xSize, this.ySize);
    }
    else{ //If fox is not moving will display last inputed direction. 
      image(staticImages[staticIndex], this.x, this.y, this.xSize, this.ySize)
    }
  
  }

  pepsi(){
    //Makes fox go crazyyyy. Moves fox in random directions, and changes size randomly as well as colour. 
    if(pepsi){
      this.x += random(5);
      this.y += random(5);  
      this.xSize = random(200);
      this.ySize = random(200);
      tint(random(255), random(255), random(255));
    }
    on = true; //Toggle switch for pepsi. 
  }

  reset(){
    //Resets fox to middle of screen and resets sizes and colour, turns off pepsi aswell. 
    this.x = width/2, this.y= height/2;
    curArr = staticImages;
    this.xSize = 50; this.ySize = 50; 
    noTint();
    pepsi =false; 
  }
  
}

class ComputerFox {
  //Computer controlled, fox. 
  //Most methods remain the same, with slight changes.  
  constructor(x,y){
    this.x = x, this.y=y;
    this.currentFrame = 0; 
    this.speed = random(10);
    dirArr = staticImages;
  }

  display(){    
    if(frameCount % 5 === 0){
      this.currentFrame++
    }
    if(this.currentFrame > curArr.length-1){
      this.currentFrame = 0;
    } 
    image(dirArr[this.currentFrame], this.x, this.y, this.xSize, this.ySize);
  }

  //IN PROGRESS--------------- didn't have enough time, was somewhat close though. 
  randomWalker(){
    //Randomly selects a direction.
    if(frameCount % 40 ===0){
      dir = random(directions);
    }
    if(dir === "up"){ //UP
      this.y -= this.speed; 
      dirArr = animationImagesUp;
      staticIndex =0;
    }
    if(key === "down"){ //Down
      this.y += this.speed;
      dirArr = animationImagesDown;
      staticIndex =1;
    }
    if(key ==="left"){ //Left
      this.x -= this.speed;
      dirArr = animationImagesLeft;
      staticIndex =2;
    }
    if(key ==="right"){ //Right
      this.x += this.speed; 
      dirArr = animationImagesRight;
      staticIndex =3;
    }
  }
   
}

function mousePressed(){
    fox.sizeShift();
}

function keyPressed(){
  if(key === "p"){ 
    //Toggle pepsi on/off when 'P' is pressed. 
    if(pepsi === false){
      pepsi = true; 
      on = false;
    }
    if(on === true){ 
      pepsi = false; 
      fox.reset();
    }
  }
  if(key === "r"){
    fox.reset();
  } 
}

//Thank you Mr.Scott for an amazing semester hope you have a great remainder of your year!










