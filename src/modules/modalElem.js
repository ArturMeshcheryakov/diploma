import scrollElem from './scrollElem'

const modalElem = (dataPopup, status = true) => {
  const popup = document.querySelectorAll('.popup');

  const animationModal = (target) => {
    const formWrapper = target.querySelector('.form-wrapper');
    const animation = formWrapper.animate([
      {opacity: '0'},
      {opacity: '1'}
    ], 600);

    animation.addEventListener('finish', () => formWrapper.style.opacity = '1');
  };

  const showModal = (dataPopup) => {
    popup.forEach((popupItem) => {
      if (popupItem.id === dataPopup) {
        popupItem.style.display = 'block';

        animationModal(popupItem);

        if (status) {
          popupItem.addEventListener('click', (event) => {
            const target = event.target;
            const formContentModal = target.closest('.form-content');
            const closeIconModal = target.closest('.close_icon');
            const closeBtnModal = target.closest('.close-btn');

            if (!formContentModal || closeIconModal || closeBtnModal) if (popupItem.id === 'gift') document.querySelector('.fixed-gift').classList.remove('hide');
            if (!formContentModal || closeIconModal) popupItem.style.display = 'none';
            if (closeBtnModal) {
              if (closeBtnModal.closest('#gift')) {
                scrollElem(event, closeBtnModal);
              }
              popupItem.style.display = 'none';
            }
          });
        }
      } else {
        popupItem.style.display = 'none';
      }
    });
  };

  showModal(dataPopup);
};

export default modalElem;
