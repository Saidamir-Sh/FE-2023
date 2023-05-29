// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
 
*/
let gender
let isMale = true
gender = isMale ? 'male' :  'female'
// gender = male

/* WRITE YOUR ANSWER HERE */

/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
let firstNum = 3
let secondNum = 2
// one of them is 8 
// firstNum + secondNum = 8
// firstNum - secondNum = 8
if ((firstNum === 8 || secondNum === 8) || (firstNum + secondNum === 8) || (firstNum - secondNum === 8)) {
    console.log('Correct, condition is one of them is true')
} else {
    console.log('None of them is correct')
}



/* WRITE YOUR ANSWER HERE */

/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/
// concatenation -> bir biriga qoshib yuborish
// 6040
// 'Hello' + 'Wordl'  = 'Hello Wordl'

let fullName = ''
let firstName = 'Jhon'
let lastName = 'Doe'
fullName = firstName + lastName // Jhon Doe

let num = 40
let strNum = '60'
let concatenatedNumber = num + strNum // 4060 -> string
console.log(typeof concatenatedNumber)

/* WRITE YOUR ANSWER HERE */

/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/
let stringOne = 'IamLongestString'
let shortString = 'shortString'

        // number of chars
if (stringOne.length > shortString.length) {
    console.log(stringOne + ' is longest')
} else {
    console.log(shortString + ' is shortest')
}


/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/
let salary = 1000
let taxRate = '18%'
taxRate = parseInt(taxRate)

let tax = (salary*taxRate)/100
let nettoSalary = salary - tax 
console.log(nettoSalary)


/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
