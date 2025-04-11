// According to your js10 session, write a code that shows why we shouldn't use var?




 for (var i = 0; i < 10; i++) {
 console.log(i);
 }
 console.log(i);  // ✅ 10

/** --------------------- separator --------------------- **/

for (let i = 0; i < 10; i++) {
 code
 }
 console.log(i);  // ❌ not defined

 //We don't use var in JavaScript because it has function scope and can cause unexpected behavior due to hoisting and redeclaration.