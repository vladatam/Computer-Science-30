// Major Capstone Project -- The Fruit Game
// Vlad Atamanchuk
// Dec 6, 2023 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variables
let balls = [];
let catcher;
let ground, wall, wall2;
let picture;

function preload(){
  picture = loadImage("assets/Diamond.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke("white");

  world.gravity.y = 2;

  ground = createSprite(width / 2, height - 10, width, 20);
  ground.immovable = true;
  ground.color = "white";

  wall = createSprite(0, 0, 40, height*2);
  wall.immovable = true;
  wall.color = "white";

  wall2 = createSprite(width, 0, 40, height*2);
  wall2.immovable = true;
  wall2.color = "white";
  
  catcher = createSprite(width / 2, height - 40, 80, 20);
  catcher.shapeColor = color(255);
  catcher.collider = "k";
}

function draw() {
  background(200);

  if (mouse.pressed()) {
    let ball = createSprite(mouseX, mouseY, 20, 20);
    ball.img = picture;
    ball.scale = 0.5;
    ball.d = 200;
    ball.velocity.y = 5;
    ball.rotation = 2;
    ball.shapeColor = color(random(255), random(255), random(255));
    balls.push(ball);
  }

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.collide(ground)) {
      ball.velocity.y = 0;
    }

    if (catcher.overlap(ball)) {
      ball.remove();
    }
  }

  if(kb.pressing(LEFT_ARROW)) {
    catcher.position.x -= 5;
  } else if (kb.pressing(RIGHT_ARROW)) {
    catcher.position.x += 5;
  }

  drawSprites();
}
