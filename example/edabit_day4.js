// Using && operator
// function and(a, b) {
//   if (a == true && b == false) result = true;

//   elseif(a == false && b == true);
//   result = true;

//   else(a == false && b == false);
//   result = false;

//   return result;
// }
// console.log(and(true, true));

// Equality check

function checkEquality(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(checkEquality(1, true));

// Boolean to string conversion

function boolToString(flag) {
  result = flag.toString();
  return result;
}
console.log(boolToString("true"));

// Return negative number

function returnNegative(n) {
  return -n;
}
console.log(returnNegative(14));

// Drinks allowed at a particular age

function shouldServeDrinks(age, onBreak) {
  if (age === 18 && onBreak === false) {
    return true;
  } else {
    return false;
  }
}
console.log(shouldServeDrinks(18, true));

//converting a regular function into a arrow function

// function add2(x) {
//   return x + 2;
// }

// function add3(x) {
//   return x + 3;
// }

// function add5(x) {
//   return x + 5;
// }

// function add7(x) {
//   return x + 7;
// }

// function add11(x) {
//   return x + 11;
// }
// console.log(add2(3));

add2 = () => {
  return x + 2;
};

add3 = (x) => {
  return x + 3;
};

add5 = (x) => {
  return x + 5;
};
console.log(add5(6));

//Finding the Nth Tetrahedral Number
// Formula
// (n * (n + 1)) / 2;

function tetra(n) {
  return (n * (n + 1) * (n + 2)) / 6;
}
console.log(tetra(5));

// //Finding the factors of an number
// const num = prompt("Enter a positive number: ");

// console.log(`The factors of ${num} is:`);
// // looping through 1 to num
// for (let i = 1; i <= num; i++) {
//   // check if number is a factor
//   if (num % i == 0) {
//     console.log(i);
//   }
// }

// Mean of all digits

function mean(num) {
  //Work out the sum of the numbers in
  //our array
  var totalSum = 0;
  for (var i in num) {
    totalSum += num[i];
  }

  //Work out how many numbers are
  //in our array.
  var numsCnt = num.length;

  //Finally, get the mean
  var mean = totalSum / numsCnt;
  return mean;
}
console.log(mean(123));
