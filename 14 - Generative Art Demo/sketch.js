// Diagonal Line Generator
// Vlad Atamanchuk
// Oct 24, 2023
//
// 
//Global Variables

let spacing = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  grid();
  
}


function diagonalAscend(x,y,s){
  line(x-s/2, y+s/2, x+s/2, y-s/2);
  
}
function diagonalDecend(x,y,s){
  line(x-s/2, y-s/2, x+s/2, y+s/2);
}

function grid(){     //find all our x,y positions
  for(let x = 0; x < width; x+= spacing ){
    for(let y = 0; y <height; y+= spacing){
      let choice = Math.floor(random(3));
      if(choice === 0){
        diagonalAscend(x,y,spacing);
      }
      else if(choice === 1){
        diagonalDecend(x,y,spacing);
      }
      
    }
  }
}