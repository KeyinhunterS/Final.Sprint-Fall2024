// Simple Contact Form Validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Thank you for your message, ' + name + '!');
    form.reset();
  } else {
    alert('Please fill out all fields.');
  }
});
