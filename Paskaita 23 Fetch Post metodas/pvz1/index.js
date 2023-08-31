const peopleUl = document.querySelector("ul");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", async () => {
  const name = nameInput.value;
  const age = ageInput.value;
  try {
    const response = await fetch("http://localhost:3000/people", {
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
      console.log("Pavyko");
      getPeople();
    } else {
      alert("Something wrong");
      console.log("something wrong");
    }
  } catch (error) {
    console.log(error);
  }
});

async function getPeople() {
  peopleUl.innerHTML = "";
  try {
    const response = await fetch("http://localhost:3000/people");
    if (response.ok) {
      const people = await response.json();
      console.log(people);
      people.forEach((person) => {
        const li = document.createElement("li");
        li.textContent = `name - ${person.name} age - ${person.age}`;
        peopleUl.append(li);
      });
    } else {
      console.log("Something wrong");
    }
  } catch (error) {
    console.log(error);
  }
}

getPeople();
