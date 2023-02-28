const emailInput = document.querySelector("#email");
const submitButton = document.querySelector(".btn");
const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.querySelector("#error-message");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const emailRegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegExp.test(email)) {
    // Mostrar mensaje de error y icono
    errorIcon.style.display = "block";
  } else {
    // Enviar formulario
  }
});

submitButton.addEventListener("click", function () {
  if (!emailInput.checkValidity()) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});

emailInput.addEventListener("input", function () {
  if (emailInput.checkValidity()) {
    errorMessage.style.display = "none";
    errorIcon.style.display = "none";
  }
});
