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
let address: [string, number] = ["Superstreet", 99];

/**
 * Enum type
 */
enum Color {
  Gray, // 1
  Green = 100, // 100
  Blue // 3
}

let myColor: Color = Color.Green;
console.log(myColor);

/**
 * Any type
 */
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

/**
 * Functions 
 */
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

console.log(multiply(2, 5));

/**
 * Function types
 */
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
myMultiply(5,2);