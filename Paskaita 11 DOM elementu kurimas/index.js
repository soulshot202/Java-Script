const div = document.querySelector("div");

document.querySelector("button").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "Labas";
  p.style.fontSize = "20px";
  console.log(p);
  div.appendChild(p);
});
document.querySelector("#Delete").addEventListener("click", () => {
  const pToDelete = document.querySelector("p");
  pToDelete.remove;
});

const people = [
  { name: "John Doe", age: 30, city: "New York" },

  { name: "Jane Smith", age: 25, city: "Los Angeles" },

  { name: "Bob Johnson", age: 40, city: "Chicago" },

  { name: "Emily Williams", age: 28, city: "Houston" },
];
const tbody = document.querySelector("tbody");
for (i = 0; i < people.length; i++) {
  const tr = document.createElement("tr");
  const tdname = document.createElement("td");
  tdname.textContent = people[i].name;
  const tdAge = document.createElement("td");
  tdAge.textContent = people[i].age;
  const tdCity = document.createElement("td");
  tdCity.textContent = people[i].city;
  tr.append(tdname, tdAge, tdCity);
  tbody.append(tr);
}
