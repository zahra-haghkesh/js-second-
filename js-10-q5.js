/*
 ? look at the code below:
 todo: 1. create an object which has three properties. 
 todo: 2. use "for in" to show below result: 
 -Mike is tall, 
 -Jake is kind, 
 -Lilly is young 
 structure: ({key} is {value})
*/

/**Write your code below  */
let properties = {
    mike : "mike is tall" ,
    jake : "jake is kind" ,
    lilly : "lilly is young"

};
for (const key in properties) {
    const keyName = key;
    const value = properties[keyName]; 

    console.log(`${keyName}:${value}`);
}
    
  //-------------------------------------**-----------------------
  
//   for (const key in properties) {
//     const keyName = key;
//     const value = properties[keyName]; 
// let result = `${keyName}: ${value}` ;
//    return  result ;
// }
// console.log(result);