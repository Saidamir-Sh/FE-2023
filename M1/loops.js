//  repition - > loops

console.log("\n------------- MANUAL REPETITIONS -------------")
console.log('Number 1')
console.log('Number 2')
console.log('Number 3')
console.log('Number 4')
console.log('Number 5')
console.log('Number 6')
console.log('Number 7')
console.log('Number 8')
console.log('Number 9')
console.log('Number 10')

// While
// Do while
// For

console.log("\n------------- WHILE -------------")
// While loop is executing the block of code as long as the condition is true or met
// syntax : 
// while (condition) {
//     // do something
// }

let currentNumber = 1
let numberOfIterations = 10
        // 1             // 10
while(currentNumber <= numberOfIterations) {
    console.log('Number' + currentNumber)
    currentNumber++ // adds 1 
    // currentNumber = 1
    // currentNumber = 2
    // currentNumber = 3 
    // ...             10 
}

console.log("\n------------- DO WHILE -------------")

// This is identical to WHILE, but it will perform the check AT THE END of the block of code
// That's why the block of code will be executed AT LEAST ONCE, even if the condition is FALSE from the very beginning
// (just set 'amountOfIterationsToRun = 0' and you'll see)

// do something runs at least once
// syntax :
// do {
//     // do something
// } while (condition)

let currentNum = 11

do {
    console.log('Number', currentNum)
    currentNum++
} while(currentNum <= numberOfIterations)

console.log("\n------------- FOR LOOP -------------")

// for loop is useful for executing the block of code a FIXED AMOOUNT OF TIMES

                            //1                 //1+1
                            //2                 //2+1
                            //3                 //3+1
for (let currNumber = 1; currNumber <= 10; currNumber++) {
    // do something
    console.log('Number: ' +  currNumber)
}

// for (let i = 0; i < 10; i++) {
//     // index
//     // do something
// }



