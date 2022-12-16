// console.log("Loops");
/**
 * Loop : Repetition
 * 3 things are required to run a loop
 * Initialization, Condition, Increment/Decrement
 * Types of Loops :
 * 1. While
 * 2. For
 */

// You got a punishmen to write "I'll not miss my class" 100 times

/**
 * while loop syntax :
 * initialization
 * while(condition) {
 *  // ToDo : Write the code you want to repeat
 * increment/decrement
 * }
 */

// var counter = 1; // Initialization

// while (counter <= 100) {
//   console.log("I'll not miss my class", counter);
//   counter++;
//   // counter--;
// }

// Write a program to print a table of 25

// var counter = 1;
// var tableNum = 98;
// // var tableNum = prompt("Enter a number to print table");
// while (counter <= 10) {
//   //   console.log(74 * counter); // 74 x 1 = 74
//   console.log(tableNum + " x " + counter + " = " + tableNum * counter);
//   //   console.log(74, "x", counter,'=', counter * 74);
//   counter++;
// }

var users = [
  "Undertaker",
  "Batista",
  "John Cena",
  "Ray Mysterio",
  "Roman Reigns",
  "Jindal Mahal",
  "The Rock",
  "Big Show",
  "The Great Khali",
];

// console.log(users.length);
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);
// console.log(users[5]);
// console.log(users[6]);
// console.log(users[7]);
// console.log(users[8]);

/**
 * Hello Undertaker
 * Hello Batista
 * Hello John Cena
 *
 * Hello <user-name>
 */

// Iterate over an array
// var counter = 0;

// while (counter < users.length) {
//   console.log("Hello",users[counter]);
//   counter++;
// }

/**
 * For loop syntax :
 * for(initialization;condition;increment/decrement) {
 *  //ToDo : Write your repetition code here
 * }
 */

// for (var counter = 0; counter < 10; counter++) {
//     console.log("Hello");
// }

// var tableNum = 32;
// for (var counter = 1; counter <= 10; counter++) {
//   //   console.log(5 * counter);
//   console.log(tableNum + " x " + counter + " = " + tableNum * counter);
// }

// for (var counter = 0; counter < users.length; counter++) {
//   console.log("Hello", users[counter]);
// }

// for (var counter = 1; counter <= 10; counter += 5) {
//   console.log(counter);
// }

// for (var counter = 100; counter > 0; counter--) {
//   console.log(counter);
// }

// ---------------------------------------------
/**
 * break : Used to stop a loop in between on a certain condition
 * continue : Used to skip an iteration in between the loop exectuion
 */

// for (var i = 1; i <= 10; i++) {
//   if (i === 7) {
//     break;
//   }
//   console.log(i);
// }

// for (var i = 1; i <= 10; i++) {
//   if (i === 7) {
//     continue;
//   }
//   console.log(i);
// }

// Print all the even numbers between 1 - 100

for (var i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
