const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 6;

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
    const section = document.querySelector('section');
    const card = document.createElement('div');
    card.classList = 'card';

    // card.setAttribute('id', item.id);
    // card.setAttribute('name', item.name);

    const face = document.createElement('img');
    face.classList = 'face';
    face.src = item.imgSrc;

    const back = document.createElement('div');
    back.classList = 'back';

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', (e) => {
      //   console.log(e);
      //Run our flip animation
      face.classList.toggle('toggleCard');
      card.classList.toggle('toggleCard');
      //   checkCards(e);
    });
  });
};

// const checkCards = (e) => {
//   const clickedCard = e.target;
//   clickedCard.classList.add('flipped');
//   const flippedCards = document.querySelectorAll('.flipped');

//   const toggleCard = document.querySelectorAll('.toggleCard');

//   if (flippedCards.length === 2) {
//     if (
//       flippedCards[0].getAttribute('name') ===
//       flippedCards[1].getAttribute('name')
//     ) {
//       console.log('match');
//       flippedCards.forEach((card) => {
//         card.classList.remove('flipped');
//         // IF THERE'S A MATCH, STOP THE CARDS FROM FLIPPING ANY MORE
//         card.style.pointerEvents = 'none';
//       });
//     } else {
//       console.log('wrong');
//       flippedCards.forEach((card) => {
//         card.classList.remove('flipped');
//         setTimeout(() => card.classList.remove('toggleCard'), 1200);
//       });
//     }
//   }
// };
// const board = () => {
//   console.log('i will fight you');
// };

cardGenerator();
