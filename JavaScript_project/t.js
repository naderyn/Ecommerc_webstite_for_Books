// Get the team member cards
const teamMemberCards = document.querySelectorAll('.card');

// Add event listener for hover effect on team member cards
teamMemberCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hover');
  });

  card.addEventListener('mouseout', () => {
    card.classList.remove('hover');
  });
});
