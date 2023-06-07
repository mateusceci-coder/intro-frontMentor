const form = document.querySelector("form");
const userInput = {};

userInput.firstName = document.querySelector("#firstName");
userInput.lastName = document.querySelector("#lastName");
userInput.email = document.querySelector("#email");
userInput.password = document.querySelector("#password");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  checkingInputs();
  checkingEmail(userInput.email.value);
});

function checkingInputs() {
  Object.entries(userInput).forEach(([key, id]) => {
    const errorMsg = document.getElementById(`${key}Error`);
    if (id.value === "") {
      id.classList.add("input-error");
      errorMsg.style.display = "flex";
      errorMsg.textContent = `${id.placeholder} cannot be empty`;
    } else {
      id.classList.remove("input-error");
      errorMsg.style.display = "none";
    }
  });
}

function checkingEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{3,}/)) {
    userInput.email.classList.add("input-error");
    const errorMsg = document.getElementById("emailError");
    errorMsg.style.display = "flex";
    errorMsg.textContent = "Looks like this is not an email";
  }
}
