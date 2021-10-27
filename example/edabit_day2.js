
// reverse and join a string
function reverseAndNot(i) {
  const str = i.toString().split("").reverse().join("");
  return str + i;
}
console.log(reverseAndNot(123)); // 321123



// Find the extension of a file


const   



//Get CUrrent Date



// Upvote and downvote

function getVoteCount(votes) {

const countVotes
upvotes:13;
downvotes:13;

}console.log(getVoteCount(13,16)


function calculateLosses(obj) {
  const total = Object.values(obj).reduce((a, b) => {
    return a + b;
  }, 0);
  return total === 0 ? "Lucky you!" : total;
}
console.log(
  calculateLosses({
    tv: 30,
    skate: 20,
    stereo: 50,
  })
); //, 100)
console.log(
  calculateLosses({
    ring: 30000,
    painting: 20000,
    bust: 1,
  })
); //, 50001)
console.log(
  calculateLosses({
    chair: 3500,
  })
); //, 3500)
console.log(calculateLosses({})); //, "Lucky you!")
// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
function freeShipping(order) {
  const total = Object.values(order).reduce((a, b) => {
    return a + b;
  }, 0);
  return total >= 50 ? true : false;
  // console.log(total);
}
console.log(freeShipping({ Shampoo: 5.99, "Rubber Ducks": 15.99 })); //, false)
console.log(freeShipping({ "Flatscreen TV": 399.99 })); //, true)
console.log(
  freeShipping({ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 })
); //, true)
console.log(freeShipping({ Scrabble: 12.32, Jenga: 5.55, Clue: 20.0 })); //, false)
console.log(
  freeShipping({
    "Elephant Plushie": 40.55,
    "Octopus Plushie": 20.33,
    "Spongebob Plushie": 20.0,
  })
); //, true)
//
class Name {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.fullname = fname + " " + lname;
    this.initials = fname[0] + " " + lname[0];
  }
  firstName() {
    const char = this.fname;
    return char.charAt(0).toUpperCase() + char.slice(1);
  }
  lastName() {
    const char = this.lname;
    return char.charAt(0).toUpperCase() + char.slice(1);
  }
  fullName() {
    const first = this.fname;
    const last = this.lname;
    return `${first} ${last}`;
  }
  initials() {
    return `${this.fname[0].toUpperCase()} ${this.lname[0].toUpperCase()}`;
  }
}
const a = new Name("Henry", "Ferrao");
console.log(a.fname); // "John")
console.log(a.lname); //, "Smith")
console.log(a.fullname); //, "John Smith")
console.log(a.initials); //, "J.S")
const a1 = new Name("John", "Smith");
console.log(a1.fname); // "John")
console.log(a1.lname); //, "Smith")
console.log(a1.fullname); //, "John Smith")
console.log(a1.initials); //, "J.S")
//Check If objOne Is Equal to objTwo
function isEqual(objOne, objTwo) {
  // console.log(objOne);
  return JSON.stringify(objOne) === JSON.stringify(objTwo) ? true : false;
}
const objOne = {
  name: "Benny",
  phone: "3325558745",
  email: "benny@edabit.com",
};
const objTwo = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com",
};
console.log(isEqual(objOne, objTwo)); //, false);
const objOne2 = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com",
};
const objTwo2 = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com",
};
console.log(isEqual(objOne2, objTwo2)); //, true);
const objOne3 = {
  names: ["Tom", "Joe", "David"],
  fruitIds: {
    orangeId: 77634,
    appleId: 74323,
    bananaId: 09487,
  },
};
const objTwo3 = {
  names: ["Tom", "Joe", "Steve"],
  fruitIds: {
    orangeId: 77634,
    appleId: 74323,
    bananaId: 65970,
  },
};
console.log(isEqual(objOne3, objTwo3)); //, false);
const objOne4 = {
  foo: {
    bar: {
      baz: true,
    },
    baz: {
      arr: [1, 2, 3],
    },
  },
};
const objTwo4 = {
  foo: {
    bar: {
      baz: true,
    },
    baz: {
      arr: [3, 2, 1],
    },
  },
};
console.log(isEqual(objOne4, objTwo4)); //, false, "The foo.bar.baz array has changed.");
const objOne5 = {
  foo: {
    bar: {
      baz: "edabit.com",
    },
    baz: {
      userIds: {
        jason: 76397,
        steve: 73073,
        joe: 21076,
      },
    },
  },
};
const objTwo5 = {
  foo: {
    baz: {
      userIds: {
        jason: 76397,
        steve: 73073,
        joe: 21076,
      },
    },
    bar: {
      baz: "edabit.com",
    },
  },
};
console.log(isEqual(objOne5, objTwo5)); //, false, "The order of the object keys has changed.");
const objOne6 = {
  foo: {
    bar: {
      baz: "edabit.com",
    },
    baz: {
      userIds: {
        jason: 76397,
        steve: 73073,
        joe: 21076,
      },
    },
  },
};
const objTwo6 = {
  foo: {
    bar: {
      baz: "edabit.com",
    },
    baz: {
      userIds: {
        jason: 76397,
        steve: 73073,
        joe: 21076,
      },
    },
  },
};
console.log(isEqual(objOne6, objTwo6)); //, true);
//Burglary Series (03): Is It Gone?
function findIt(obj, name) {
  return obj.hasOwnProperty(name) ? `${name} is gone ` : `${name} is here`;
  // console.log(obj);
  // console.log(name);
}
console.log(findIt({}, "rambo")); //,"Rambo is here!")
console.log(findIt({}, "heman")); //,"Heman is here!")
console.log(
  findIt(
    {
      tv: 30,
      stereo: 50,
    },
    "rocky"
  )
); //,"Rocky is here!")
console.log(
  findIt(
    {
      tv: 30,
      stereo: 50,
    },
    "spiderman"
  )
); //,"Spiderman is here!")
console.log(
  findIt(
    {
      tv: 30,
      stereo: 50,
      julius: 100,
    },
    "julius"
  )
); //,"Julius is gone...")
console.log(
  findIt(
    {
      tv: 30,
      stereo: 50,
      batman: 200,
    },
    "batman"
  )
); //,"Batman is gone...")
//Invert Keys and Values
function invert(o) {
  // console.log(o);
  const newObj = {};
  Object.keys(o).forEach((key) => {
    // console.log(key);
    newObj[o[key]] = key;
  });
  return newObj;
}
console.log(invert({ a: 1, b: 2, c: 3 })); //, { 1: "a", 2: "b", 3: "c" });
console.log(invert({ z: "q", w: "f" })); //, { q: "z", f: "w" });
console.log(invert({ zebra: "koala", horse: "camel" })); //, {
// koala: "zebra",
// camel: "horse",
// });

//



const objOne2 = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com",
};
const objTwo2 = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com",
};
console.log(isEqual(obj1, obj2)); //, true);
const obj1 = {
  names: ["Tom", "Joe", "David"],
  fruitIds: {
    orangeId: 77634,
    appleId: 74323,
    bananaId: 09487,
  },
};
const obj2 = {
  names: ["Tom", "Joe", "Steve"],
  fruitIds: {
    orangeId: 77634,
    appleId: 74323,
    bananaId: 65970,
  },
};
console.log(isEqual(obj1, obj2)); //, false);
