// string
let myName: string = "Max";
// myName = 28; app.ts:3:1 - error TS2322: Type '28' is not assignable to type 'string'.

// number
let myAge: number = 27;
// myAge = 'Max'; error

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1; error

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';