/**
 * String type
 */
let myName: string = "Max";
// myName = 28; app.ts:3:1 - error TS2322: Type '28' is not assignable to type 'string'.

/**
 * Number type
 */
let myAge: number = 27;
// myAge = 'Max'; error

/**
 * Boolean type
 */
let hasHobbies: boolean = false;
// hasHobbies = 1; error

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

/**
 * Array type
 */
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];

/**
 * Tuple type variable 
 */
let address: [string, number] = ["Superstreet", 99]
