import modalElem from './modalElem'

const modal = () => {
  const btnModals = document.querySelectorAll('.js-modal');

  btnModals.forEach((item) => {
    item.addEventListener('click', (event) => {
      let dataPopup = item.getAttribute('data-popup');
      dataPopup = dataPopup.slice(1);

      if (dataPopup === 'gift') event.target.closest('.fixed-gift').classList.add('hide');

      modalElem(dataPopup);
    });
  });
};

export default modal;
