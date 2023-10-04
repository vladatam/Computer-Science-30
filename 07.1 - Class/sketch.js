// Create your Class
// Vlad Atamanchuk
// Oct 2, 2023
//

//Global Variables 
let racers =[]; 
const NUM_RACERS = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < NUM_RACERS; i++){
    racers.push(new RoundRacer(100,"red"));
  }
}

function draw() {
  background(220);
  racers.display();
  racers.move();
  
}

class RoundRacer{
  constructor(y,c){
    this.c = color(c);  
    this.y = y;
    this.x = 0;
    this.speed = random(3,15);
  }
  display(){      //render racer
    circle(this.x,this.y,20);
    fill(this.c);
  }
 
  move(){        //move racer
    this.x += this.speed;
    if(this.x === width){
      this.x = 0;
    }
  }

  
}