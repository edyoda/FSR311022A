// console.log("Functions");
/**
 * Function : Peice of code which represents one particular solution
 * Syntax :
 * function <function-name> (argument1 = default value1, arg2 = default val2,...) {
 *  function body
 * return value;
 * }
 */

function sum(num1, num2) {
  var result = num1 + num2;
  return result;
}

var result = sum(5, 7);
console.log(result);

var result2 = sum(20, 40);
console.log(result2);

// var arr = ["A", "B", "C"];
// var temp = arr.slice(1, 2);
// console.log(temp);

// var num1 = 10;
// var num2 = 20;
// var result = num1 + num2;
// console.log(result);

// var num3 = 20;
// var num4 = 30;
// var result2 = num3 + num4;
// console.log(result2);

// Write a program to calculate the new amount after SI given p=10000, r=7%, t=2.5yrs

// si = (p*r*t)/100;
// new principle = p + si;

function getNewPrinciple(principle, rate, time) {
  var si = principle * (rate / 100) * time;
  var newPrinciple = si + principle;
  return newPrinciple;
}

// var newPricipleValue = getNewPrinciple(10000, 7, 2.5);
// console.log(newPricipleValue);

// var p = parseFloat(prompt("Enter your principle"));
// var r = parseFloat(prompt("Enter rate of interest"));
// var t = parseFloat(prompt("Enter the time period"));

// var temp = getNewPrinciple(p, r, t); // Function call
// console.log(temp);

var x = 1 + 4;
console.log(x);

function calculateEmiAmount(loanAmount = 1, rate = 1, time = 1) {
  if (!loanAmount || !rate || !time) {
    alert("Loan Amount, Rate and Time are required");
    return;
  }
  var totalAmount = loanAmount * time * rate;
  var yearlyAmount = totalAmount / time;
  var monthlyAmount = yearlyAmount / 12;
  return monthlyAmount;
}

var emi = calculateEmiAmount(20_00_000, 15, 7.6);
console.log(emi);

var emi2 = calculateEmiAmount(10_00_000, 7, 20);
console.log(emi2);

var emi3 = calculateEmiAmount(100, undefined, 20);
console.log(emi3);

function greetUser(userName = "There") {
  //   var greeting = "Hello " + userName + ", welcome to JS Session";
  var greeting = `Hello ${userName}, welcome to JS session`;
  return greeting;
  // Hello John, welcome to JS Session;
}

console.log(greetUser(null));

// function test() {
//     return "hello";
// }

// console.log(test());

console.log(typeof console.log);

//----------------------------------------
// Print Hello John in the console after 5 seconds
// setTimeout(callback function,time in ms);

console.log("----------------------------------");

function greet() {
  //   console.log("Hello John");
  console.log("B");
}

console.log("A");
// setTimeout(greet,0);
setTimeout(function () {
  // Anonymous function
  console.log("B");
}, 0); // Execute greet fn after 5 secs
// What is happening behind the scenes? (***EVENT LOOP***)
console.log("C");
console.log("D");
console.log("E");

// A B C D E
