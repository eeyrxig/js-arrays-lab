// Question 1
function average(numbers) {
  // Write your code here
  for(let i = 1; i < numbers.length; i++) {
  const sum = sum + i;// sum += i
  let mean =  sum / numbers.length;
  return mean;
  }
}
// Question 2
function combineArrays(array1, array2) {
  // Write your code here
  let newArray = [];
  newArray.push(array1, array2);
  return newArray;
}

// Question 3
function arrayPlusArray() {
  // Write your code here
}

// Question 4
function abbrevName() {
  //Write your code here
}

// Question 5
function makeTitle(str) {
  const newStr = str.split(" ") + str.charAt(0)  + str.toUpperCase(0) + str.toString(); 
  return newStr;
}


// Question 6
function gimme() {
  // Write your code here
}

// Do NOT touch or write anything below this line
module.exports = {
  average,
  combineArrays,
  arrayPlusArray,
  abbrevName,
  makeTitle,
  gimme
};
