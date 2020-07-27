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
      document.body.classList.add('over_hide');
      window.scrollBy(0, -(scrollStep));
      setTimeout(backToTop, 0);
    } else {
      document.body.classList.remove('over_hide');
    }
  };

  totop.addEventListener('click', (event) => {
    event.preventDefault();
    backToTop();
  });

  window.addEventListener('scroll', totopShow);
};

export default scrollTop;
