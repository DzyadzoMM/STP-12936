// document.querySelectorAll('.character-card').forEach(card => {
//   card.addEventListener('click', () => {
//     card.classList.toggle('is-flipped');
//   });
// });

// document.querySelectorAll('[data-flip-card]').forEach(card => {
//   card.addEventListener('click', () => {
//     const isFlipped = card.hasAttribute('data-flipped');
//     if (isFlipped) {
//       card.removeAttribute('data-flipped');
//     } else {
//       card.setAttribute('data-flipped', '');
//     }
//   });
// });

document.querySelectorAll('[data-flip-card]').forEach(card => {
  card.addEventListener('click', () => {
    card.toggleAttribute('data-flipped');
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   const characterCards = document.querySelectorAll('.character-card');

//   characterCards.forEach(card => {
//     card.addEventListener('click', () => {
//       card.classList.toggle('is-flipped');
//     });
//   });
// });
