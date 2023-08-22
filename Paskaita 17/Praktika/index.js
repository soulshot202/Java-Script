//uzduotis 1

const fullNameInput = document.querySelector("#fullName");
fullNameInput.addEventListener("blur", splitName);

function splitName() {
  const vardas1 = new vardas(fullNameInput.value.trim());

  vardas1.takeNameToTable();
}
class vardas {
  constructor(fullName) {
    this.fullName = fullName;
    const nameArr = fullName.split(" ");
    const names = nameArr
      .filter((e) => {
        if (e !== "") {
          return e;
        }
      })
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase());

    this.firstName = names[0];
    this.lastName = names[1];
    delete this.fullName;
  }

  takeNameToTable() {
    const table = document.querySelector("tbody");
    const tr = document.createElement("tr");
    const tdLastName = document.createElement("td");
    const tdname = document.createElement("td");
    tdname.textContent = this.firstName;
    tdLastName.textContent = this.lastName;
    tr.append(tdname, tdLastName);
    table.append(tr);
  }
}

//uzduotis 3
const array = [1, 2, 1, 1, 3, 4, 5, 5, 2, 3];
const filteredarray = [...new Set(array)];
console.log(filteredarray);
