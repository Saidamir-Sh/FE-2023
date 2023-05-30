console.log('----------------- Create Objects -----------------')
// in real life, car, mobile phone, laptop is object.
//  Object - reference type
// car = model, name, color, weight       ----> properties
// car = start(), drive(), brake(), stop()   -----> method

//key   // value
let name = 'Fiat'

let car = {
    //key    //value
    name: 'Fiat', // string
    model: '500', 
    color: 'white',
    weight: 1, // number
    isBrandNew: true, // false
    stop: function () {
        console.log('STOP !') // Method -> function
    },
    printModalName: function () {
        console.log('This car is ' + this.name +' ' + this.model )
    }
}
console.log(car)

console.log("\n------------- READING OBJECT PROPERTIES -------------")
// How to access properties and methods inside object

// object.property
console.log(car.name) // 'Fiat'

// object['property']
console.log(car['model']) // 500

// Method
// object.methoName()
car.printModalName()

let carDescription = 'This car is ' + car.model + ' ' + 'Weight is ' + car.weight
console.log(carDescription) 

console.log("\n------------- TEMPLATE LITERAL -------------")

let fullDescription = `This car is ${car.color} and model is ${car.model}`
console.log(fullDescription)


console.log("\n------------- CHANGING OBJECT PROPERTIES -------------")

// object.property = value
// object['property'] = value

car.color = 'red'
car['color'] = 'red'
// console.log(car)

// JS is dynamic data type language
car.model = 250
console.log(car)


console.log("\n------------- ADDING PROPERTIES TO OBJECTS -------------")

// object.newProperty = new value
// object['newProperty'] = new value

car.licensePlate = 'W13'
car['isPetrol'] = true
console.log(car)

let fruitDictionary = {
    apple: 'loved by Snow White, scares doctors',
    banana: 'yellow fruit loved by monkeys',
    coconut: 'hard, round fruit spotted on tropical lands'
}

// object.propertyName
// object['propertyName']

let fruitWeWantToKnow = 'banana'
console.log(`Description we want to know is ${fruitWeWantToKnow}. ${fruitWeWantToKnow} is ${fruitDictionary[fruitWeWantToKnow]}`)


console.log("\n------------- NESTING OBJECT -------------")

let student = { // object
    name: 'Jhon', // data type - > string
    surname: 'Doe',
    major: 'Computer Science',
    address: {                  // data type -> object
        streetName: 'Ursynow',
        city: 'Warsaw',
        country: 'Poland',
        fullAdress: function () {
            console.log(`${this.streetName}, ${this.city}, ${this.country}.`)
        }
    }
}
// addresss -> street name, City, Country
// Ursynow, Warsaw, Poland - > address

console.log(`${student.name} is from ${student.address.country}`)

student.address.zipCode = 2513
console.log(student.address)
student.address.fullAdress()

console.log("\n------------- ASSIGNING AN OBJECT TO ANOTHER VARIABLE -------------")

// Object, Array - > reference data type
let newStudent = student // rtuo1nnS
newStudent && student
newStudent.major = 'Bussiness'

console.log('New Student', newStudent)
console.log('Old Student', student)

// string, number, boolean, undefined, null ---> primitive data type
let hello = 'hello'
let bye = hello // hello
hello = 'bye, bye'
console.log(hello) // bye, bye
console.log(bye) // hello

console.log("\n------------- ACTUALLY CLONING THE OBJECT -------------")

let student3 = {} // 324uowernnS
Object.assign(student3, student)

student3.address = {}
Object.assign(student3.address, student.address)
// CREATES A NEW OBJECT, AND COPIES EVERY PROPERTY AND METHOD
// We now have 2 different objects, so it wont effect the original object

student3.major = 'Philosophy'
student3.surname = 'Smith'
student3.address.country = 'Latvia'
student3['age'] = 22

console.log('Student 3', student3)
console.log('Student',  student)







