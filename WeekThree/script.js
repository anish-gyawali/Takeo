//First Lecture

//destructuring
const arr = [["anish"], ["batman"]];

const [first, second] = arr;
console.log(first);

const obj = {
  a: "anish",
  b: "batman",
};
const { a: firstObject, b: secondObject } = obj;
console.log(first);

// const obj = {
//   a: 1,
//   b: {
//     c: 6,
//     d: 7,
//   },
// };
// const {
//   b: { c, d, e = 1 },
// } = obj;

// console.log(c, d, e);

//spread operators
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(...array);

//rest parameter
const array1 = [1, 2, 3, 4, 5, 6, 7];
const [arrayWithRest, ...other] = [1, 2, 3, 4, 5, 6, 7];

const arrayNumber = [1, 2, 3, 4, 5, 6, 7];
let { 0: a, [arrayNumber.length - 1]: b } = arrayNumber;
console.log(a, b);
console.log(other);

//spread operators --> array to regular (object...)
//rest parameter --> regular to array (...object) pack unpack pack unpack

function printArray(...a) {
  //print in array format
  console.log(a);

  //print in regualr format
  console.log(...a);
}
printArray(1, 2, 3, 4);

//short Circuting
console.log(true || false);
console.log(true && false);

var one = 1;
var two = 2;
var three = 2;
// if any one condition is true then it will say true
if (one == two || two === three) {
  console.log("it is true");
}

// if any condition is not true then all the condition is false
if (one == two && two === three) {
  console.log("it is true");
} else {
  console.log("this is false");
}

//here both the condition is true so it is true
if (two == two && two === three) {
  console.log("it is true");
} else {
  console.log("this is false");
}

