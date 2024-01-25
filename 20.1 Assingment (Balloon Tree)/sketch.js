// Ballon Tree Assingment
// Vlad Atamanchuk
// Nox 24, 2023
//
// Balloon Tree assingment. 


let scale = 15;

let balloons =0; //Keep track of the balloon depths. 

function setup() {
  createCanvas(500, 500);
}

function draw() {
  randomSeed(1); //Keeps the same set of numbers for each run attept, instead of generating new sets each frame. 
  background(255);
  drawTree(width/2, height*.8, 90, 6);
}
function drawLine( x1, y1, x2, y2, depth) {
//draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}
function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {

    //varied branch thickness 
    strokeWeight(depth*0.5);

    let x2 = x1 + (cos(radians(angle))*depth*scale); //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale); //using trigratios. Get shorter based on depth
    //connect points using lines.
    drawLine(x1, y1, x2, y2, depth);

    //for a 2-branch tree:
    drawTree(x2, y2, angle-map(mouseX,0,width,5,30), depth-0.9);
    drawTree(x2, y2, angle+map(mouseX,0,width,5,30), depth-0.9);

    //for a 3-branch tree
    drawTree(x2, y2, angle, depth-0.9);

    //draw the baloons
    drawLeaf(x2,y2,depth-0.9);   
  }
} 

function drawLeaf(x,y,depth){
//draw the balloons at the current depth
  push(); 
  noStroke();
  depth -= balloons; //draw the leafs based on user input. 
  if(depth < 5){ 
    fill(random(255), random(255), random(255)); //random fill 
    circle(x,y,random(depth+2*15)); //draw the leaves
  }
  pop();
}

function keyPressed(){
  if(keyCode === 88){ // press x to add balloons. 
    balloons ++;
    if(balloons>1){balloons = 1;} //Max balloon level. 
  }
  if(keyCode === 90){ // press z to subtract baloons. 
    balloons --;
    if(balloons<-6){balloons = -6;} //Min balloon level. 
  }
  print(balloons);
  return balloons; 
}