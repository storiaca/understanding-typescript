"use strict";
/**
 * String type
 */
var myName = "Max";
// myName = 28; app.ts:3:1 - error TS2322: Type '28' is not assignable to type 'string'.
/**
 * Number type
 */
var myAge = 27;
// myAge = 'Max'; error
/**
 * Boolean type
 */
var hasHobbies = false;
// hasHobbies = 1; error
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
/**
 * Array type
 */
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
/**
 * Tuple type variable
 */
var address = ["Superstreet", 99];
/**
 * Enum type
 */
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 3
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
/**
 * Any type
 */
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
/**
 * Functions
 */
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 5));
/**
 * Function types
 */
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
myMultiply(5, 2);
// objects
var userData = {
    name: "Max",
    age: 27
};
// userData = {
//   a: "Hello",
//   b: 22
// };
// complex object
var complex = {
    data: [100, 3.99, 20],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 20],
    output: function (all) {
        return this.data;
    }
};
