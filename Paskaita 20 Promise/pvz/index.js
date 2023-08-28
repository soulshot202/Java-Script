const tbody = document.querySelector("tbody");
const perror = document.querySelector("p");
const buttonget = document.querySelector("button");
buttonget.addEventListener("click", getPeople);

async function getPeople() {
  tbody.innerHTML = "";
  const requestToBackend = new Promise((resolve, reject) => {
    const peopleArray = [
      { id: 1, name: "John", age: 25 },

      { id: 2, name: "Emily", age: 30 },

      { id: 3, name: "Michael", age: 22 },

      { id: 4, name: "Sarah", age: 28 },

      { id: 5, name: "David", age: 35 },
    ];
    setTimeout(() => {
      resolve(peopleArray);
      //reject("ERROR");
    }, 2000);
  });
  try {
    buttonget.disabled = true;
    const people = await requestToBackend;
    people.forEach((person) => {
      const tr = document.createElement("tr");
      const tdid = document.createElement("td");
      tdid.textContent = person.id;
      const tdname = document.createElement("td");
      tdname.textContent = person.name;
      const tdage = document.createElement("td");
      tdage.textContent = person.age;
      tr.append(tdid, tdname, tdage);
      tbody.append(tr);
    });
    console.log(people);
  } catch (error) {
    perror.textContent = error;
    console.log("error");
  }
  buttonget.disabled = false;
}

getPeople();
