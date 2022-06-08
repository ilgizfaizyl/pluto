import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

 import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper(".banner", {
    pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },
});

new Swiper(".product-tab", {
  slidesPerView: 4,
  spaceBetween: 15,
  freeMode: true,
  navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});


  
  $('.tab__link').on('click', function(e){
    e.preventDefault();
  
          $('.tab__link').removeClass('tab--active');
          $('.tab__link').removeClass('tabs-content--active');
          
          $('.tab__link').addClass('tab--active');
          $('.tabs-content').addClass('tabs-content--active');
  });