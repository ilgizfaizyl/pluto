import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

 import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper(".banner", {
    pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },
});