let nav = document.getElementById('navigation');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function toggleMenu() {
  nav.classList.toggle('active');
}

function dropdownActive(button) {
  button.parentElement.classList.toggle('dr-active');
}

function submitEmail() {
  let input = document.getElementById('email');
  if (!input.value.match(validRegex)) {
    input.value = '';
    input.placeholder = 'This is not an email';
  } else {
    input.placeholder = 'Email';
    input.parentElement.reset();
  }
  event.preventDefault();
}
