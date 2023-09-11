/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const output = document.querySelector("#output");
const host = "./cars.json";

async function fetchData() {
  try {
    const response = await fetch(host);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error.message);
  }
}

function createCard(card) {
  const brand = document.createElement("h3");
  brand.style.textAlign = "center";
  brand.style.textDecoration = "underline";
  brand.style.margin = "10px";
  brand.style.color = "blue";

  const container = document.createElement("div");
  container.style.width = "200px";
  container.style.border = "1px solid red";

  const title = document.createElement("p");
  title.textContent = "Models --->";
  title.style.textAlign = "center";
  title.style.color = "green";

  const ul = document.createElement("ul");
  ul.style.marginLeft = "20px";
  container.style.margin = "20px";
  brand.textContent = card.brand;

  card.models.forEach((el) => {
    const li = document.createElement("li");

    li.textContent = el;
    ul.append(li);
  });
  container.append(brand, title, ul);
  output.append(container);
}

async function showData() {
  output.innerHTML = "";
  const data = await fetchData();
  data.forEach((el) => createCard(el));
}
showData();
