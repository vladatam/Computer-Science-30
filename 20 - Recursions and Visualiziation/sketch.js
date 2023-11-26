// Recursions and Visualization 
// Vlad Atamanchuk
// Nov 22, 2023
//
// 


function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
  
  // noFill();
  
}

function draw() {
  randomSeed(1);
  background(255);
  fractalRec(width/2,height/2, height*0.5,0);
  //circles(width/2,height/2,height*0.5);
  //cantor(width*0.1, height*0.3, width*0.8, 9);
  //cCircle(width/2,height/2,width);
}


function fractalRec(x,y,sideLen,angle){
  
  rectMode(CENTER);
  if(sideLen >10){
    push();
    translate(x,y);
    fill(random(255),random(255),random(255));
    rotate(radians(angle+frameCount));
    square(0,0,sideLen);
    pop();



    //recursive calls
    fractalRec(x-sideLen/2,y-sideLen/2, sideLen/2, angle + 15);
    fractalRec(x+sideLen/2,y-sideLen/2, sideLen/2, angle + 15);
    fractalRec(x-sideLen/2,y+sideLen/2, sideLen/2, angle + 15);
    fractalRec(x+sideLen/2,y+sideLen/2, sideLen/2, angle + 15);
  }

}



function circles(x,y,d){
  if(d > 2){
    circle(x,y,d);
    //recursive calls(s)
    circles(x-d/2, y, d/2);
    circles(x+d/2, y, d/2);
    circles(x, y + d/2 , d/2);

  }
  //Base case
}


function cantor(x,y,len, depth){
  if(depth > 1){
    line(x,y, x+len, y);
    rect(x,y,len, 10);
    cantor(x,y+20,len/3,depth-1);
    cantor(x+len*2/3, y+20, len/3, depth-1);
  
  }

}


function cCircle(x,y,d){
  if (d > 10){
    //do some work and recurse
    circle(x,y,d);
    let newD = map(mouseX,0,width,1.01,1.5);
    cCircle(x,y,d/newD);
  }
  //if false function ends(base case)
}