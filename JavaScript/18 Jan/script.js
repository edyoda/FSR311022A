// console.log("Polymorphism");

/**
 * Polymorphism : Ability to have more than 1 form
 * Overriding of functions
 * Overloading of opertators
 */

class A {
  constructor() {}

  sum(num1, num2, num3) {
    console.log("Total from Class A : ", num1 + num2 + num3);
  }

  subtract(a, b) {
    console.log("Difference from Class A :", a - b);
  }
}

class B extends A {
  constructor() {
    super();
  }

  //   sum(num3, num4) {
  //     console.log("Total from Class B : ", num3 + num4);
  //   }

  subtract(a, b) {
    console.log("Difference from Class B : ", a - b);
  }
}

class C extends B {
  constructor() {
    super();
  }
  sum(x, y = 0) {
    console.log("Total from Class C : ", x + y);
  }
}

// const b = new B();
// b.sum(1, 2);

const c = new C();
c.sum(10, 5);
c.subtract(100, 30);

console.log(1 + 2); // Mathematical addition

console.log("1" + "2"); // String concatenation
