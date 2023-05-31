console.log("\n------------- ARRAYS -------------")

// Arrays - > collection of different elements (string, number, boolean, object ...)

let arrayOfAnimals = ['Dog', 'Cat', 'Mouse', 'Duck', 'Alligator']
                    // 0     //1    //2      //3     // 4
console.log(arrayOfAnimals)

let arrayofNumbers = [10, 20, 30, 40, 50]
console.log(arrayofNumbers)

let arrayOfBooleans = [true, false, false, true, true]
console.log(arrayOfBooleans)

let arrayOfStudents = [
    {name: 'Jhon', major: 'IT'}, 
    {name: 'Smith', major: 'Art'},
    {name: 'Daniel', major: 'Bussines'}
]
console.log(arrayOfStudents)

// Mixed data types of elements
let mixedArray = ['I am String', 123, false, {name: 'Doe', major: 'Art'}]
console.log(mixedArray)
// NOT RECOMMENDED, PLEASE AVOID USING DIFFERENT TYPES OF ELEMENTS IN ARRAY



console.log("\n------------- LENGTH OF AN ARRAY -------------")

// array.length
console.log(`There are ${arrayOfAnimals.length} animals`) // 4


console.log("\n------------- ACCESSING THE CONTENT OF AN ARRAY -------------")
// array[index]
console.log(`Second animal is ${arrayOfAnimals[1]}`)
let lastAnimalIndex = arrayOfAnimals.length - 1 // 4

// arrayOfAnimals[4]
arrayOfAnimals[lastAnimalIndex] // Alligator
console.log(arrayOfAnimals[lastAnimalIndex])

console.log("\n------------- CONCATENATING ARRAYS -------------")
// syntax : array1.concat(array2) -> array3
let redFruits = ['Strawberry', 'Cherry', 'Apple', 'Watermelon']
let greenFruits = ['Avocado', 'Lime', 'Green Apple']
                  //0          //1     // 2
let arrayOfFruits = redFruits.concat(greenFruits)
console.log(arrayOfFruits)

console.log("\n------------- PUSH AN ITEM AT THE END OF THE ARRAY -------------")
// syntax: array.push(value) // push new value at the end of the array
greenFruits.push('Kiwi')
greenFruits.push('Pears')
console.log(greenFruits)

console.log("\n------------- REMOVING THE LAST ITEM -------------")
// syntax:  array.pop()
redFruits.pop() // remove WaterMelon
console.log(redFruits)

redFruits.pop() // remove Apple
redFruits.push('Pomegranate') // add Pomegranate
console.log(redFruits)

console.log("\n------------- ADD AN ITEM IN THE MIDDLE -------------")
// syntax: array.splice(startIndex, deleteCount, element)
// deleteCount -> replaces element at index
greenFruits.splice(0, 2, 'Watermelon')
console.log(greenFruits) //[ 'Watermelon', 'Green Apple', 'Kiwi', 'Pears' ]

console.log("\n------------- REMOVING AN ITEM FROM THE MIDDLE -------------")
// syntax: array.splice(start, deleteCound)
console.log(redFruits) //[ 'Strawberry', 'Cherry', 'Pomegranate' ]
redFruits.splice(1, 1)
// console.log(redFruits) [ 'Strawberry', 'Pomegranate' ]


let redAllFruits = ['a', 'c', 'b', 'c', 'd', 'f']
                    //0  //1  //2  //3   //4   //5
                    // redAllFruits.length = 6 - 1
                    // redAllFruits[1]

// for(let i = 0; i <= redAllFruits.length - 1; i++) { // i = 0, i = 1, i = 2, i = 3, 
//         if (redAllFruitsp[i] == 'red') {
//             redAllFruits.splice(i, 1)
//         }
// }

console.log("\n------------- LOOK FOR THE INDEX OF AN ELEMENT -------------")

// syntax : array.indexOf(value)
let indexOfKiwi = greenFruits.indexOf('Kiwi') // returns the index of the element in the array
greenFruits.splice(indexOfKiwi, 1)
console.log(greenFruits)
console.log(indexOfKiwi)


console.log("\n------------- NESTED ARRAYS -------------")

let nestedArray = [
    [ 1, 2, 3, 4],
    [ 2, 4, 6, 8],
    [ 3, 6, 8, 10],
    [ "Mouse", "Cat" ] // Different length, different data type: you can do that, but PLEASE DON'T
]

// [[], [], []]

console.log(nestedArray)
console.log("The third element of the second row is", nestedArray[1][2])


