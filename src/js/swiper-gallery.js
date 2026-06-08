document.addEventListener('DOMContentLoaded', () => {
  const gallerySlider = document.querySelector('[data-my-slider]');

  if (gallerySlider) {
    new Swiper(gallerySlider, {
      observer: true,
      observeParents: true,

      slidesPerView: 1,
      spaceBetween: 12,
      loop: false,

      navigation: {
        nextEl: '[data-slider-btn="next"]',
        prevEl: '[data-slider-btn="prev"]',
      },

      pagination: {
        el: '[data-slider-pagination]',
        clickable: true,
      },

      breakpoints: {
        1440: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      }
    });
  }
});