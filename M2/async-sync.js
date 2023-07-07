// ASYNCHRONOUS AND SYNCHRONOUS PROGRAMMING

// Synchronous JS

console.log('Starting') // 1 sekund

function greeting() {
    console.log('Hello, I am function')
}

greeting() // 2 sekund

console.log('Bye, Finished') // 1 sekund

// Starting
// Bye, Finished
// Hello, I am function

// 4 sekund

// Asynchronous JS

// regular function expresssion
function fn () {
    // do something
}

// arrow function
const add = (a, b) => {
    return a + b
}

console.log('-------------ASYNC-------------------')

console.log('Starting') // 1 sekund

// function sayBye() {
//     setTimeout(() => {
//         console.log('Say Bye')
//     }, 0);
// }

// sayBye()

console.log('Finished')


// Starting
// Finished
// Say, Bye


// Callback function -> a function that is passed as argument to another function
function doSomething(callback, errorFunc) {
    // Perform some asynchronous operation
    // ...
  
    // Simulate a delay of 2 seconds
    setTimeout(() => {
      const result = '';
      result ? callback(result) : errorFunc()
    }, 2000);


  }
  
  function handleResult(result) {
    console.log('Handling result:', result);
  }

  function handleError() {
    console.log('Error Occured !')
  }
  
  doSomething(handleResult, handleError);
  console.log('After calling doSomething');
  
// async & await





function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

function waitMinute() {
  return new Promise((resolve) => setTimeout(() => {
    resolve
  }, 36000))
}

async function greet() {
  try {
    let videos = await getVideos('tom and jerry') // 1 min
    await showVideos(videos)

    console.log('Start')
    await delay(1000)
    console.log('After 1 second')
    await waitMinute()
    console.log('Hello World')
    console.log('After 3 seconds')
  } catch (error) {
    console.log(error)
  }
}

greet()