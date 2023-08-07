document.querySelector("#personForm").addEventListener("submit", submitHandler);

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const shoeSizeInput = document.querySelector("#shoeSize");
const emailInput = document.querySelector("#email");
const tableBody = document.querySelector("tbody");
const burgerMenu = document.querySelector("i");
const aside = document.querySelector("aside");
const closeBurgerButton = document.querySelector("#closeBurgerButton");

burgerMenu.addEventListener("click", toggleBurger);
closeBurgerButton.addEventListener("click", toggleBurger);

function toggleBurger() {
  if (aside.classList.contains("offScreen")) {
    aside.classList.remove("offScreen");
    aside.classList.add("onScreen");
  } else {
    aside.classList.add("offScreen");
    aside.classList.remove("onScreen");
  }
}

function submitHandler(e) {
  e.preventDefault();
  const name = nameInput.value;
  const age = ageInput.value;
  const shoeSize = shoeSizeInput.value;
  const email = emailInput.value;

  const person = {
    name,
    age,
    shoeSize,
    email,
  };

  addPersonToTable(person);
}

function addPersonToTable(person) {
  const tr = document.createElement("tr");

  const tdName = document.createElement("td");
  tdName.textContent = person.name;
  const tdAge = document.createElement("td");
  tdAge.textContent = person.age;
  const tdShoeSize = document.createElement("td");
  tdShoeSize.textContent = person.shoeSize;
  const tdEmail = document.createElement("td");
  tdEmail.textContent = person.email;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";

  deleteButton.addEventListener("click", (e) => {
    deleteButtonHandler(e, tr);
  });

  const deleteTd = document.createElement("td");
  deleteTd.append(deleteButton);

  tr.append(tdName, tdAge, tdShoeSize, tdEmail, deleteTd);
  tableBody.append(tr);
}

function deleteButtonHandler(e, tr) {
  console.log(tr);
  tr.remove();
}
