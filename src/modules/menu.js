import scrollElem from './scrollElem'

const menu = () => {
  const popupMenu = document.querySelector('.popup-menu');
  const menuMobile = document.querySelector('.menu__mobile');

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
};

export default menu;
