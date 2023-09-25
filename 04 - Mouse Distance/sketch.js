// Mouse Distance
// Vlad Atamanchuk
// 20 September 2023 
//
// 

//Global Variable
let nodeColors = [ ];
let colorIndex = 2; //state variable - 0,1,2,..... nodeColors.length-1 -
//needs to be a valid syntax so cant be 4 as there are 3 strings


function setup() {
  createCanvas(windowWidth, windowHeight);
  initColors();
}

function draw() {
  background(220);
  renderNodes();
  segmentDistance(mouseX,mouseY,);
}

function initColors(){
  //populate our array of colors
  nodeColors.push(color("red"));
  nodeColors.push(color(200,200,100));
  nodeColors.push(color("cornflowerblue"));
}

function renderNodes(){
  //Simple function ; no inputs, no return
  // draw two "nodes" as circles, and connect
  // them with a line
 
  stroke(nodeColors[colorIndex]);
  fill(nodeColors[colorIndex]);
  circle(width/2,height/2,20);
  circle(mouseX, mouseY,20);
  line(width/2,height/2,mouseX,mouseY);
  //display distance
  let d = segmentDistance(mouseX,mouseY,width/2,height/2);
  textAlign(CENTER);
  text(round(d,1),width/2,height/2+50);
}

function segmentDistance(x1,y1,x2,y2){
  //Calcualte the distance between 2 points
  //and return the result
  let a = Math.abs(x1 - x2);
  let b = Math.abs(y1 - y2); 
  let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)); //power function or can do a*a + b*b
  return c;

}

function mouseWheel(event){
  //check for mouse wheel event
  //negative goes up, positve goes down.
  print(event.delta);
  if(event.delta < 0){
    colorIndex ++;
    print(colorIndex);
    if(colorIndex >= nodeColors.length){
      colorIndex = 0;
    }
  }
  else if(event.delta > 0){
    colorIndex --;
    print(colorIndex);
    if (colorIndex < nodeColors.length-1){
      colorIndex *= -1;
    }
  }
}
