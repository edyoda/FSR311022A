// console.log("Revision");

/**
 * Types of inheritance
 * Signle level inertiance A -> B
 * Multi level inertance A -> B -> C
 * Multiple Inheritance (THIS INHERITANCE IN NOT SUPPORTED IN JS)
 */

class A {
  constructor() {
    this.name = "John";
  }
}

class B extends A {
  constructor() {
    super();
  }
}

class C extends B {
  constructor() {
    super();
  }
}

// const c = new C();
// console.log(c.name);

// class Father {
//   constructor() {}
// }

// class Mother {
//   constructor() {}
// }

// class Child extends Father,Mother {
//   constructor() {}
// }

class Animal {
  constructor() {
    this.legs = 4;
  }

  getInformation() {
    return `This animal has ${this.legs} legs`;
  }
}

class Cat extends Animal {
  constructor() {
    super();
  }
}

const myCat = new Cat();
console.log(myCat);
console.log(myCat.getInformation());

/**
 * Prototype : Shows the information about inherted properties and methods
 */

/**
 * Proptotypal Inhertance
 */

/**
 * Constructor Functions : Which creates an object just like class objects (Older way used till ES5)
 */
function Car() {
  this.maker = "Hyundai";
  this.model = "i20";
  this.color = "Grey";
}

const myCar = new Car();
console.log(myCar);

/**
 * Prototype Chain => Connection of one instance/object to another object with the help of prototype
 */

const users = ["A", "B"];
// const users = new Array(2);
// // users.push("A");
// // users.push("B");
console.log(users);

// class Array {
//   constructor() {}

//   push() {}

//   pop() {}

//   shift() {}
//   unshift() {}
// }

/**
 * Form Validtion
 */

/**
 * On form submission validate below fields :
 * Username : Only alphabets, min 8 max 14 chars
 * Email : Should be a valid email
 */

$("#regForm").on("submit", function (e) {
  e.preventDefault();
  const values = $(this).serializeArray();
  const username = values[0].value;
  const email = values[1].value;

  const usernameRegex = /^[A-Z]{8,14}$/i;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!usernameRegex.test(username)) {
    $("#usernameError").css("display", "inline");
  } else {
    $("#usernameError").css("display", "none");
  }

  if (!emailRegex.test(email)) {
    $("#emailError").css("display", "inline");
  } else {
    $("#emailError").css("display", "none");
  }
});

// https://regex101.com/