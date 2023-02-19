  //1) 3ways to write a function

//1- declare funtion by statment
function sum(x,y) {
    console.log(x+y);
    return x+y;
  }
   sum(3,5); // => 8
  
  //2- use function expression 
  //2.1 Unamed function: 
  const sumValue = function summm(x,y) {
    return x+y;
  }
  
  // sumValue = summm(2,2);
  // console.log(sumValue); // err: summm is not defined 
  //because sumValue will be hoisted, but the function declaration is not, so it will be undefined 
  
  //2.2 named function: 
  const sumValueNamed = { 
    sum: function summm(x,y) {
      return x+y;
    }
  }
  sumValueNamed.sum(1,1)
  console.log(sumValueNamed.sum(1,1)) // 2 
  
  //3. arrow function 
  let myFunction = (a, b) => a * b;
  
  console.log(myFunction(4,5));
  
  
  
  //2) statement # expression
   //2-1: sattment: 
  function sayHi(){
    console.log('hi');
  }
   //2-2 expression: 
   var exp = 1;
   var salary = exp > 3 ? 1000 : 500;
   console.log(salary) // 500
  
  

//////////////////////day 2:
//1/ 
console.log('trang');
console.error('this is an error');

//  2. Assert
let e;
try {
  const x = 3;
  assert.equal(x, 8, 'x must be equal to 8')
} catch (err) {
  assert.equal(String(err),'AssertionError [ERR_ASSERTION]: x must be equal to 8');
} 

// console.assert.equal(3 + 5, 8);
console.assert(5 > 7);


var assert = require('assert');
console.log(assert.equal(50, 50)); //OK

// DAY3: chapter 3
// 1--- vảiable let- const 
let i;
i = 0;
i = i + 1;
assert.equal(i, 1);