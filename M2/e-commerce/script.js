let menu = document.querySelector('.hamburger-menu')
let navLink = document.querySelector('.navigation-links')
let productContainer = document.querySelector('.products-container') 

// Add Event listener to Menu
menu.addEventListener('click', function() {
    //  change style -> right: 0;
    console.log('hello')
    navLink.classList.toggle('menu-open')

    let line1 = document.querySelector('.line-1');
    let line2 = document.querySelector('.line-2');
    let line3 = document.querySelector('.line-3');

    line1.classList.toggle('line-1-active');
    line2.classList.toggle('line-2-active');
    line3.classList.toggle('line-3-active');
}) 

// 1. select product section container

function createProductCards() {
    // 2. create product cards with for loop
    // 3. give innerHTML to created product cards
    // 4. append product cards to product section container

    for(let i = 0; i < 16; i++) {
        
        let productCard = document.createElement('div')
        productCard.classList.add('product-card')

        productCard.innerHTML = `
            <div class="product-img">
		    	<img src="./headphone-red.png" alt="Product Image"/>
		    </div>
		    <div class="product-description"> 
		    	<h4>Product title</h4>
		    	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorum iste autem delectus nemo, expedita inventore.</p>
		    	<h3>$299</h3>
		    	<div class="product-review">
		    		<i class="fa-solid fa-star"></i>
		    		<i class="fa-solid fa-star"></i>
		    		<i class="fa-solid fa-star"></i>
		    		<i class="fa-solid fa-star"></i>
		    		<i class="fa-solid fa-star"></i>
		    	</div>
		    </div>
		    <div class="product-button">
		    	<a href="#">Buy now</a>
		    </div>
        `
        productContainer.appendChild(productCard)

    }
}
document.addEventListener('DOMContentLoaded', function() {
    createProductCards();
  });


