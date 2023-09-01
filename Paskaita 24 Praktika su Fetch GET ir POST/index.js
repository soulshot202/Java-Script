///    BASE URL = https://robust-safe-crafter.glitch.me/
let properties = [];

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
      console.log(properties);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
fetchData();
