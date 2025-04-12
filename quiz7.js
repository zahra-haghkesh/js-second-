// ? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];
//!  Answer:
 let result = array.every((num)=> {num.length >6 ;
 if (num.length < 10){
    return true ;
 } else {
    false ;
 }

})
console.log(result);

//------------------------------------------------------------------------------------------

function between (arr) {
   let moreSix = arr.filter ((str)=> str.length >6);
   let lowerTen = moreSix.every ((str2)=> str2.length<10) ;
   return lowerTen ;
}
console.log(between(array));