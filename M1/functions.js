console.log('---------------- JS Functions ----------------------')

// What is Function ? 
// reusable block of code 


console.log('---------------- Declaring Function ----------------------')

// let Myvar = 'Hello'
function sayHelloFunction() {
    console.log('Hello World')
}

// call (invoke) a function 
sayHelloFunction()

// Function can have one or more parameter
// syntax
// function myFunction(parameter1, parameter2) {
//     // do something with those parameters
// }

function addTwoNumbers(x, y) {
    console.log('Addition of X and Y is : ', x + y)
}
// console.log(n1 + n2)
addTwoNumbers(5, 7)

function multipleTwoNumbers(x, y) {
    console.log('Multiplication of x and y is : ', x * y)
}
multipleTwoNumbers(3, 5)

function multipleByTwo(a) {
    console.log(`${a} is multipled by 2 is equal to `, a * 2)
}

multipleByTwo(3)

// A function can return nothing or it can return a result back

function substractTwoNumbers(a, b) {
    return a - b
}

console.log(substractTwoNumbers(10, 2))

// we can store the return value in the variable
let resultofSubstraction = substractTwoNumbers(6, 5) // 1
console.log('result of substraction: ', resultofSubstraction)

function isGivenNumberGreater(a, b) {
    if (a > b) {
        // console.log('A is Greater than B')
        return a
    } else if (a === b) {
        // console.log('A and B is equal')
        return a + b
    } else {
        // console.log('B is greater than A')
        return b
    }
}

let resultOfComparison = isGivenNumberGreater(10, 13) // 10

console.log(resultOfComparison + 5) // 18

// DRY - > Don't Repeat Yourself

console.log('------------------- Let vs Const --------------------------')
// there is a two of declaring variable
let myVariable = 'this is let variable'

// const stands for constant (o'zgarmas)
const myConstantVariable = 'this is constant variable'

const mySecondConstant = 100 // Must be initialized after declaration, should have value after creating a variable
let mySecondLetVariable


const Pi = 3.14
const gravity = 9.6

console.log(myVariable)
console.log(myConstantVariable)

myVariable = 120 // assigning new value IS ALLOWED
console.log(myVariable)


myVariable = true
console.log(myVariable)

// myVariable = {

// }

// myConstantVariable = 'this is constant' // assigning new value is NOT ALLOWED
// myConstantVariable = 150
// console.log(myConstantVariable)

// console.log(myNumber)
let myNumber = 5

                                // ko'tarish (tepaga)
console.log('------------------- HOISTING ------------------')
// hoists variable and function declarations (creations) at the of the scope
// myVar, myNumber

console.log(myVar) // undefined
var myVar // declaration , crreate
myVar = 3 // initialization assigning value
console.log(myVar)

// parent
// SCOPING
function mySecondFunc() { // function scope , lexical scope
    // functionVariable, functionConstVar, functionVarKey, innerFunction -> Hoisting
    // child 
    let functionVariable = 10
    const functionConstVar = 5
    var functionVarKey = 50
    console.log(myVar)
    console.log(myNumber)

    function innerFunction() {
        // child of mySecondFunc
        let innerVariable

    }
}
// not accessible
// console.log(functionVariable)

// console.log(functionVarKey)

mySecondFunc()

                            // Yopilish
console.log('-------------- CLOSURE ----------------')

// global Scope
let globalVar = 'Hello I am global variable'

function outerFunction() {
    // function Scope
    let outerVariable = 'Hello I am outer Var'
    console.log(globalVar) // has access to global scope
    // console.log(innerVariable) // not accessible

    function innerFunction() {
        // function Scope
        let innerVariable = 'Hello I am inner Var'
        console.log(innerVariable)
        console.log(outerVariable) // has access to parent function (outer)
        console.log(globalVar)
    }

    return innerFunction()

}

outerFunction()


