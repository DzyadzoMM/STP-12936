// const openBtnEl = document.querySelector('[data-action="open"]');
// const closeBtnEl = document.querySelector('[data-action="close"]');
// const burgerMenuEl = document.querySelector('[data-visible]');

// openBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'open';
// });

// closeBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'close';
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const burgerBtn = document.getElementById('burgerMenuBtn');
//   const closeBtn = document.getElementById('closeMenuBtn');
//   const menuWrapper = document.getElementById('menuWrapper');
//   const navLinks = document.querySelectorAll('.nav-link');

//   burgerBtn.addEventListener('click', () => {
//     menuWrapper.classList.add('is-open');
//     document.body.style.overflow = 'hidden';
//   });

//   closeBtn.addEventListener('click', () => {
//     menuWrapper.classList.remove('is-open');
//     document.body.style.overflow = '';
//   });

//   navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       menuWrapper.classList.remove('is-open');
//       document.body.style.overflow = '';
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('[data-burger-toggle]');
  const closeBtn = document.querySelector('[data-burger-close]');
  const menuWrapper = document.querySelector('[data-menu-wrapper]');
  const navLinks = document.querySelectorAll('[data-menu-link]');

  // Функція для керування станом меню
  const setMenuState = isOpen => {
    menuWrapper.toggleAttribute('data-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  // Події
  burgerBtn.addEventListener('click', () => setMenuState(true));
  closeBtn.addEventListener('click', () => setMenuState(false));

  navLinks.forEach(link => {
    link.addEventListener('click', () => setMenuState(false));
  });
});
