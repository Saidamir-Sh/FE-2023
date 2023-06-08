// function iClickedButton() {
//     console.log('Hello, button is clicked !')
//     alert('WARNING ! BUTTON IS CLICKED !')
// } 

// // EVENT LISTENER

// // Step 1, select the element
// const clickedBtn = document.querySelector('.click-btn')

// // Step 2. Add event listener to that element
// clickedBtn.addEventListener('click', iAmEventListenerFunc)

// function iAmEventListenerFunc() {
//     console.log('Hello I am second button')
//     alert('I am Second button')
// }

const generateBtn = document.querySelector('.btn')
// document.body.style.backgroundColor = 'rgb(27, 15, 205)'

generateBtn.addEventListener('click', generateColor)

function generateColor() {
    // rgb(0, 0, 0) - rgb(255, 255, 255)
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    // set the body background color to randomized color
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}
