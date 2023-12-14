
let balls;
let ground, wall, wall2;
let pictures = [];
let picture; 
let currentImage = 0; 

let diameter = 40; 



function preload(){
  //picture = loadImage("assets/Diamond.png");
  //= loadImage("assets/Strawberry.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke("white");

  world.gravity.y = 2;

  balls = new Group();

  ground = createSprite(width / 2, height - 10, width, 20);
  ground.static = true;
  ground.color = "white";

  wall = createSprite(0, 0, 40, height*2);
  wall.static = true;
  wall.color = "white";

  wall2 = createSprite(width, 0, 40, height*2);
  wall2.static = true;
  wall2.color = "white";
  }

function draw() {
  background(200);
  overlay();
  drawSprites();
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

function mergeBalls(ball){
  for(let i = 0; i<balls.length; i++){
    if(balls[i].collides(balls)){
      balls[i+1].diameter += balls[i].diameter/2;
      balls[i+1].position.x = balls[i].position.x;
      balls[i+1].position.y = balls[i].position.y;
      balls[i+1].colour = "blue";
      balls[i].remove();
    }
  }
  
}


function overlay(){
  circle(mouseX, 100, 50);
  line(mouseX, 100, mouseX, height);
}


