/*const ageJonas = 2039;
console.log(ageJonas);

let x = 10;
console.log(10);
*/
// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIM = massMark / heightMark ** 2;

// console.log(BMIM);

// const BMIJ = massJohn / heightJohn ** 2;

// console.log(BMIJ);

// const markHigherBMI = BMIM > BMIJ;
// console.log(markHigherBMI);

// console.log(`i am \n good
// take care`);

// if (BMIM > BMIJ) {
//   console.log("Mark BMI is higher than john");
// } else {
//   console.log("john BMI is higher than mark");
// }

const Jonas = {
  firstName: "Jonas",
  lastName: "Nick",
  age: 2037 - 1997,
  friends: ["Michael", "Hailey", "Justin"],
};
console.log(Jonas);
console.log(Jonas.lastName);
console.log(Jonas["lastName"]);

const interestedIn = prompt("What do you want to know about jonas:");
console.log(Jonas[interestedIn]);

Jonas.location = "Panaji";
Jonas["twitter"] = "@jonas@Nick123";

console.log(Jonas);

for (rep = 1; rep <= 10; rep++) {
  console.log(`${rep}`);
}
