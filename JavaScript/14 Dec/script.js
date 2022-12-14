// console.log("Doubts, Switch etc");

// Concatenation
// parseInt
// 

var firstName = "John";
var lastName = "Doe";

var fullName = firstName + " " + lastName;
console.log(fullName);

var temp = Number("123.45");
console.log(temp, typeof temp);

var temp2 = parseInt("123ABC.45");
console.log(temp2, typeof temp2);

var temp3 = parseFloat("123.45");
console.log(temp3, typeof temp3);

// ----------------------------------------


/**
 * Sytax : 
 * switch(<variable>) {
 *  case <case1>:
 *   ToDo : Logic for case1;
 *  break;
 *  case <case2>:
 *   ToDo: Logic for case2;
 *  break;
 * ....
 *  default:
 *    ToDo : Default Logic;
 * }
 */


// Write a program which takes a number as an input between 1-7 and prints respective day of the week.

/**
 * 1 => Monday
 * 2 => Tuesday
 * ....
 * 7 => Sunday
 */

var input = 8;
var weekDay = "";
// var weekDay;

// if (input === 1) {
//   weekDay = "Monday";
// } else if (input === 2) {
//   weekDay = "Tuesday";
// } else if (input === 3) {
//   weekDay = "Wednesday";
// } else if (input === 4) {
//   weekDay = "Thursday";
// } else if (input === 5) {
//   weekDay = "Friday";
// } else if (input === 6) {
//   weekDay = "Saturday";
// } else if (input === 7) {
//   weekDay = "Sunday";
// } else {
//   weekDay = "Invalid Input";
// }



switch(input) {
  case 1:
    weekDay = "Monday";
    break;
  case 2 :
    weekDay = "Tuesday";
    break;
  case 3 :
    weekDay = "Wednesday";
    break;
  case 4 :
    weekDay = "Thursday";
    break;
  case 5 :
    weekDay = "Friday";
    break;
  case 6 :
    weekDay = "Saturday";
    break;
  case 7 :
    weekDay = "Sunday";
    break;
  default :
    weekDay = "Invalid Input Given";
}

console.log("Switch Ouput",weekDay);


/**
 * IF ELSE                  SWITCH
 * Works with conditions   Works with single variable values 
 * 
 */


// Write a program to take gender of the person as input and gives the discount based on it
/**
 * m => 0 %
 * f => 50 %
 * o (List of genders) => 30 %
 */

var gender = "o";
// var gender = prompt("Enter your gender");
// var discount = 0;

switch(gender) {
  case "m":
    discount = 0;
    break;
  case "f":
    discount = 50;
    break;
  default :
    discount = 30;
    break;
}

console.log("Discount on Entry Fees ",discount, "%");

// --------------------------------
// alert("Hello");
// var input2 = prompt("Enter a value");
// console.log(input2);

// var num1 = Number(prompt("Enter number 1"));
// var num2 = Number(prompt("Enter number 2"));

// num1 = Number(num1);
// num2 = Number(num2);
// console.log(num1, num2);
// console.log(num1 + num2);

// --------------------------------------

/**
 * Objects : Collection of data which represents a single unit, in the form of key-value pairs
 */


/**
 * firstName
 * lastName,
 * rollNo,
 * std,
 * section,
 * address,
 * bloodGroup,
 * dob,
 * mobileNo
 */

// Student

var firstName = "John";
var lastName = "Doe";
var rollNo = "123";
var std = 5;
var section = "A";
var address = "123, ABC Street";
// console.log(firstName, lastName, std);

/**
 * Syntax 
 * var <name of object> = {
 *  key: value,
 *  key2: value2
 * };
 */
var student = {
  firstName: "John",
  lastName: "Doe",
  rollNo: "123",
  std: 5,
  section: "A",
  address: "123, ABC Street"
};
console.log(student);

var car = {
  maker: "Tata Motors",
  model: "Harrier",
  regNo: "MP-09-AB-1234",
  variant: "XT",
  color: "Black",
  hasAirbags: true,
  engine: {
    type: "Diesel",
    stroke: 4,
    cylinder: 6
  }
};

console.log(car.color); // Access a value from an object


car.color = "White"; // Update a value in an object

car.model = "Nexon";
console.log(car);

// console.log(car.engine.type);
console.log(car.mileage); // Undefined
car.mileage = 20.5; // Adding new key to the object
console.log(car.mileage);


delete car.variant; // Delete a key-value pair from an object

console.log(car);