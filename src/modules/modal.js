import scrollElem from './scrollElem'

const modal = () => {
  const popup = document.querySelectorAll('.popup');
  const btnModals = document.querySelectorAll('.js-modal');

  const animationModal = (target) => {
    const formWrapper = target.querySelector('.form-wrapper');
    const animation = formWrapper.animate([
      {opacity: '0'},
      {opacity: '1'}
    ], 600);

    animation.addEventListener('finish', () => formWrapper.style.opacity = '1');
  };

  btnModals.forEach((item) => {
    item.addEventListener('click', (event) => {
      let dataPopup = item.getAttribute('data-popup');
      dataPopup = dataPopup.slice(1);

      if (dataPopup === 'gift') event.target.closest('.fixed-gift').classList.add('hide');

      popup.forEach((popupItem) => {
        if (popupItem.id === dataPopup) {
          popupItem.style.display = 'block';

          animationModal(popupItem);

          popupItem.addEventListener('click', (event) => {
            const target = event.target;
            const formContentModal = target.closest('.form-content');
            const closeIconModal = target.closest('.close_icon');
            const closeBtnModal = target.closest('.close-btn');

            if (!formContentModal || closeIconModal || closeBtnModal) if (popupItem.id === 'gift') document.querySelector('.fixed-gift').classList.remove('hide');
            if (!formContentModal || closeIconModal) popupItem.style.display = 'none';
            if (closeBtnModal) {
              scrollElem(event, closeBtnModal);
              popupItem.style.display = 'none';
            }
          });
        }
      });
    });
  });
};

export default modal;
