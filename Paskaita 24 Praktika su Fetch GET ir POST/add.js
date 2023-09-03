const imgInput = document.querySelector("#imgUrl");
const priceInput = document.querySelector("#price");
const descriptionInput = document.querySelector("#description");
const cityInput = document.querySelector("#city");
const Form = document.querySelector("form");

Form.addEventListener("submit", (e) => {
  e.preventDefault();

  const img = imgInput.value;
  const city = cityInput.value;
  const description = descriptionInput.value;
  const price = priceInput.value;
  const propertyObj = {
    image: img,
    city: city,
    price: price,
    description: description,
  };
  addData(propertyObj);
});
//console.log(cityInput.value);

async function addData(data) {
  try {
    const response = await fetch("https://robust-safe-crafter.glitch.me/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: data.image,
        city: data.city,
        price: data.price,
        description: data.description,
      }),
    });
    if (response.ok) {
      alert("Success");
      window.location.replace("praktika.html");
    } else {
      alert("Kazkas nepavyko, bandykite dar karta");
    }
  } catch (error) {
    alert("kazkas nepavyko");
    console.log(error);
  }
}
const cButton = document.querySelector("#cancelButton");
cButton.addEventListener("click", () =>
  window.location.replace("praktika.html")
);
