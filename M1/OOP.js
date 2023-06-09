// let car = {
//     model: 'Fiat',
    // color
//     honk: function() {
//         console.log('BEEEEP !')
            // console.log(this.color)
//     }
// }
// car.model
// car.honk()

// let Array = {
//     length: 6,// give how many items in array
//     push: function(item) {
//         // push the item at the end of the array
//     }
//     forEach: function() {
//         // loop
//     }
// }


// The Array() constructor creates Array objects.
// let arrNum = new Array(1, 2, 3, 4, 5, 6)
// let string = 'Hello'
// let integer = 45

// arrNum.length // 6
// arrNum.push(7)

// string.toLowerCase()

// console.log(arrNum)

// CLASS - > a template definition of the methods and variables in a particular kind of object

// The constructor method is a special method:

// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties

class Person {
    name;
    surname;
  
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }

    tellYourSurname() {
        console.log(`My surname is ${this.surname}`)
    }

}

let myPerson = new Person('Jhon', 'Doe')
let secondPerson = new Person('Jhon', 'Smith')


console.log(myPerson)
console.log(secondPerson)

class Array {
    
    constructor(elements) {
        this.elements = elements
    }

    push() {
        // ...
    }

    indexOf() {

    }
}

// let stringArr = new Array()
// let numArr = new Array()

// OOP -> Object oriented Programming (Obyektga yo'naltirilgan dasturlash)


// Inheritance (meros qoldirish) 
// extends (davom ettirish)
// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
class Student extends Person {
    age;
    major;
  
    constructor(name, surname, age, major) {
      super(name, surname)
      this.age = age;
      this.major = major;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }

    tellYourSurname() {
        console.log(`My surname is ${this.surname} and I am witch`)
    }

    tellYourAge() {
        console.log(`My surname is ${this.age}`)
    }
}

let myStudent = new Student('Harry', 'Potter', 21, 'Witcher')
myStudent.tellYourSurname()
myPerson.tellYourSurname()
console.log(myStudent)

let myString = new String('hello I am new string')
let secondString = 'Hello'
console.log(myString)
// myString.toUpperCase()
console.log(myString.toUpperCase())

let myNumber = new Number(20)



// Class, constructor, super, this, Inheritence