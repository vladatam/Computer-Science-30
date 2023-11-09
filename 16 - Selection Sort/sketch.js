// Selection Sort Implementation
// Vlad Atamanchuk
// Nov 3, 2023
//
// Writing our own sorting algorithm or method. 

let values = [];
const ARRAY_SIZE = 20;

function setup() {
  noCanvas(); populateArray(); print(values);
  selectionSort(); print(values);

}


function populateArray(){
  //loop to fill our arrat with random numbers
  for(let i =0; i<ARRAY_SIZE; i++){
    values.push(floor(random(int(1000))));

  }
  //built in sort function values.sort();
}

function selectionSort(){
  //for each index, find smalles remaining value to the right
  //and swap if it is lower than the index. Sorting algorithm.
  
  for(let index =0; index < values.length-1; index++){
    let min = values[index];
    let minLoc = index; 
    for(let searchIndex = index+1; searchIndex < values.length; searchIndex++){
      let cur = values[searchIndex];
      if(cur < min){
        min = cur;
        minLoc = searchIndex;
      }
    }
    //swap the items at index with item at minLoc
    let temp = values[index];
    values[index] = values[minLoc];
    values[minLoc] = temp;

  }

  
}