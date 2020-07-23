const chooseClub = () => {
  const clubsList = document.querySelector('.clubs-list');
  const btnList = clubsList.querySelector('p');

  const clubMenu = () => clubsList.classList.toggle('active');
  btnList.addEventListener('click', () => clubMenu());
};

export default chooseClub;
