//Pair Management
function makePair(num1, num2) {
  let arr = [];
  arr.push(num1, num2);
  console.log(arr);
}
console.log(makePair(1, 2));

//Reverse an array
// function reverse() {
//   arr = [1, 2, 3, 4];

//   arr.reverse();
//   console.log(arr);
// }
// console.log(reverse());

//Destructing an array

const myProgram = ["js", "php", "java", "javascript", "ruby"];

let [top1, top2, top3, top4, top5] = myProgram;
console.log("my fav program is :" + top2);

// /swap of an array with respect to positions
// function swap() {
//   arr = [1, 2, 3, 4, 5];

//   [arr[0], arr[4]] = [arr[4], arr[0]];
//   return arr;
// }
// console.log(swap());

// Program of swap without using third variable

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(`value : ${a} and ${b}`);

//comparing two arrays equal or not
var array1 = [4, 8, 9, 0, 6];

var array2 = [8, 6, 0, 9, 4];

// Returning the last  element of an array
//1
function getLastItem(arr) {
  // result = arr[3];
  let [, , , toplast] = arr;
  return toplast;
}
console.log(getLastItem([1, 2, 3, 4]));

//2  lips assing to arr[2]

const arr = ["eyes", "nose", "lips", "ears"];
var [, , lip2] = arr;
lip2;
console.log(lip2);

//N sided

function nSidedShape(n) {
  var array1 = [1, 2, 3, 4, 5];
  var array2 = ["circle", "semicircle", "triangle", "square", "polygon"];
  // console.log(nSidedShape(array2.indexOf(triangle)));

  var result = {};
  for (let i = 0; i < array1.length; i++) {
    result[array1[i]] = array2[i];
  }
  console.log(result);
}

console.log(array2);

//Can you write a javascript function for return value of a nested property like line2 ?

// Note: Your js function should work even when the json structure is changed.

// Hint: Create a js function that takes two arguments - (jsonObject, pathArray) In the above example,
// the pathArray could be ['user', 'personalInfo', 'Address', 'line2']. Leverage reduce() to implement the logic.
// //
// //

function project(jsonObject, pathArray) {
  var pathArray = ["Pragati", "Takecare", "srpf", "line2"];
  return line2;
}
console.log(project(jsonObject, pathArray));
