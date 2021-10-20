// "use strict";

// var hasDriverLicense = false;
// var passTest = true;

// if (passTest) var ticket = (hasDriverLicense = true);
// console.log(ticket);

// //function declaration
// function processJuice(apples, strawbarry) {
//   const juice = `i made a juice of ${apples} apples  and ${strawbarry} strawbarries Enjoy the taste.`;
//   console.log(juice);
//   return juice;
// }
// console.log(processJuice(5, 3)); //retrieving your value which function holds
// const value = processJuice(4, 5); //same

// // functio expression
// // you cannot call a function before defining instanceof.

// // const age1 = function (birthYear) {
// //   return 2020 - birthYear;
// // };
// const calcAge = age1(2001);
// console.log(calcAge);

function calAge2(gx, player1, ...player2) {
  console.log(`gx:  ${gx}`);
  console.log(`player1:  ${player1}`);
  console.log(`player2: ${player2}`);
}
calAge2(89, 97, 89, 98, 34, 31);

// //ARROW FUNCTIONS
// const age1 = (birthYear) => 2020 - birthYear;
// const age3 = age1(1991);

// console.log(age3);
