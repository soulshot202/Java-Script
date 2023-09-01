/*Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me

Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
Pridėkite prie lentelės (tarp id ir name) nuotrauką.
Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi.
*/
let rows = [];
function createTable() {
  const form = document.createElement("form");
  const searchInput = document.createElement("input");
  searchInput.type = "search";
  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.textContent = "Search";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = searchInput.value.trim();
    const filtered = rows.filter((row) =>
      row.name.toLowerCase().includes(search.toLowerCase())
    );
    tbody.innerHTML = "";
    filtered.forEach((row) => {
      generateTableRow(row);
    });
  });
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.id = "checkbox";
  checkbox.addEventListener("change", (e) => {
    tbody.innerHTML = "";
    if (e.target.checked) {
      const vips = rows.filter((row) => row.vip);
      vips.forEach((vip) => {
        generateTableRow(vip);
      });
    } else {
      rows.forEach((row) => {
        generateTableRow(row);
      });
    }
  });

  const label = document.createElement("label");
  label.textContent = " VIP";
  label.style.color = "green";
  label.setAttribute("for", "checkbox");

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const thId = document.createElement("th");
  thId.textContent = "ID";
  const thLastName = document.createElement("th");
  thLastName.textContent = "Last Name";
  const thPhoto = document.createElement("th");
  thPhoto.textContent = "Photo";
  const thName = document.createElement("th");
  thName.textContent = "Name";
  const thCity = document.createElement("th");
  thCity.textContent = "City";
  const thFavColor = document.createElement("th");
  thFavColor.textContent = "Favorite color";
  tr.append(thId, thPhoto, thName, thLastName, thCity, thFavColor);
  thead.append(tr);
  table.append(thead, document.createElement("tbody"));
  form.append(searchInput, submitButton);
  document.body.append(checkbox, label, form, table);
}

async function getRobots() {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me");
    if (response.ok) {
      const robots = await response.json();
      rows = robots;
      robots.forEach((robot) => generateTableRow(robot));
    }
  } catch (error) {
    console.log(error);
  }
}

function generateTableRow(data) {
  const fullname = data.name.split(" ");

  const tr = document.createElement("tr");

  const tdID = document.createElement("td");
  tdID.textContent = data.id;
  const tdName = document.createElement("td");
  const tdLastName = document.createElement("td");
  tdLastName.textContent = fullname[1];
  const tdPhoto = document.createElement("img");
  tdPhoto.src = data.image;
  tdName.textContent = fullname[0];
  const tdCity = document.createElement("td");
  tdCity.textContent = data.city;
  const tdFavColor = document.createElement("td");
  tdFavColor.textContent = data.fav_color;
  tr.append(tdID, tdPhoto, tdName, tdLastName, tdCity, tdFavColor);
  tbody.append(tr);
}
createTable();
const tbody = document.querySelector("tbody");
getRobots();
