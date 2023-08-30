// Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me

// 1. Naudojant tik JS, sukurkite lentelę ir į ją
// įrašykite duomenis (id, name, city, fav_color).
const robotai = {};
const body = document.querySelector("body");
const span = document.createElement("span");
const searchInput = document.createElement("INPUT");
const form = document.createElement("form");
const button = document.createElement("button");
const checkbox = document.createElement("INPUT");
const tbody = document.createElement("tbody");
const table = document.createElement("table");
const thead = document.createElement("thead");

const thName = document.createElement("th");
const thSurname = document.createElement("th");
const thId = document.createElement("th");
const thCity = document.createElement("th");
const thColor = document.createElement("th");
const thPhoto = document.createElement("th");

thId.style.width = "30px";
//thPhoto.style.width = "70px";
thName.style.width = "100px";
thSurname.style.width = "110px";
thColor.style.width = "100px";
thCity.style.width = "100px";
table.style.border = "3px solid black";
table.style.borderSpacing = "0px";

thead.append(thId, thPhoto, thName, thSurname, thCity, thColor);

thPhoto.textContent = "Photo";
thName.textContent = "Name";
thSurname.textContent = "Surname";
thId.textContent = "ID";
thColor.textContent = "Fav Color";
thCity.textContent = "City";

span.textContent = "VIP";
span.style.color = "green";
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("id", "check");
button.textContent = "Ieskoti";
searchInput.setAttribute("type", "search");
searchInput.setAttribute("id", "search");
form.append(searchInput, button);
body.append(checkbox, span, form);
table.append(thead, tbody);
body.append(table);

function getTable(duom) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = " ";

  //const checked = document.querySelector("input[type=checkbox]");

  duom.forEach((el) => {
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdName = document.createElement("td");
    const tdCity = document.createElement("td");
    const tdColor = document.createElement("td");
    const tdSurname = document.createElement("td");
    const photo = document.createElement("img");

    photo.src = el.image;
    tdId.textContent = el.id;
    tdName.textContent = el.name.split(" ")[0];
    tdSurname.textContent = el.name.split(" ")[1];
    tdCity.textContent = el.city;
    tdColor.textContent = el.fav_color;
    thId.style.border = "2px solid black";
    thPhoto.style.border = "2px solid black";
    thName.style.border = "2px solid black";
    thSurname.style.border = "2px solid black";
    thCity.style.border = "2px solid black";
    thColor.style.border = "2px solid black";
    tdId.style.textAlign = "center";
    tdName.style.textAlign = "center";
    tdSurname.style.textAlign = "center";
    tdCity.style.textAlign = "center";
    tdColor.style.textAlign = "center";
    tdId.style.border = "1px solid blue";
    tdName.style.border = "1px solid blue";
    tdSurname.style.border = "1px solid blue";
    tdCity.style.border = "1px solid blue";
    tdColor.style.border = "1px solid blue";
    photo.style.border = "1px solid blue";
    photo.style.height = "100%";

    tr.append(tdId, photo, tdName, tdSurname, tdCity, tdColor);
    tbody.append(tr);
  });
}

document.getElementById("check").addEventListener("change", (e) => {
  if (e.target.checked) {
    //document.querySelector("tbody").textContent = "";
    getTable(robotai.duom.filter((el) => el.vip));
  } else {
    getTable(robotai.duom);
  }
});
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTxt = document.querySelector("#search").value.toLowerCase();
  if (document.querySelector("#check").checked) {
    getTable(
      robotai.duom
        .filter((el) => el.vip)
        .filter((e) => e.name.toLowerCase().includes(searchTxt))
    );
  } else {
    getTable(
      robotai.duom.filter((e) => e.name.toLowerCase().includes(searchTxt))
    );
  }
});

