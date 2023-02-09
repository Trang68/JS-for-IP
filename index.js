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
  
  sumValue = summm(2,2);
  console.log(sumValue); // err: summm is not defined 
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
  let goToWork = {RainIce?'No':'Yes'};
  
  
   
  