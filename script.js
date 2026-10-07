document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card) => {
    card.setAttribute('tabindex', '0');
  });
});
