// Using an example, explain the difference between block,global and function scope in variables.

//************************************************************************ */
 // block : A variable declared with let inside a block { } can only be used inside that block.

if (true) {
    let age = 25;
 console.log(age); } // Works here//  

 console.log(age); // Error! Not defined outside the block 

 //-----------------------------------------------------------

// global :A variable declared outside of any function or block can be used anywhere in your code.

let name = "Ali"; 
function greet() { 
console.log(name); }// Works fine 
 
greet();                            
  console.log(name); // Also works fine   

  //-----------------------------------------------------------------

  // function : variables declared with let inside a function are only available inside that function.

function sayHi() {
 let message = "Hello"; console.log(message);}// Works here 
 sayHi(); 
 console.log(message); // Error! Not defined outside the function 

