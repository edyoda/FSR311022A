// console.log("Hoisting");

// Int Quest : What is hoisting?
// Moving the declaration to the top

// console.log(a);

// var a;
// a = 50;

var a = 1;
// console.log("From line 12", a);

// if (true) {
//   var a = 5;
//   console.log("From line 15", a);
// }

// console.log("From line 18", a);
// var follows function scope

// Since ES6 introduced, we use let and const to declare variables

let b = 12;

console.log("From line 25", b);

if (true) {
  let b = 10;
  console.log("From line 29", b);
}

console.log("From line 32", b);

/**
 * Var : Global scope / Function scope
 * Let & Const : Local scope / Block scope
 */

const c = 100;
// c = 456;
console.log(c);
