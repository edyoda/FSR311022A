// Code below represents working of a car - To be used in car manufacturing unit

// Let's wrap the variables into a signle unit - class
/**
 * Class is a collection of variables and functions
 */

/**
 * Inheritance of Name
 * Child : Ram Prasad
 * Father : Shiv Prasad
 *
 * Child's Full Name :  Ram Shiv Prasad
 */

// Vehcile is the parent class
class Vehicle {
  constructor() {
    this.noOfWheels = 4;
  }

  getNoOfWheels() {
    return "No of wheels from vehicle class = " + this.noOfWheels;
  }
}

/**
 * Steps to inhreit a class
 * 1. Write the name of parent class with extends keyword
 * 2. Write super() in the child constructor
 */

// Car is the child class
class Car extends Vehicle {
  #engineType; // Private member of the class
  constructor(maker, model, color) {
    super(); // Calling the parent's constructor
    // Constructor : A function used to initialize the variables
    // Declare all the variables (and provide them a default value if you want) which represents your class
    this.#engineType = "Petrol";
    this.maker = maker;
    this.model = model;
    this.color = color;
    this.petrolTank;
    this.wires;
    this.tubes;
    this.sparkPlug;
    this.lock;
    // this.engineType = "Petrol";
    // this.noOfCylinders = 6;
    // this.noOfDoors = 4;
  }

  // Declare all the functions which will manipulate the variables

  getCarDetails() {
    return (
      "This is a " +
      this.maker +
      " " +
      this.model +
      " in " +
      this.color +
      " color and has engine type as " +
      this.#engineType
    );
  }

  turnEngineOn() {
    this.lock = "on";
    this.fuel = "Flowing";
    this.ignition = "On";
    /**
     * Process to start a car :
     * Put the key in lock and turn it.
     * 1. Generates a spark.
     * 2. Fuel starts flowing through the tubes
     * 3. Fuel gets ignited
     * 4. Ignition creates pressure
     * 5. Pressure goes to engine
     * 6. Engine pistons starts rotating.
     */
  }

  // getNoOfWheels appeared in more than 1 form (Polymorphism) / Function overriding
  getNoOfWheels() {
    return "No of wheels from car class = 4";
  }
}

/**
 * To use the features (variables and functions) of the class, instantiate it / object
 */

// const ajax = new XMLHttpRequest();

const myCar = new Car("Tata", "Altroz", "White");
console.log(myCar.getCarDetails());

const myCar2 = new Car("Tata", "Tiago", "Black");
console.log(myCar2.getCarDetails());

const myCar3 = new Car("Tata", "Nexon", "Grey");
console.log(myCar3.getCarDetails());

const myCar4 = new Car("Tata", "Harrier", "Red");
console.log(myCar4.getCarDetails());

const myCar5 = new Car("Tata", "Safari", "Black");
console.log(myCar5.getCarDetails());
// console.log(myCar5.#engineType); // Will throw an error becuase engineType is a private member

/**
 * Process to start a car :
 * Put the key in lock and turn it.
 * 1. Generates a spark.
 * 2. Fuel starts flowing through the tubes
 * 3. Fuel gets ignited
 * 4. Ignition creates pressure
 * 5. Pressure goes to engine
 * 6. Engine pistons starts rotating.
 */

myCar5.turnEngineOn();
console.log(myCar5.noOfWheels);
console.log(myCar5.getNoOfWheels());
