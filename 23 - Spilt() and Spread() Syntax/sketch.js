// Split() method and spread syntax
// Vlad Atamanchuk
// Nov 28, 2023

//split() → takes a string and returns 

let grid, img, rows, cols; 
let colorMap;


function preload(){
  img = loadStrings("assets/colorImage.txt");
}


function setup(){
 //img will hold an array of strings, lengths of the first string,
 // corresponds with the number of cols,
 
 cols = img[0].length;
 rows = img.length;
 createCanvas(windowWidth, windowHeight);

 //put textfiles in 2D array. 

 grid = [];
 
 for(let i = 0; i < rows; i++){
  grid.push([...img[i]]);
 }

 //create a Map(), to keep track of colours. 

 colorMap = new Map([
  ["b", "black"],
  ["w", "white"],
  ["r","brown"],
  ["p", "blue"],
  ["l", "peru"]

]);


}


function renderGrid(){
  //calculate the grid size before drawing. 
  let cellWidth = width/cols;
  let cellHeight = height/rows;

  //visit each position in the 2D array and draw a grid;
  for(let x = 0; x < cols; x++){
    for(let y = 0; y < rows; y++){
      let currentKey = grid[y][x];
      fill(colorMap.get(currentKey));
      rect(x*cellWidth,y*cellHeight,cellWidth*cellHeight);
    }
  }

}

function windowResized(){
  createCanvas(windowWidth, windowHeight);

}

function draw(){
  renderGrid();
}


// function part1(){
//   print("SPLIT INTO WORDS;  ");
//   let stringSplit = textFile[0].split(" ");
//   print(stringSplit);

//   print("SPLIT INTO CHARACTERS");
//   let stringSplit2 = textFile[1].split("");
//   print(stringSplit2);

//   print("SPREAD SYNTAX FOR CHARACTERS");
//   let stringSpread = [...textFile[1]];
//   print(stringSpread);
// }