const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 2;

playerLivesCount.textContent = playerLives;

const getData = () => [
  { imgSrc: './images/gucci.jpg', name: 'gucci' },
  { imgSrc: './images/gucci.jpg', name: 'gucci' },
  { imgSrc: './images/balenciaga.jpg', name: 'balenciaga' },
  { imgSrc: './images/balenciaga.jpg', name: 'balenciaga' },
  { imgSrc: './images/chanel.jpg', name: 'chanel' },
  { imgSrc: './images/chanel.jpg', name: 'chanel' },
  { imgSrc: './images/dior.jpg', name: 'dior' },
  { imgSrc: './images/dior.jpg', name: 'dior' },
  { imgSrc: './images/givenchy.jpg', name: 'givenchy' },
  { imgSrc: './images/givenchy.jpg', name: 'givenchy' },
  { imgSrc: './images/vetements.jpg', name: 'vetements' },
  { imgSrc: './images/vetements.jpg', name: 'vetements' },
  { imgSrc: './images/ysl.jpg', name: 'ysl' },
  { imgSrc: './images/ysl.jpg', name: 'ysl' },
  { imgSrc: './images/zaggue.jpg', name: 'zaggue' },
  { imgSrc: './images/zaggue.jpg', name: 'zaggue' },
];

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

randomize();

const cardGenerator = () => {
  const cardData = randomize();

  cardData.forEach((item) => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    const section = document.querySelector('section');

    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';

    face.src = item.imgSrc;
    card.setAttribute('name', item.name);

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', (e) => {
      face.classList.toggle('toggleCard');
      card.classList.toggle('toggleCard');
      checkCards(e);
    });
  });
};

const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add('flipped');
  const flippedCards = document.querySelectorAll('.flipped');
  const toggleCard = document.querySelectorAll('.toggleCard');

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute('name') ===
      flippedCards[1].getAttribute('name')
    ) {
      flippedCards.forEach((card) => {
        card.classList.remove('flipped');
        card.style.pointerEvents = 'none';
      });
    } else {
      flippedCards.forEach((card) => {
        card.classList.remove('flipped');
        setTimeout(() => card.classList.remove('toggleCard'), 1200);
      });

      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        restart(`Sometimes by losing a battle you find a new way to win the war.
        Let's try again! 🦄 `);
      }
    }
  }
  if (toggleCard.length === 16) {
    restart(`You've won! That's dynamite.🥷🏻 🎉`);
  }
};

const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll('.face');
  let cards = document.querySelectorAll('.card');

  section.style.pointerEvents = 'none';

  cardData.forEach((item, index) => {
    cards[index].classList.remove('toggleCard');
    setTimeout(() => {
      cards[index].style.pointerEvents = 'all';
      faces[index].src = item.imgSrc;
      cards[index].setAttribute('name', item.name);
      section.style.pointerEvents = 'all';
    }, 1000);
  });
  playerLives = 6;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};
cardGenerator();
