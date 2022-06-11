// let prom =new Promise((resolve,reject)=>{
//     let num =Math.random();
//     if(num> .5){
//         resolve('Yay');
//     }else{
//         reject('oh noooo')
//     }
// })
// const handleSuccess=(resloveValue)=>{
//     console.log(resloveValue)
// }

// const handleFailure=(rejectValue)=>{
//     console.log(rejectValue)
// }
// prom.then(resloveValue,rejectValue)

function getCountries(countryName) {
  const result = fetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  ).then((response) => console.log("without json", response));
}

getCountries("Nepal");

function getCountrie(countryName) {
  const result = fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("this is after using json", data[0]);
    });
}

getCountrie("Nepal");
