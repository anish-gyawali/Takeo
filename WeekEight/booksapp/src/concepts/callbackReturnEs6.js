let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((item, index) => {
  return { item: item };
});

let newArr = arr.map((item, index) => item + 2);

let newArr = arr.map((item) => item + 2);

let newArr = arr.map((item, index) => ({ item: item }));

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 3, 6, 7];

let arr3 = [...arr1, ...arr2];
console.log(arr3);

let obj = { item: 1, name: 2, age: 3 };

const { item, name, ...rest } = obj;

console.log(item);
console.log(rest);
