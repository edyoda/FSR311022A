// console.log("Control flow");

/*
if(expression/condition) {
  // Execute code for if condition
} else {
  // Execute code on false value
}
*/


var isDrunk = true;

if (isDrunk) {
  console.log("You can not drive a vehicle");
} else {
  console.log("YOu can drive a vehicle");
}


var productPrice = 80;
var tax = 20;

var totalPrice = productPrice + tax;
console.log(totalPrice);

var total = 10 + 20 + 30 + 50 + 15.25;
console.log(total);


var discount = 10;
var newProductPrice = productPrice - discount;
console.log(newProductPrice);

var product = 15 * 6;
console.log(product);

var division = 100 / 5;
console.log(division);


/* Calculate SI on amount 600 at the rate of 7% for 2 years*/

var principle = 600;
var rate = 7;
var time = 2;

var newPrinciple = ((principle * rate * time) / 100) + principle;
console.log(newPrinciple);

// BODMAS => Bracket of Division Multiplication Addition Subtraction


var division2 = 20 / 3;
console.log(division2);

var division3 = 20 % 3;
console.log(division3);


var division4 = 10 % 3;
console.log(division4);

var division5 = 10 % 4;
console.log(division5);


var division6 = 10 % 2;
console.log(division6);



// What do we call a number which leaves 0 as remainder when divided by 2
// Even => 2,4,6,8,10 etc



// What do we call a number which leaves 1 as remainder when divided by 2
// Even => 1,3,5,7,9 etc


var result = 15 % 3 + 2 - 4; // Expressions
console.log(result);



// var result2 = 15 > 3;
var result2 = 15 < 3;
console.log(result2);


var result3 = 5 >= 5;
console.log(result3);


var reuslt4 = 5 <= 5;
console.log(reuslt4);


var result5 = 10 <= 3;
console.log(result5);


var result6 = 10 >= 1;
console.log(result6);


var result7 = 8 == 8;
console.log(result7);


var result8 = 10 == 9;
console.log(result8);

var result9 = 10 != 9;
console.log(result9);

var result10 = 12 != 12;
console.log(result10);


var age = 18;
if (age >= 18) {
  console.log("You can give a Vote in elections");
} else {
  console.log("You can't give a vote in elections");
}


// Logical Operator

// AND OR NOT

/*
  AND (&&)
  true && true   = true
  true && false  = false
  false && true  = false
  false && false = false

  AND OPERATOR WILL RESULT TRUE ONLY IF BOTH OPERANDS ARE TRUE
*/

var res = false && false;
console.log(res);

var res1 = 10 > 3 && 5 > 2;
/* 
Step1 : true && true;
Step2 : true
 */
console.log(res1);

var res2 = 10 <= 10 && 5 < 3;
/*
Step1 : true && false
Ste2: false
*/
console.log(res2);


var res3 = 1 != 10 && 2 > 0 && 5 > 6 && true && false;
/**
 * Step1: true && true && false && true && false
 * Step2: true && false && false
 * Step3: false && false
 * Step4: false
 */
console.log(res3);


/**
 * OR (||)
 * true  || true  =  true
 * true  || false =  true
 * false || true  =  true
 * false || false  = false
 * IF ANY ONE OF THE OPERAND IS TRUE, THEN IT WILL RESULT IN TRUE
 */


var res4 = 45 > 10 || false || 25 != 4;
/**
 * Step1: true || false || true
 * Step2: true || true
 * Step3: true
 */
console.log(res4);


/**
 * NOT (!)
 * !true = false
 * !false = true
 */

var res5 = !(20 > 40);
console.log(res5);


/**
 * Write a program which checks the age of user, if the age is between 10-15 yrs, then allow them to enter your park
 */

var age = 15;
if (age >= 10 && age <= 15) {
  console.log("You can enter in the park");
} else {
  console.log("You can not enter in the park");
}

/**
 * Write a program to calulate the entry fees for your park based on given age ranges : 
 * 0-10 : 0Rs
 * 11-20: 10Rs
 * 21-30: 20Rs
 * 31+:   25Rs
 */

// IF-ELSE LADDER
var age = 25;
var ticketCost = 0;
if (age >= 0 && age < 11) {
  ticketCost = 0;
} else if (age >= 11 && age < 21) {
  ticketCost = 10;
} else if (age >= 21 && age < 31) {
  ticketCost = 20;
} else if (age >= 31) {
  ticketCost = 25;
} else {
  console.log("Invalid input given for age");
}


if (age >= 0) {
  console.log("Ticket Cost = ", ticketCost);
}
