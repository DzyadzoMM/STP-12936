document.querySelectorAll('[data-flip-card]').forEach(card => {
  card.addEventListener('click', () => {
    card.toggleAttribute('data-flipped');
  });
});
