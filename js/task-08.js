    const validationLogin = document.querySelector(".login-form");
    validationLogin.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = this.elements.email;
    const passwordInput = this.elements.password;

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Все поля должны быть заполнены!');
    return; 
  }
    const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

    console.log(formData); 
    emailInput.value = '';
    passwordInput.value = '';
});