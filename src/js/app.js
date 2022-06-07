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

$(function () {
  
  $('.tab').on('click', function(e){
    e.preventDefault();
  
          $($(this).siblings()).removeClass('tab--active');
          $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
          
          $(this).addClass('tab--active');
          $($(this).attr('href')).addClass('tabs-content--active');
  });
});