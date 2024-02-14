document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const { value } = document.querySelector('input');

  const header = document.querySelector('h1');
  if (value.includes('@') && value.length >= 5) {
    header.innerHTML = 'Looks good!';
  } else {
    header.innerHTML = 'invalid email';
  }
});
