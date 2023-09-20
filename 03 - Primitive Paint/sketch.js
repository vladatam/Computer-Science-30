// Primitive Paint Assingment 
// Vlad Atamancuk
// Sep 15, 2023
//
// Extra for Experts:
// -Designing a primitive painting program using P5 library and refrence.
let overlay;
let overlay2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width,height);
  overlay2 = createGraphics(width,height);
}

function draw() {
  background(220);
  reset();
  autoArt();
  drawRectangle();
  image(overlay,0,0);
  drawCircle();
  image(overlay,0,0);
  drawTriangle();
  image(overlay,0,0);
}

//Draw a rectangle at mouse position
function drawRectangle(){
  if(keyPressed){
    if (key === "a"){
      rect(mouseX-10,mouseY-10, 20, 20);
      if (mouseIsPressed){
        if (mouseButton === LEFT){
          overlay.rect(mouseX-10,mouseY-10, 20, 20);
          image(overlay,0,0);
        }
      }
    }
  }
}
//Draw a circle at mouse poistion
function drawCircle(){
  if(keyPressed){
    if (key ==="s"){
      circle(mouseX,mouseY,30);
      if (mouseIsPressed){
        if (mouseButton === LEFT){
          overlay.circle(mouseX, mouseY, 30);
          image(overlay,0,0);
        }
      }
  
    }
  }
    
}
//Draw a triangle 
function drawTriangle(){
  if(keyPressed){
    if (key ==="d"){
      triangle(mouseX,mouseY-20,mouseX-10,mouseY+10,mouseX+10,mouseY+10);
      if (mouseIsPressed){
        if (mouseButton === LEFT){
          overlay.triangle(mouseX,mouseY-20,mouseX-10,mouseY+10,mouseX+10,mouseY+10);
          image(overlay,0,0);
        }
      }
    }
  }
}
//Autonomous Art
let x = 0;
let y = 0;
function autoArt(){ 
  if (x=>0 ){
    x +=1;
    print(x);
    if (x >= width){
      x *= -1;
    }
  }
  overlay2.circle(x,100,random(0,100));
  overlay2.fill(random(0,255),random(0,255),random(0,255));
  image(overlay2,0,0);
}

function reset(){
  if(keyCode === 32){
    overlay.clear();
  }

}
//Check which inputs are pressed. 
function keyPressed(){
  print("key", key, "\tkeyCode", keyCode);  
}
function mousePressed(){
  print("mouse", mouseButton);
}
//Scroll Wheel to change colours. 
// function mouseWheel(event){
//   let colors = ["blue","red","green","purple","orange","yellow"];
//   if (event.delta < 0){
//     print(event.delta);
//     for(let count =0; colors.length -= 1;){
//       count ++;
//       print(count);
//       fill(colors[count]);
//       print(colors[count]);
//     }
//   }
// } 
//     for (let i = 0; i< colors.length; i ++){
//       overlay.fill(colors[i]);
//       i +=2;
//     } 
//   } 
//   if (event.delta > 0){
//     for (let i =colors.length-1; i>=0; i --){
//       overlay.fill(colors[i]);
//     } 
//   } 
//   print(event.delta);
//   return false;
// }