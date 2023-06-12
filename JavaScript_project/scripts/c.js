const contactForm = document.getElementById('contactForm');
const responseDiv = document.getElementById('response');

contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate a server response
  setTimeout(() => {
    const response = `Thank you, ${email}! Your message "${message}" has been received.`;
    responseDiv.textContent = response;
    responseDiv.classList.remove('hidden');
    contactForm.reset();
  }, 1000);
}
