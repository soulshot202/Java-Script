document.querySelector("#someForm").addEventListener("submit", handleSubmit);

const emailInput = document.querySelector("input[type=email]");
const ageInput = document.querySelector("input[type=number]");
const commentInput = document.querySelector("input[type=text]");
const driversLicenseCheckBoxInput = document.querySelector(
  "input[type=checkbox]"
);
const helloBtn = document.querySelector("#helloBtn");
const makeSelect = document.querySelector("#make");
const h1 = document.querySelector("h1");
const passwordInput = document.querySelector("[type=password]");

driversLicenseCheckBoxInput.addEventListener("change", handleCheckBoxChange);
helloBtn.addEventListener("click", helloHandler);
passwordInput.addEventListener("input", passwordChangeHandler);

function passwordChangeHandler(e) {
  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
  const password = e.target.value;
  const test = regex.test(password);

  if (test) {
    passwordInput.classList.add(`good`);
    passwordInput.classList.remove(`bad`);
  } else {
    passwordInput.classList.add(`bad`);
    passwordInput.classList.remove(`good`);
  }
  // !password tas pats kas password === ""
  if (!password) {
    passwordInput.classList.remove(`good`);
    passwordInput.classList.remove(`bad`);
  }
}

function helloHandler() {
  const age = ageInput.value;
  const comment = commentInput.value;

  h1.textContent = `jusu amzius yra ${age} ir jusu nuomone apie pasauli: ${comment}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const email = emailInput.value;
  const age = ageInput.value;
  const comment = commentInput.value;
  const driversLicense = driversLicenseCheckBoxInput.checked;
  const make = makeSelect.value;
  console.log("Ivyko ivykis");

  const values = {
    email,
    age,
    comment,
    hasDriverLicense: driversLicense,
    make,
  };

  console.log(values);
}
function handleCheckBoxChange() {
  const isChecked = event.target.checked;
  if (isChecked) {
    makeSelect.classList.remove("hidden");
  } else {
    makeSelect.classList.add("hidden");
  }
  console.log("checbox changed");
}
