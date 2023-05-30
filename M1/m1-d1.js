/*
    PROGRAMMING KITCHEN - TIME TO BAKE OUR OWN COOKIES!
    (this here is our very first JavaScript program)
*/

let greeting = 'Hello there, Welcome !'
console.log(greeting)

// Recipe
let sugar // variable declaration 
sugar = 80 // value assignment
let butter = 120 // number
let flour = '370 gr' // string
let useVanilla = true // boolean

sugar + flour + useVanilla

// console.log('Our ingredients')
// console.log('Sugar: ' + sugar)
// console.log('Butter: ' + butter)
// console.log('Flour: ' + flour)

flour = parseInt(flour) // string convert into number
console.log(flour)

let mediumBowl = null

mediumBowl = butter + sugar
mediumBowl // butter + sugar + flour
mediumBowl += flour

// console.log('Bow is ' + mediumBowl)

if (useVanilla) {
    let vanilla = 10
    mediumBowl += vanilla
    // console.log('We have added ' + vanilla + ' gr vanilla')
} else {
    // console.log('We have cooked our cookie')
}


// -------------------------- Comparison and Equality --------------------
let firstNumber = 40
let secondNumber = '40'
// console.log(secondNumber + firstNumber) // 100 ? 4060?
// type coercion
// '', null, false, -1 => boolean
let str = ''
if (str) {
    // console.log('we have string')
} else {
    // console.log('we dont have str')
}

let isGreater = firstNumber > secondNumber // boolean yes or no || true or false
// console.log(isGreater)

let isGreaterOrEqual = firstNumber == secondNumber
// == value
// === value , type
// console.log(isGreaterOrEqual)

// < is smaller
// > is greater
// >= is smaller or equal to
// >= is greater or equal to
// == is equal value
// === is equal value and type (boolean, string, number)

/* ----------------- AND / OR Operators ----------------------  */
let myHeight = 120
let heightLimit = 185
let minimumHeight = 160
// is my height in the range     // true           //AND         // true
let isMyHeightInRange = (myHeight >= minimumHeight) && (myHeight <= heightLimit) // true
// && -> AND
/*
(true) && (true) - > true
(true) && (false) - > false
(false) && (false) - > false
*/

if (isMyHeightInRange) {
    console.log('accepted')
} else {
    console.log('not accepted')
}

// OR operator
let myEyeColor = 'red'
let doIhaveBrightEye = (myEyeColor === 'blue') || (myEyeColor === 'green') || (myEyeColor === 'gray')
console.log(doIhaveBrightEye)

if (doIhaveBrightEye) {
    console.log('Yes I have')
} else {
    console.log('No I dont have')
}

/* -------------- Ternary Operator ---------------- */

let price
let discountPrice = 79
let fullPrice = 99
let isuserRegistered = true

// if-else statement
// if (isuserRegistered) {
//     price = discountPrice
// } else {
//     price = fullPrice
// }

// ternary operator       
            // true          // 79              // 99
price = isuserRegistered ? discountPrice : fullPrice
console.log(price)  // 79

// ----------------- TRUTHY/FALSY ------------------
let isMyConditionTrue = true // boolean
isMyConditionTrue = '' // string

if(isMyConditionTrue) {
    console.log("I'm truthy: ", isMyConditionTrue)
} else {
    console.log("I'm falsy: ", isMyConditionTrue)
}

// string, number, boolean, object, undefined, null
let name

console.log(name) // undefined
console.log(surname) // null




// --------------- OPERATORS -----------------------
// JavaScript provides a wide range of operators that allow you to perform various operations on values, variables, and expressions. Here are some commonly used operators in JavaScript along with examples:

// Arithmetic Operators:

// Addition (+): Adds two values together.

// let a = 5 + 3; // Result: 8
// Subtraction (-): Subtracts one value from another.

// let b = 10 - 4; // Result: 6
// Multiplication (*): Multiplies two values.

// let c = 2 * 6; // Result: 12
// Division (/): Divides one value by another.

// let d = 20 / 5; // Result: 4
// Modulus (%): Returns the remainder of a division operation.

// let e = 15 % 4; // Result: 3 (remainder of 15 divided by 4)
// Assignment Operators:

// Assignment (=): Assigns a value to a variable.

// let x = 10;
// Addition assignment (+=): Adds a value to a variable and assigns the result.

// let y = 5;
// y += 3; // Equivalent to: y = y + 3; (y becomes 8)
// Subtraction assignment (-=): Subtracts a value from a variable and assigns the result.

// let z = 7;
// z -= 2; // Equivalent to: z = z - 2; (z becomes 5)
// Comparison Operators:

// Equal to (==): Checks if two values are equal, performing type coercion if necessary.

// let a = 5;
// let b = '5';
// console.log(a == b); // Result: true
// Strict equal to (===): Checks if two values are equal without performing type coercion.

// let a = 5;
// let b = '5';
// console.log(a === b); // Result: false
// Greater than (>), less than (<), greater than or equal to (>=), less than or equal to (<=): Compare values and return a Boolean result.

// Logical Operators:

// Logical AND (&&): Returns true if both operands are true.

// let a = true;
// let b = false;
// console.log(a && b); // Result: false
// Logical OR (||): Returns true if at least one of the operands is true.

// let a = true;
// let b = false;
// console.log(a || b); // Result: true
// Logical NOT (!): Returns the opposite boolean value of the operand.

// let a = true;
// console.log(!a); // Result: false
// Ternary Operator:

// Ternary operator (condition ? value1 : value2): Evaluates a condition and returns one of two values based on the result.

// let age = 20;
// let canVote = age >= 18 ? 'Yes' : 'No';
// console.log(canVote); // Result: 'Yes'
