document.querySelectorAll('.character-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
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
