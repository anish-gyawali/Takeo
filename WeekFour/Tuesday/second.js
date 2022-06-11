//second lecture

console.log("first");
setTimeout(() => {
  console.log("wait for 1 sec");
}, 3000);
console.log("second");


//lets make constructor that holds name and age
function User (name, age) { 
    this.name = name;
    this.age = age; 
} 
//now lets use that constructor by creating objects
var user1 = new User('anish', 24); // 
var user2 = new User('ans', 23);
console.log(user1);
console.log(user2)
 