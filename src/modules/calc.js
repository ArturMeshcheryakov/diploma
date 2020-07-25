const calc = () => {
  const calcBlock = document.querySelector('.calc');
  const priceTotal = document.getElementById('price-total');
  const promocode = document.querySelector('.promocode');
  const cardTypeFirst = document.querySelector('.calc [name="card-type"]');
  const cardNameFirst = document.querySelector('.calc [name="club-name"]');
  const price = {
    'mozaika': {
      '1': 1999,
      '6': 9900,
      '9': 13900,
      '12': 19990
    },
    'schelkovo': {
      '1': 2999,
      '6': 14990,
      '9': 21990,
      '12': 24990
    }
  };

  if (calcBlock) {
    const elemCheck = (elem) => {
      const input = document.querySelectorAll(elem);
      let result = '';

      input.forEach((item) => {
        if (item.checked) result = item.value;
      });

      return result;
    };

    const setValue = (elem, value, promo = false) => {
      let interval = false;
      let change = true;
      let step = 50;
      let input = calcBlock.querySelectorAll('input');
      const result = +elem.textContent;

      const ipnutEach = (bool) => {
        input.forEach((item) => {
          item.disabled = bool;
        });
      };

      if (promocode.value !== '' && promocode.value === 'ТЕЛО2019') value = Math.round(value - (value / 100) * 30);
      if (promo) value = Math.round((value / 70) * 100);

      if (result > value) {
        change = false;
      }
      else if (result < value) {
        change = true;
      }

      if (change) {
        interval = setInterval(function () {
          if (elem.innerHTML * 1 + step >= value) {
            elem.innerHTML = value;
            clearInterval(interval);
            ipnutEach(false);
          } else {
            elem.innerHTML = Math.round(elem.innerHTML * 1 + step);
            ipnutEach(true);
          }
        });
      } else {
        interval = setInterval(function () {
          if (elem.innerHTML * 1 - step <= value) {
            elem.innerHTML = value;
            clearInterval(interval);
            ipnutEach(false);
          } else {
            elem.innerHTML = Math.round(elem.innerHTML * 1 - step);
            ipnutEach(true);
          }
        });
      }
    };

    const priceShow = (club, month) => {
      for (let key in price) {
        if (club === key) {
          const item = price[key];

          for (let key in item) {
            if (month === key) {
              setValue(priceTotal, item[key]);
            }
          }
        }
      }
    };

    calcBlock.addEventListener('click', (event) => {
      const target = event.target;
      const cardType = target.closest('.calc [name="card-type"]');
      const cardName = target.closest('.calc [name="club-name"]');

      if (cardType) priceShow(elemCheck('.calc [name="club-name"]'), cardType.value);
      if (cardName) priceShow(cardName.value, elemCheck('.calc [name="card-type"]'));
    });

    let check = false;

    promocode.addEventListener('change', (event) => {
      const sum = +priceTotal.textContent;
      let promo = false;

      if (event.target.value !== '' && event.target.value === 'ТЕЛО2019') {
        check = true;
        setValue(priceTotal, sum);
      } else {
        event.target.value = '';
      }

      if (event.target.value === '' && check) {
        check = false;
        promo = true;
        setValue(priceTotal, sum, promo);
      }
    });

    priceShow(cardNameFirst.value, cardTypeFirst.value);
  }
};

export default calc;