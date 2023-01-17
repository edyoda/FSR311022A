// console.log("Encapsulation & Inheritance");
// OOP (Object Oriented Programming)
/**
 * 1. Encapsulation => Creating bunch of lot of different things tied together / Data hiding
 * 2. Inhertiance => Accquiring properties of parent. (Single, Multi level, Hierarchical and Hybrid *)
 * 3. Polymorphism
 * 4. Abstraction
 */

// * => Given that the hybrid does not contains multiple inheritance (Only for JS)

/**
 * Inheritance before ES6 in JS => Prototypal, Psedoclassical and Functional
 */

const person = {
  name: "Alex J",
  bloodGroup: "AB+",
  address: "123, ABC Street, NY",
};
console.log(person);

// Constructor function

// function Person() {
//   this.name = "Tony Stark";
//   this.bloodGroup = "O+";
//   this.address = "Stark Tower, USA";
//   this.hasDriversLicense = true;
// }

// const p = new Person();
// console.log(p);

// Versions of JS => EcmaScript (ES)

class Person {
  constructor() {
    // Initialize the data (Declare all the varaibles of class with their default value)
    this.name = "Alex J";
    this.bloodGroup = "AB+";
    this.address = "123, ABC Street, NY";
    this.hasDriversLicense = true;
  }

  introducePerson() {
    // Alex J has AB+ blood group and lives at 123, ABC Street NY
    console.log(
      `${this.name} has ${this.bloodGroup} blood group and lives at ${this.address}`
    );
  }
}

const p = new Person();

// console.log(p.address);
p.introducePerson();

class A { // Parent class
  constructor() {
    this.colorOfEyes = "blue";
    this.height = "5\"6'";
  }
}

class B extends A { // Child class
  constructor() {
    super();
    this.colorOfHair = "brown";
  }
}

// class C extends B { => Multi level
class C extends A {
  // => Hierarchical
  constructor() {
    super();
    this.hasDriversLicense = true;
  }
}

// const child = new Child();
// console.log(child);

const c = new C();
console.log(c.height);


// https://www.javatpoint.com/inheritance-in-java
