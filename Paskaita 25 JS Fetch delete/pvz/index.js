const HOST = "http://localhost:3000/people";

const container = document.querySelector(".container");
const form = document.querySelector("#form");

async function fetchPeople() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const people = await response.json();
      people.forEach((person) => {
        generatePersonCard(person);
      });
    } else {
      alert("Failed to fetch");
    }
  } catch (error) {
    alert("Something went wrong");
  }
}

function generatePersonCard(person) {
  const card = document.createElement("div");
  card.classList.add("card");

  const pName = document.createElement("p");
  pName.textContent = person.name;

  const pAge = document.createElement("p");
  pAge.textContent = person.age;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "DELETE";

  deleteButton.addEventListener("click", async () => {
    console.log(person.id);
    try {
      const response = await fetch(HOST + `/${person.id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        card.remove();
      } else {
        alert("Failed to delete person");
      }
    } catch (error) {
      console.log(error);
    }
  });

  card.append(pName, pAge, deleteButton);

  container.append(card);
}

function generateForm() {
  const labelName = document.createElement("label");
  labelName.textContent = "Name";
  labelName.setAttribute("for", "name");
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.id = "name";

  const labelAge = document.createElement("label");
  labelAge.textContent = "Age";
  labelAge.setAttribute("for", "age");
  const inputAge = document.createElement("input");
  inputAge.type = "number";
  inputAge.id = "age";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";

  submitButton.addEventListener("click", async () => {
    try {
      const name = inputName.value;
      const age = inputAge.value;

      const response = await fetch(HOST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
        }),
      });

      if (response.ok) {
        const person = await response.json();
        console.log(person);
        generatePersonCard({ name, age, id: person.id });
      } else {
        alert("nepavyko");
      }
    } catch (error) {
      console.log(error);
    }
  });

  form.append(
    document.createElement("br"),
    labelName,
    inputName,
    document.createElement("br"),
    labelAge,
    inputAge,
    document.createElement("br"),
    submitButton
  );
}

generateForm();

fetchPeople();
