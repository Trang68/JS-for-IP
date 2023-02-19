// const assert=require('assert');
function assertEqual(actual, expected, testName) {
  // your code here
  if (actual === expected) {
    console.log('they are equal');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"')
  }
}
// DAY3: chapter 3
// 1---  let- const 
let i;
i = 0;
// hoac khai bao va gan gia tri cung luc:
//let i = 0;

i = i + 1;
assertEqual(i, 1);

//const 
//
const obj = { prop: 0 };
// Allowed: changing properties of `obj`
obj.prop = obj.prop + 1;
assertEqual(obj.prop, 1);
// Not allowed: assigning to `obj`
() => { obj = {} };



//2 -- diem khac nhau:
//khai bao truoc ma ko gan gia tri thi gia tri nhan duoc cua bien se khac nhau:

let tmpLet; // TDZ ends
assertEqual(tmpLet, undefined);

var tmpVar; // TDZ ends
assertEqual(tmpVar, undefined);

  //but will have error if do it with const:
  // const tmpConst; // cant not do it
  // assertEqual(tmpConst, undefined);



//3--decleration and call the function
assertEqual(foo(), 123); // OK
function foo() { return 123; }

const f = () => g();
const g = () => 123;
// We call f() after g() was declared:
assertEqual(f(), 123);


// 2/ Values
// 1. Rule of thumb: typeof is for primitive values; instanceof is for objects
var x = 'abc';
if (typeof x === 'string') console.log('x is type of string');
var y = [1,2,3];
if (y instanceof Array) console.log('x is instance of Array');


//2. we can convert value to type of primitive value 
assertEqual(Number('123'), 123);
// or use other convert: toString, Number.parseInt(123.45)...> 
console.log(Boolean(0)); //false

console.log( Number('123')); //123

console.log(String(123)); //'123'


// OPERATORS: 
//1- phep viet tat cua to hop cac phep toan
// a ||= b   la phep    a || (a = b)
let a = true;
let b = true;
if(a||= b) console.log( 'a||= b');
// tuong tu ta co cac phep sau: 
// a &&= b   la phep    a && (a = b)
// a ??= b   la phep    a ?? (a = b)

// 2-- triple equals === vs == double equals.
// a) Loose equality (== and !=) binh dang long leo
if('' == 0) console.log(`loose equality 0 and ''`);
          // ngoai ra con co nhuw sau: 
            //false == 0; => true 
            //'123' == 123  =>true
//b) Strict equality (=== and !==) binh dang chat che 
if(false === 0) console.log( `strict equal false === 0 not exist`)
else console.log(`strict equal false === 0 exist now`)

            // ngoai ra con co cac so sanh chat che nhu sau: 
            // [1, 2, 3] === '1,2,3'   => false
            // ['1', '2', '3'] === '1,2,3'  =>false
            // undefined === null  => false 




