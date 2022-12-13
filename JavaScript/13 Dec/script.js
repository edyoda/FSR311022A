// console.log("Operators");

var price = 99;
// price = price + 5;
// console.log(price);

// Increment : Increments the value of a number by 1
price++;
// price = price + 1;
console.log(price); // 100

// Decrement : Decrements the value of a number by 1
price--; // 99
price--; // 98
price--; // 97
console.log(price); // 97

// Increase the value by 5
// price = price + 10;
price += 10;
console.log(price); // 107 

// price = price - 20;
price -= 20;
console.log(price); // 87

// -------------------------------

var count = 10;
// console.log("Updated Value",count++); // 10
console.log("Updated Value", ++count); // 11
// console.log(count);


// POST INCREMENT/DECREMENT : USE THE OLD VALUE AND THEN UPDATE IT

// PRE INCREMENT/DECREMENT : UPDATE THE VALUE AND THEN USE NEW VALUE


var a = 1;
console.log(a++ + a++ + ++a + a++ + ++a)
/**
 *             1   +  2  +  4  +  4  +  6
 *              17 
 */

/**
 * if-else statement
 * if(expression) {
 *  true block
 * } else {
 *  false block
 * }
 */

// var age = 26;
// if(age >= 18) {
//   console.log("You can give a vote");
// } else {
//   console.log("You can't give a vote");
// }


/**
 * Ternary Operator
 * expression ? true block : false block ;
 */

// var age = 30;

// age >= 18 ? console.log("You can give a vote") : console.log("You can't give a vote");

// var a = true;
// a ? console.log("1") : console.log("2");

// Truthy Values : Infinite
// Falsy Values : 
//   false
//   0
//   ""
//   null
//   undefined


// Play Area below-----
var x = 12.15;
// if(x) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

x ? console.log("Yes") : console.log("No");

12.15 || "undefined"
// true  || true
// true

0 || 1
// false || true
// true

"" && true
// false

0 && 12
// false

0 || 12
// true

"undefined" && undefined
// false


var y = "10";
// "true" true
if (y == "10") {
  console.log("1st Exp ==> Yes");
} else {
  console.log("1st Exp ==> No");
}

if (y === "10") {
  console.log("2nd Exp ==> Yes");
} else {
  console.log("2nd Exp ==> No");
}

// ------------------------------------

console.log("----------------------");
console.log(10 + 10); // Mathmatical Addition

console.log("John" + "Doe"); // String Concatenation

console.log("10" + "10"); // String Concatenation

console.log(10 + "10"); // String Concatenation

console.log(10 + "John"); // String Concatenation

console.log(true + "John"); // String Concatenation

// true => 1 and false => 0
console.log(1 + true); // Mathmatical Addition

console.log(1 + false); // Mathmatical Addition

console.log(true + true); // Mathmatical Addition


console.log("========================");

var i = 1;
console.log(typeof i);

var j = "1";
console.log(typeof j);


var temp = Number("Hello There");
console.log(temp, typeof temp);
// NaN = Not a Number


// var x = Number("John");
// x ? console.log("Yes") : console.log("No");


var temp2 = Number("123John");
console.log(temp2, typeof temp2);

// var temp3 = parseInt("123John");
var temp3 = parseInt("John123");
console.log(temp3);

var temp4 = Number(true);
// var temp4 = Number(false);
console.log(temp4);

// var temp5 = Boolean(1);
// var temp5 = Boolean(0);
var temp5 = Boolean(-15);
console.log(temp5);


// var temp6 = String(1);
var temp6 = String(undefined);
console.log(temp6, typeof temp6);


var temp7 = parseFloat("12.123");
console.log(temp7);

var temp7 = parseFloat("12.123");
