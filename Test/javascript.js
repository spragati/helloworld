// const favourite = Number(prompt("what your name?"));

// console.log(typeof favourite);
// if (favourite === 23) console.log("I am convertable");
// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("YES TODAY IS MONDAY");
// }

// var bill = 430;
// var tipOne = 0.15;
// var tipTwo = 0.2;
// var tip = bill >= 50 && bill <= 300 ? bill * tipOne : bill * tipTwo;

// console.log(tip);
// console.log(bill, tip, (total = bill + tip));

// challenge on functions

//ARROW FUNCTION

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// console.log(calcAverage(2, 3, 4));

// function checkWinner(avgDolphins, avgKoalins) {
//   let scoreD = calcAverage(44, 23, 71);
//   let scoreK = calcAverage(65, 54, 41);
//   console.log(scoreD, scoreK);

//   if (avgDolphins >= 2 * avgKoalins) {
//     console.log("dolphins wins");
//   } else if (avgKoalins >= 2 * avgDolphins) {
//     console.log("koalins wins");
//   } else {
//     console.log("no one wins");
//   }

//   console.log(`dolphins avgscore:${scoreD},koalins avgscore:${scoreK}`);
// }
// checkWinner(scoreD, scoreK);

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};
const variable = calcAverage(13, 14, 15);
console.log(variable);

function checkWinner() {
  const scoreD = calcAverage(44, 23, 71);
  const scoreK = calcAverage(655, 54, 41);
  console.log(scoreD, scoreK);
  if (scoreD >= 2 * scoreK) {
    console.log("dolphins wins");
  } else if (scoreK >= 2 * scoreD) {
    console.log("koalins wins");
  } else {
    console.log("no one wins");
  }
  console.log(`dolphins avgscore:${scoreD},koalins avgscore: ${scoreK}`);
}
checkWinner();
