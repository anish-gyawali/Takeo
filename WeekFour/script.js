console.log("Monday...");

function russianRoulette(n) {
  let num = n - 1;
  return function () {
    if (num == 1) {
      console.log("click");
    } else if (num === 2) {
      console.log("bang");
    } else {
      console.log("reload to play again");
    }
  };
}
russianRoulette(2)();

const oneword = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

// const upperFirstword = function (str) {
//   return str.split(" ");
// };

const upperFirstword = function (str) {
  const [one, ...other] = str.split(" ");
  return [one.toUpperCase(), ...other].join(" ");
};

const result = upperFirstword("anish is my name");
console.log(result);

//callback function
const oneword1 = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const transformer = function (a) {
  console.log("hey", a);
  consple.log(a("hello there"));
};
transformer(oneword1);

