const numbers = [3,4,5,6,7,8];
const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square(element){
//     return element * element;
// }

// const result = numbers.map(square);
// console.log(result);


// const result = numbers.map(function(element){
//     return element * element;
// });
// console.log(result);


// const square = element => element * element;

const bigger = numbers.filter( x => x>5)
console.log(bigger);
const isThere = numbers.find( x => x>5)
console.log(isThere);

// for each , reduce, find