const scrollTop = () => {
  const totop = document.getElementById('totop');
  const headerMain = document.querySelector('.header-main');

  const totopShow = () => {
    if (window.pageYOffset > headerMain.offsetHeight) {
      totop.classList.add('active');
    } else {
      totop.classList.remove('active');
    }
  };

  const backToTop = () => {
    const scrollStep = window.pageYOffset / 40;

    if (window.pageYOffset > 0) {
      window.scrollBy(0, -(scrollStep));
      setTimeout(backToTop, 0);
    }
  };

  totop.addEventListener('click', (event) => {
    event.preventDefault();
    backToTop();
  });

  window.onscroll = totopShow;
};

export default scrollTop;
