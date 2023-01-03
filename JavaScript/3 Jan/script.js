// console.log("Errors");
// console.log("asdf");

// const users = [];
// users.push("ABCD");

// const userName = "John Doe";
// userName.push("ABCD"); // Will produce an error because push is array method and we trying it on string

function sum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    // console.log("AAAAA");
    // Show the error
    throw new Error("Both the parameters must be of type number");
    console.log("BBBB");
    // return; // Stop the execution of function and don't return any value
  }
  const result = num1 + num2;
  return result;
}

// Error handling using try catch block
try {
  const total = sum(10, "10");
  console.log(total);
} catch (err) {
  console.error(err); // Will print error stack
}

const userName = "John";
console.log("Hello", userName);
console.log("Hey there..");

// APIs => Application Programming Interface
// The URL/Endpoint which we use in AJAX is called an API
// If the API returns JSON, we call it as REST API
// If the API returns XML, we call it as SOAP API

// ARRAY FILTER METHOD TO FILTER THE RESULTS ON CERTAIN CONDITION
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// function filterWords (word) {
//   // Decide if you to filter/keep that word
//   if(word.length > 6) {
//     return true;
//   	// accept the word
//   } else {
//     return false;
//   	// reject the word
//   }
// }

// const result = words.filter(filterWords);

// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]
