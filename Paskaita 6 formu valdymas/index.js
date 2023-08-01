document.querySelector("#someForm").addEventListener("submit", handleSubmit);

const emailInput = document.querySelector("input[type=email]");
const ageInput = document.querySelector("input[type=number]");
const commentInput = document.querySelector("input[type=text]");
const driversLicenseCheckBoxInput = document.querySelector(
  "input[type=checkbox]"
);
const makeSelect = document.querySelector("#make");
driversLicenseCheckBoxInput.addEventListener("change", handleCheckBoxChange);

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
