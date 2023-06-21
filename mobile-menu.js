const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.navbar-menu-list').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

  /* Form Validation */

  const form = document.getElementById('myForm');
    const emailInput = document.getElementById('email');
    const errorText = document.getElementById('error');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = emailInput.value;
      const isLowerCase = email === email.toLowerCase();

      if (isLowerCase) {
        form.submit();
      } else {
        errorText.textContent = 'Email must be in lowercase.';
        errorText.style.display = 'block';
        errorText.style.color = 'red';
        errorText.style.borderColor = 'red';
      }
    });