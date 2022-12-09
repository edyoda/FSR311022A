// console.log("Alerts and scripts");
// var a = 10;
// console.log(a);
// console.log(20);

// alert("By clicking OK you are confirming that you are at least 10 yrs old");

var message = "Hello, welcome to JavaScript course by EdYoda";
// console.log(typeof message);

// Operations on String
var length = message.length;
console.log(length);

// var charAtZero = message.charAt(0);
// console.log(charAtZero);

var charAtTen = message.charAt(10);
var char = message.charAt(9);
// console.log(char)
// console.log(charAtTen);

// console.log(message.charAt(21));
var expChar = message.charAt(5);
// console.log(expChar);

// Substring
var newStr = message.substring(0, 15);
console.log(newStr);

// if we want last char ,what we can do sir
var lastIndex = message.length - 1;
var lastChar = message.charAt(lastIndex);
console.log(lastChar);
// PRACTICE

var greeting = "Welcome ";
var userName = "John";

// var greetingMessage = greeting.concat(userName);
// var greetingMessage = greeting + userName;
// console.log(greetingMessage);
// console.log(greeting + userName);
// document.write(greetingMessage);

console.log("Hey " + userName + " " + greeting + "to EdYoda");

// console.log(2+2);

var message2 = "Hey there, we are learning JavaScript string methods today";

console.log(message2.includes("nin"));

console.log(message2.indexOf("wa"));
// console.log(message2.lastIndexOf("a"));

var email = "john@outlook.com";

console.log(email.endsWith('gmail.com'));
console.log(email.startsWith('jane'));