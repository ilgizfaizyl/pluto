import * as flsFunctions from "./modules/functions.js";

import tabs from "./modules/tabs.js";

flsFunctions.isWebp();


window.addEventListener('DOMContentLoaded', () => {
  tabs('.tabs__inner', '.tab__link', '.tabs-content', 'tab--active');
});

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

new Swiper(".review-slider", {
  slidesPerView: 4,
  spaceBetween: 23,
  freeMode: true,
  navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
});


  