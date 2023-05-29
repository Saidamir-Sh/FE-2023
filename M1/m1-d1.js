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