///    BASE URL = https://robust-safe-crafter.glitch.me/
let properties = [];
const result = document.querySelector("#resContainer");

function takeProperties(data) {
  const res = document.querySelector("#resContainer");
  const div = document.createElement("div");
  div.classList.add(
    "d-flex",
    "flex-column",
    "col-2",
    "col-sm-4",
    "shadow-sm",
    "p-0",
    "col-lg-3"
  );
  const img = document.createElement("img");
  img.src = data.image;
  const price = document.createElement("h6");
  price.textContent = data.price;
  price.classList.add("mt-3", "ms-3", "mb-0");
  const city = document.createElement("p");
  city.textContent = data.city;
  city.classList.add("ms-3");
  const description = document.createElement("p");
  description.textContent = data.description;
  description.classList.add("mx-3", "mb-5");
  div.append(img, price, city, description);
  res.append(div);
}

function getProperties(properties) {
  result.innerHTML = "";
  properties.forEach((el) => {
    takeProperties(el);
  });
}

//console.log(properties);
async function fetchData() {
  try {
    const response = await fetch("https://robust-safe-crafter.glitch.me/");
    if (response.ok) {
      const data = await response.json();
      properties = data;
      getProperties(data);

      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
fetchData();

const visi = document.querySelector("#visi");
const vilnius = document.querySelector("#vilnius");
const kaunas = document.querySelector("#kaunas");
const klaipeda = document.querySelector("#klaipeda");
const siauliai = document.querySelector("#siauliai");
const panevezys = document.querySelector("#panevezys");
const allIds = [vilnius, kaunas, siauliai, klaipeda, panevezys, visi];
vilnius.addEventListener("click", () => {
  filterProperties("Vilnius", vilnius);
});
kaunas.addEventListener("click", () => {
  filterProperties("Kaunas", kaunas);
});
klaipeda.addEventListener("click", () => {
  filterProperties("Klaipeda", klaipeda);
});
siauliai.addEventListener("click", () => {
  filterProperties("Siauliai", siauliai);
});
panevezys.addEventListener("click", () => {
  filterProperties("Panevezys", panevezys);
});
visi.addEventListener("click", () => {
  getProperties(properties);
  allIds.forEach((e) => e.classList.remove("text-success"));
  allIds.forEach((e) => e.classList.add("mousePointer", "border"));
  visi.classList.remove("mousePointer", "border");
  visi.classList.add("text-success");
});

function filterProperties(city, id) {
  const filtered = properties.filter((e) => e.city === city);
  getProperties(filtered);
  allIds.forEach((e) => e.classList.remove("text-success"));
  allIds.forEach((e) => e.classList.add("mousePointer", "border"));
  id.classList.remove("mousePointer", "border");
  id.classList.add("text-success");
}
