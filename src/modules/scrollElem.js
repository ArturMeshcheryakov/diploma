const scrollElem = (event, item) => {
  const link = item.querySelector('a');
  let href;

  if (link) {
    href = link.getAttribute('href');
  } else {
    href = item.getAttribute('data-href');
  }

  const noHref = href.split('#');

  if (noHref[0] === '') {
    event.preventDefault();

    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export default scrollElem;