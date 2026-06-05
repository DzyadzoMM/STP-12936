// const openBtnEl = document.querySelector('[data-action="open"]');
// const closeBtnEl = document.querySelector('[data-action="close"]');
// const burgerMenuEl = document.querySelector('[data-visible]');

// openBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'open';
// });

// closeBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'close';
// });

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burgerMenuBtn');
  const closeBtn = document.getElementById('closeMenuBtn');
  const menuWrapper = document.getElementById('menuWrapper');
  const navLinks = document.querySelectorAll('.nav-link');

  // Відкрити меню
  burgerBtn.addEventListener('click', () => {
    menuWrapper.classList.add('is-open');
    document.body.style.overflow = 'hidden'; /* Блокуємо скрол сайту під меню */
  });

  // Закрити меню через хрестик
  closeBtn.addEventListener('click', () => {
    menuWrapper.classList.remove('is-open');
    document.body.style.overflow = ''; /* Повертаємо скрол */
  });

  // Закривати меню автоматично, якщо клікнули на будь-яке посилання
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuWrapper.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
});
