import scrollElem from './scrollElem'

const menu = () => {
  const popupMenu = document.querySelector('.popup-menu');
  const menuMobile = document.querySelector('.menu__mobile');
  const head = document.querySelector('.head');

  const fixedMenu = () => {
    const width = window.screen.width;

    if (width < 768) {
      if (window.pageYOffset > head.offsetHeight) {
        menuMobile.classList.add('fixed');
      } else {
        menuMobile.classList.remove('fixed');
      }
    }
  };

  const fixedMenuScroll = () => {
    window.addEventListener('scroll', fixedMenu);
  };

  const handlerMenu = () => popupMenu.classList.toggle('active');
  menuMobile.addEventListener('click', (event) => {
    const target = event.target;
    const menuBtn = target.closest('.menu-button img');
    const closeMenuBtn = target.closest('.close-menu-btn img');
    const scrollBtn = target.closest('.scroll');

    if (menuBtn || closeMenuBtn) handlerMenu();
    if (scrollBtn) {
      scrollElem(event, scrollBtn);
      popupMenu.classList.remove('active');
    }
  });

  window.addEventListener('resize', () => {
    const width = window.screen.width;

    if (width < 768) {
      fixedMenuScroll();
    } else {
      menuMobile.classList.remove('fixed');
    }
  });

  fixedMenuScroll();
};

export default menu;
