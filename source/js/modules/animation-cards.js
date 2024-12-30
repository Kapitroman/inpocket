const animationCards = () => {
  const cardsContainer = document.querySelector('.resources__cards');

  if (!cardsContainer) {
    return;
  }

  const cardsList = Array.from(cardsContainer.querySelectorAll('.card'));

  cardsContainer.setAttribute('data-active', cardsList.length - 1);

  const clickCardHandler = (evt) => {
    evt.preventDefault();
    const number = evt.target.closest('.card').getAttribute('data-number');
    cardsContainer.setAttribute('data-active', number);
  }

  cardsList.forEach((item, index) => {
    item.setAttribute('data-number', index)
    item.addEventListener('click', clickCardHandler);
  });
}

export { animationCards };
