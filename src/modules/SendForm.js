import modalElem from './modalElem'

const sendForm = () => {
  const form = document.querySelectorAll('form');

  const formSubmit = (form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const elementsForm = [...form.elements].filter((item) => {
        return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
      });

      const checkClubs = form.querySelectorAll('.club');
      let bool = true;
      let check = false;
      let button = event.submitter;

      checkClubs.forEach((item) => {
        item.classList.remove('error');
        if (item.querySelector('[name="club-name"]').checked) check = true;
      });

      elementsForm.forEach((item) => {
        if (item.name && (item.name === 'name')) {
          if (item.value.match(/^[^a-zA-Z][^a-zA-Z0-9-_\.]{1,20}$/)) {
            item.style.border = '2px solid green';
          } else {
            item.style.border = '2px solid red';
            bool = false;
          }
        } else if (item.name && item.name === 'phone') {
          if (item.value.match(/^\+?[78]([-\s()]*\d){10}$/)) {
            item.style.border = '2px solid green';
          } else {
            item.style.border = '2px solid red';
            bool = false;
          }
        } else if (item.name && item.name === 'check') {
          if (item.checked) {
            item.closest('.personal-data').classList.remove('error');
          } else {
            item.closest('.personal-data').classList.add('error');
            bool = false;
          }
        } else if (item.name && item.name === 'club-name') {
          if (!check) {
            if (item.checked) {
              item.closest('.club').classList.remove('error');
            } else {
              item.closest('.club').classList.add('error');
              bool = false;
            }
          } else {
            bool = true;
          }
        }
      });

      if (bool) {
        const formData = new FormData(form);
        const thankContent = document.querySelector('#thanks .form-content');
        let thankContentTitle = thankContent.querySelector('h4');
        let thankContentText = thankContent.querySelector('p');
        let body = {};

        thankContentTitle.innerHTML = 'Отправка!';
        thankContentText.innerHTML = `Идет отпрака данных. <br> Данные отправляются в ближайшее время придет ответ.`;
        thankContent.querySelector('button').style.opacity = 0;
        modalElem('thanks', false);

        button.disabled = true;

        formData.forEach((val, key) => {
          body[key] = val;
        });

        const formClear = () => {
          elementsForm.forEach((item) => {
            if (item.name === 'name' || item.name === 'phone') {
              item.value = '';
              item.style.border = '';
              button.disabled = false;
            }
          });
        };

        postData(body)
          .then((response) => {
            if (response.status !== 200) throw new Error('status network not 200');
            thankContentTitle.innerHTML = 'Спасибо!';
            thankContentText.innerHTML = `Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.`;
            thankContent.querySelector('button').style.opacity = 1;
            modalElem('thanks');
            formClear();
          })
          .catch(() => {
            thankContentTitle.innerHTML = 'Ошибка!';
            thankContentText.innerHTML = `Что-то пошло не так. <br> Мы уже разбираемся с этим.`;
            thankContent.querySelector('button').style.opacity = 1;
            modalElem('thanks');
            formClear();
          });
      }
    });
  };

  form.forEach((item) => {
    formSubmit(item);
  });

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };
};

export default sendForm;