async function getData() {
  try {
    let response = await fetch("https://magnetic-melon-yam.glitch.me");

    if (response.ok) {
      robotai.duom = await response.json();
      getTable(robotai.duom);
    } else {
      console.log("Kazkas negerai: " + response.status);
    }
  } catch (err) {
    console.log(err);
  }
}
getData();

//console.log(data);
// 2. Naudojant JS metodus, padalinkite vardą į dvi
//dalis: vardą ir pavardę (lentelėje).
// Padaryta

// 3. Pridėkite prie lentelės (tarp id ir name) nuotrauką.

// DONE
// 4. Sukurkite checkbox virš lentelės su JS.
//Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.

//DONE

// 5. Sukurkite virš lentelės ir search laukelį
//(forma su input type search ir mygtukas).
//Suvedus duomenis, lentelėje turi prasifiltruoti
// pagal vardą arba pavardę (fullname contains search string).
//Capitalizacija turėtų būti nesvarbi.

// DONE

/*    ATSAKYMAS ----------
const state = {};

const createCheckbox = () => {
  const checkbox = document.createElement('INPUT');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', 'isVipCheckbox');
  document.body.append(checkbox);

  const checkboxLabel = document.createElement('label');
  checkboxLabel.setAttribute('for', 'isVipCheckbox');
  checkboxLabel.innerText = 'VIP';
  document.body.append(checkboxLabel);
}

const createSearchForm = () => {
  const searchBox = document.createElement('input');
  searchBox.setAttribute('type', 'search');
  searchBox.setAttribute('id', 'search');
  searchBox.setAttribute('name', 'search');
  document.body.appendChild(searchBox);

  const searchButton = document.createElement('button');
  searchButton.innerHTML = 'Search for name';
  searchButton.setAttribute('id', 'searchButton');

  const form = document.createElement('form');
  form.append(searchBox, searchButton);
  document.body.append(form);
}

const createTableSkeleton = () => {
  const id = document.createElement('th');
  id.innerText = 'ID';

  const image = document.createElement('th');
  image.innerText = 'Image';

  const firstName = document.createElement('th');
  firstName.innerText = 'First name';

  const lastName = document.createElement('th');
  lastName.innerText = 'Last name';

  const city = document.createElement('th');
  city.innerText = 'City ';

  const favColor = document.createElement('th');
  favColor.innerText = 'Fav color';

  const tr = document.createElement('tr');
  tr.append(id, image, firstName, lastName, city, favColor);

  const thead = document.createElement('thead');
  thead.append(tr);

  const table = document.createElement('table');
  table.append(thead, document.createElement('tbody'));
  document.body.append(table);
}

function populateTable(robots) {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  robots.forEach(robot => {
    const id = document.createElement('td');
    id.innerText = robot.id

    const img = document.createElement('img');
    img.src = robot.image;
    img.setAttribute('alt', 'UserPicture');
    const image = document.createElement('td');
    image.append(img);

    const [name, surname] = robot.name.split(' ');

    const firstName = document.createElement('td');
    firstName.innerText = name;

    const lastName = document.createElement('td');
    lastName.innerText = surname;

    const city = document.createElement('td');
    city.innerText = robot.city;

    const favColor = document.createElement('td');
    favColor.innerText = robot.fav_color;

    const tr = document.createElement('tr')
    tr.append(id, image, firstName, lastName, city, favColor);
    tbody.append(tr);
  });
}

createCheckbox();
createSearchForm();
createTableSkeleton();

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const searchString = document.getElementById('search').value.toLowerCase();
  populateTable(state.robots.filter(robot => robot.name.toLowerCase().includes(searchString)));
})

document.getElementById('isVipCheckbox').addEventListener('change', (event) => {
  populateTable(event.target.checked ? state.robots.filter(robot => robot.vip) : state.robots);
});

async function fetchData() {
  try {
    let response = await fetch('https://magnetic-melon-yam.glitch.me');
    if (response.ok) {
      state.robots = await response.json();
      populateTable(state.robots);
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
*/
