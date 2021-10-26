// Finding 7 in the array

function sevenEncouter() {
  let result = "There is no 7 in my result";
  let arr = [9, 7, 97, 34, 17];

  for (i = 0; i < arr.length; i++) {
    let arrayItemString = String(arr[i]);
    if (arrayItemString.includes(7)) {
      result = "boom";
    } else {
      return result;
    }
  }
}
console.log(sevenEncouter());

// Questions on Array

const arrayOfNumbers = [1, 2, 3, 4];
arrayOfNumbers.reduce(
  (accumulator, currentValue, index, array) => (array[index] = array[index] * 2)
);

console.log(arrayOfNumbers);

arrayOfLetters = ["a", "b", "c", "d", "e", "f"];
arrayOfLetters = [];
let anotherArrayOfLetters = arrayOfLetters;

console.log(anotherArrayOfLetters);

const [address1, address2, address3] = [
  "583, Margaret Street",
  "LOS ANGELES, CA",
  "USA",
];
console.log(
  "Address 1: " + address1,
  "Address 2: " + address2,
  "Address 3: " + address3
);

//Boolean to String  conversion
function boolToString(flag) {
  return (result = flag.toString());
  console.log(result);
}

console.log(boolToString(true)); // output = true

//Miserable Parody of a Calculator
function calculator(str) {
  let num = str.split("+");
  console.log(num);
  let sum = num.reduce(function (total, num) {
    return parseInt(total) + parseInt(num);
  });
  return sum;
}
console.log(calculator("24+3")); //output = 27

//Compare Strings with count of nos
function comp(str1, str2) {
  // let result = str1.compare(str2).count();
  // console.log(result);
  let result = 0;
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  const diff1 = arr1.filter((letter) => !arr2.includes(letter));
  const diff2 = arr2.filter((letter) => !arr1.includes(letter));

  result = diff1.length + diff2.length;
  if ((result = 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(comp("hell", "hello"));
output = false;

// Check if the string is Empty

function isEmpty(s) {
  if (!s || s.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmpty("a")); //output=false

// Length of a String
function length(str) {
  result = str.length;

  return result;
}
console.log(length("make")); // output= 4

//Converting an array to a string
function arrayToString(arr) {
  arr = [1, 2, 3, 4, 5];
  result = arr.toString();

  console.log(result);
}
arrayToString();

// validations

// fixing seven in the parameter passed to return true
function isSeven(x) {
  return x == 7 ? true : false;
}
console.log(isSeven(7));

//Check if the no is divisibe by 5

function divisibleByFive(n) {
  if (n % 5 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(divisibleByFive(25));

//Two Makes Ten
function makesTen(a, b) {
  if (a + b == 10 || a == 10 || b == 10) {
    return true;
  } else {
    return false;
  }
}
console.log(makesTen(9, 10));

//Extracting numbers from a string

function numbersFromString(num) {
  num = "hello i am pragati i am 24 years old i live in block 2 ,society 12";
  let reg = /\d+/g;

  let result = num.match(reg);

  console.log(result);
}
console.log(numbersFromString());
