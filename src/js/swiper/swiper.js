// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// init Swiper:
export default new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});