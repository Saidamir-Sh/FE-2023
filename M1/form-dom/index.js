const userEmail = document.getElementById('email')
const username = document.getElementById('username')
const userPassword = document.getElementById('password')
const submitBtn = document.querySelector('.submit-btn')
const showPassword = document.querySelector('.show-btn')


// show password when button is clicked
let isShow = true;

showPassword.addEventListener('click', function() {

    if (isShow) {
        userPassword.setAttribute('type', 'text');
        showPassword.innerText = 'Hide Password';
    } else {
        userPassword.setAttribute('type', 'password');
        showPassword.innerText = 'Show Password';
    }

    isShow = !isShow; // Toggle the value of isShow
});


// submitBtn.className
// submitBtn.addEventListener('click', displayUserInfo)

function displayUserInfo() {
    event.preventDefault()
    console.log(event)
    // click { target: button.submit-btn, buttons: 0, clientX: 76, clientY: 86, layerX: 76, layerY: 86 }
    let emailVal = userEmail.value
    let usernameVal = username.value
    let passwordVal = userPassword.value
    
    document.querySelector('.email').innerText = emailVal
    document.querySelector('.username').innerText = usernameVal
    document.querySelector('.password').innerText = passwordVal

}