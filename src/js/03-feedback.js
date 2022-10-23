import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

checkLocalStorage();

form.addEventListener(
  'input',
  _.throttle(event => {
    event.preventDefault();
    handleInput();
  }, 500)
);

function handleInput(event) {
  const inputValues = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputValues));
}

function checkLocalStorage() {
  const savedInputs = localStorage.getItem('feedback-form-state');

  if (savedInputs) {
    const parsedInputs = JSON.parse(savedInputs);
    email.value = parsedInputs.email;
    message.value = parsedInputs.message;
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const result = localStorage.getItem('feedback-form-state');
  const parsedResult = JSON.parse(result);
  console.log(parsedResult);
  form.reset();
  localStorage.removeItem('feedback-form-state');
});
