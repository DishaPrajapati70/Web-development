
let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');

// Search
document.querySelector('#search-btn').onclick = () => {
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.toggle('active');
}

// Cart
document.querySelector('#cart-btn').onclick = () => {
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
}

// Login
document.querySelector('#login-btn').onclick = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.toggle('active');
}


var swiper = new Swiper('.products-slider', {
        loop:true,
        spaceBetween: 20,

        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            
          },
          1020: {
            slidesPerView: 3,
            
          },
        },
      });


var swiper = new Swiper('.review-slider', {
        loop:true,
        spaceBetween: 20,

        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            
          },
          1020: {
            slidesPerView: 3,
            
          },
        },
      });

