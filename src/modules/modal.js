import scrollElem from './scrollElem'

const modal = () => {
  const popup = document.querySelectorAll('.popup');
  const btnModals = document.querySelectorAll('.js-modal');

  btnModals.forEach((item) => {
    item.addEventListener('click', () => {
      let dataPopup = item.getAttribute('data-popup');
      dataPopup = dataPopup.slice(1);

      popup.forEach((popupItem) => {
        if (popupItem.id === dataPopup) {
          popupItem.style.display = 'block';

          popupItem.addEventListener('click', (event) => {
            const target = event.target;
            const formContentModal = target.closest('.form-content');
            const closeIconModal = target.closest('.close_icon');
            const closeBtnModal = target.closest('.close-btn');

            if (!formContentModal || closeIconModal) popupItem.style.display = 'none';
            if (closeBtnModal) {
              const href = closeBtnModal.getAttribute('data-href');

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
