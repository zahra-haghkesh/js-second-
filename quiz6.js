//? 6. write a reduce method to get the sum of all array items
const arr = [31, 1, 7, 12, 27];

//! Answer:
let total = arr.reduce ((num1,num2)=> {
    return num1 + num2 ;
})
console.log(total); 