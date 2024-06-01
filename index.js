// console.log("hello");

// Create a variable called carName, assign the value Volvo to it.
let carName = "Volvo";

// On one single line, declare three variables with the following names and values:

// firstName = "John";
// lastName = "Doe";
// age = 35;

let firstName = "John"; // write variable name
let lastName = "Doe"; //write variable values
let age = 35; // write variable name and values both

// Use comments to describe the correct data type of the following variables:
const x = {
  firstName: "John",
  lastName: "Doe",
}; // data type: Object

// Execute the function named myFunction.
function myFunction() {
  alert("Hello World!");
}

myFunction();

// Create an object called person with name = John, age = 50, Then access the object to alert "John is 50".
const person = {
  name: "John",
  age: 50,
};

alert(person.name + " is " + person.age);

// Array Related Question
// 1. Alert the number of items in an array, using the correct Array property:
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

// 2. Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
console.log(Brand);

// Math Related Problems
// 1. Use the correct Math method to create a random number.
let randomNumber = Math.random();
console.log(randomNumber);

// 2. Use the correct Math method to return the largest number of 10 and 20.
let maxNumber = Math.max(10, 20);
console.log(maxNumber);

// 3. Use the correct Math method to get the square root of 9.
let sqrtNumber = Math.sqrt(9);
console.log(sqrtNumber);

// Comparison operator related problems!
// 1. Choose the correct comparison operator to alert true, when x is greater than y.
x = 10;
y = 5;
if (x > y) {
  alert(true);
}

// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let age1 = 17;
let message = age1 < 18 ? "Too young" : "Old enough";
alert(message);

