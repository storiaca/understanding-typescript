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
console.log(typeof hobbies);
