
let balls;
let ground, wall, wall2;
let pictures = [];
let picture; 
let currentImage = 0; 

let diameter = 40; 

let borders; 


function preload(){
  //picture = loadImage("assets/Diamond.png");
  //= loadImage("assets/Strawberry.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke("white");

  world.gravity.y = 2;


  balls = new Group();

  balls.colour = "green";

  borders = new Group();
  borders.add = new borders.Sprite(width / 2, height - 10, width, 20); //Floor
  borders.add = new borders.Sprite(0, 0, 40, height*2); //Left Wall 
  borders.add = new borders.Sprite(width, 0, 40, height*2); //Right Wall
  borders.static = true;
  borders.color = "white";

  borders.add = new borders.Sprite(0, 100, width*2, 1);
  borders[3].static = false;
}

function draw() {
  background(200);
  overlay();
  borders.draw();
  balls.draw();
  for(let i=0; i<balls.length; i++){
    mergeBalls(balls[i]);
  }
}

function mousePressed(){
  let ball = new balls.Sprite(mouseX, 100, 20, 20);
  //ball.img = picture;
  ball.d = 50;
  ball.velocity.y = 2;
  ball.rotation = 2;
  ball.shapeColor = "red";
  print(balls);
 
}

function mergeBalls(){
  for(let i = 0; i<balls.length-1; i++){
    if(balls[i].collides(balls[i+1])){
      balls[i+1].diameter += balls[i].diameter/3;
      balls[i+1].position.x = balls[i].position.x;
      balls[i+1].position.y = balls[i].position.y;
      balls[i+1].color = "blue";
      
      balls[i].remove();
    }
    
    
  
  
  }

}

function overlay(){
  circle(mouseX, 100, 50);
  line(mouseX, 100, mouseX, height);
}


