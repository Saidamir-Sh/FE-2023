let menu = document.querySelector('.hamburger-menu')
let navLink = document.querySelector('.navigation-links')

// Add Event listener to Menu
menu.addEventListener('click', function() {
    //  change style -> right: 0;
    console.log('hello')
    navLink.classList.toggle('menu-open')
}) 