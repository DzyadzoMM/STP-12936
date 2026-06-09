

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('[data-burger-toggle]');
  const closeBtn = document.querySelector('[data-burger-close]');
  const menuWrapper = document.querySelector('[data-menu-wrapper]');
  const navLinks = document.querySelectorAll('[data-menu-link]');

 
  const setMenuState = isOpen => {
    menuWrapper.toggleAttribute('data-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };


  burgerBtn.addEventListener('click', () => setMenuState(true));
  closeBtn.addEventListener('click', () => setMenuState(false));

  navLinks.forEach(link => {
    link.addEventListener('click', () => setMenuState(false));
  });
});
