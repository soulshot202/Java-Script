const host = "http://localhost:3000/people";

async function getPeople() {
  try {
    const response = await fetch(host);
    if (response.ok) {
      const people = await response.json();
      console.log(people);
    } else {
      console.log("something wrong");
    }
  } catch (error) {
    console.log(error);
  }
}

getPeople();

async function postNewPerson() {
  try {
    const response = await fetch(host, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Naujas Zmogus",
        age: 50,
      }),
    });
    if (response.ok) {
      alert("Naujas zmogus pridetas");
    } else {
      alert("Kazkas nepavyko");
    }
  } catch (error) {
    console.log(error);
  }
}
// postNewPerson();

async function deleteById() {
  const response = await fetch("http://localhost:3000/people/1", {
    method: "DELETE",
  });
  if (response.ok) {
    alert("istryne");
  } else {
    alert("kazkas negerai");
  }
}

deleteById();
