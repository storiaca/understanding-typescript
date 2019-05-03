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
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
