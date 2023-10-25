// Generative Art - Colors Demo 
// Vlad Atamanchuk
// Oct 25, 2023
//



let rectWidth = 250; let rectHeight = 20;
let colors = ["#CD0003","#FC000F","#F78900","#B3C404","#94D15A"];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawColRGB(0); //column at 10% of the way across canvas
  drawColHSB(width*0.3); //40% of the way
  drawColCustom(width*0.6); //70% of the way

}

function drawColCustom(xPos){
  colorMode(RGB);
  let counter = 0;
  for(let y = 0; y<height; y+=rectHeight){
    //Option 1 cycle through palette
    fill(colors[counter % 5]);
    //Option 2 
    fill(colors[Math.floor(random(colors.length))]);

    rect(xPos, y, rectWidth, rectHeight);
    counter++;
  }
}

function drawColRGB(xPos){
  colorMode(RGB);
  for(let y = 0; y<height; y+=rectHeight){
    fill(random(255),random(255),random(255));
    rect(xPos, y, rectWidth, rectHeight);
  }
  
}

function drawColHSB(xPos){
  colorMode(HSB);
  for(let y = 0; y<height; y+=rectHeight){
    //fill = hue 0-360, saturation, brrightness
    fill(y/2.5%360,360,360);
    rect(xPos, y, rectWidth, rectHeight);
  }
}
