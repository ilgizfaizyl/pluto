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