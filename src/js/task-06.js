 const validationInput = document.querySelector("#validation-input");

validationInput.addEventListenerr("blur", handleBlur);
function handleBlur(event) {
  const validLength = parseInt(validationInput.getAttribute("data-length"));
  const inputValue = event.currentTarget.value.trim();
  const isInputValid = inputValue.length === validLength;

  if (isInputValid) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}
