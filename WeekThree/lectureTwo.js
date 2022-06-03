//second lecture
//forEach, map

let arr = [1, 2, 4, 7, 9, 12];

function newArray(array) {
  let doubleArray = [];
  for (let i = 0; i < array.length; i++) {
    doubleArray[i] = array[i] * 2;
  }
  console.log(doubleArray);
}
newArray(arr);

function iterateArray(arr) {
  console.log(
    "Here we are getting the same array that we pass through iterateArray",
    arr
  );
  let i = 0;
  console.log(
    "lets find the length of array by arr.length, so array of length is",
    arr.length
  );

  //Now we will use while loop
  // while (i<3) it will go one by one

  while (i < arr.length) {
    //it will check
    //this is first loop -->  //(0 < 3)  console.log(arr[i]) the value of i=0 so console.log(arr[0]) and we know arr[0]=10 so it will print 10 and move to next line

    //(1 < 3)
    //(2 < 3)
    console.log(arr[i]);
    i++; // if we don't do i++ then the loop will always check (0 < 3) so we need to add one after one loop i+1 means i++
  }
}

//iterateArray is a function right ?
// we want to pass these number [10,20,30] to the function
iterateArray([10, 20, 30]);

//foreach works for array
//it takes callback function as parameter
//each and every element will be pass in callback parameter
//it will iterate this callback again and again for each element within the array
//foreach deosnot return anything
let array = [1, 2, 4, 7, 9, 12];
array.forEach((item) => {
  console.log(item);
});

//or

let array1 = [1, 2, 4, 7, 9, 12];
const fun = (item) => {
  console.log(item);
};
//with index
const funWithIndex = (item, index) => {
  console.log(item, index);
};
array1.forEach(funWithIndex);

//Array.map

// map will work for arrays
//it takes callback function as parameter
//each and every element will be pass in callback parameter,second callback parameter is index
//it will iterate this callback again and again for each element within the array
//map returns new array
//callback function must return something and that returned value will be pushed on to new array

let array2 = [1, 2, 4, 7, 9, 12];
// let x = array2.map((item, index) => {
//   return item * 2;
// });

//convert array to object
let x = array2.map((item, index) => {
  return { [index]: item };
});
console.log(x);

//find

// Find will work for arrays
//it takes callback function as parameter
//each and every element will be pass in callback parameter,second callback parameter is index
//it will iterate this callback again and again for each element within the array
//find returns matching element of orginal array
//callback function must return some condition

let array3 = [1, 2, 4, 7, 9, 12];
let findX = array3.find((item) => {
  return item == 2;
});
console.log(findX);

//array of object
let array4 = [
  { name: "a", value: 10 },
  { name: "b", value: 20 },
  { name: "c", value: 30 },
  { name: "d", value: 40 },
];
let findX1 = array4.find((item) => {
  return item.value === 10;
});
console.log(findX1);
