const host = "http://localhost:3000";

async function getPeople() {
  const response = await fetch(host + "/people");
  if (response.ok) {
    const people = await response.json();
    console.log(people);
  }
}

getPeople();

async function getPeopleByName() {
  const response = await fetch(
    "http://localhost:3000/people?age=25&name=Bob Builder"
  );
  if (response.ok) {
    const people = await response.json();
    console.log(people);
  }
}

// getPeopleByName();

async function addNewPerson() {
  const response = await fetch("http://localhost:3000/people", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Marius",
      age: 26,
    }),
  });
  console.log(response);
}

addNewPerson();
