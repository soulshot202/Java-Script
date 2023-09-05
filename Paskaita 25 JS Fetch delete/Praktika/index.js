//  Base URL = https://sophisticated-humane-dandelion.glitch.me
// 1. Pasirašykite GET, kuris atsisiųs visus produktus ir
// atvaizduos vieną šalia kito (4 per eilutę):
const HOST = "https://sophisticated-humane-dandelion.glitch.me";

async function getData() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const data = await response.json();
      data.forEach((el) => createItems(el));
      console.log(data);
    } else {
      console.log("kazkas negerai");
    }
  } catch (error) {
    console.log(error);
  }
}
getData();
function createItems(itemArr) {
  const result = document.querySelector("#uzd1");
  const container = document.createElement("div");
  container.classList.add("inner");
  const img = document.createElement("img");
  const productName = document.createElement("p");
  const price = document.createElement("h6");
  const deleteBtn = document.createElement("button");
  img.style.maxHeight = "150px";
  img.src = itemArr.image;
  price.textContent = `	\u20AC+${itemArr.price}`;
  productName.textContent = itemArr.title;
  deleteBtn.textContent = "istrinti";

  container.append(img, productName, price, deleteBtn);
  result.append(container);
}

//2. Kitame puslapyje pasirašykite formą, kuri pridės produktą.
// Pridėjus, išmes alert'ą, kad sėkmingai pridėtas ir nukreips
//(redirect) į pirminį produktų atvaizdavimo puslapį.

//3. Padarykite, kad paspaudus delete mygtuką - back-end'ui būtų
//išsiunčiamas Fetch Delete Request (baseURL + /:id). T.y. į url
// turėsite paduoti produkto ID parametrą (pvz.: DELETE baseURL/1
//ištrins pirmą įrašą).

//4. Padarykite, kad ištrynus produktą - puslapis persikrautų.
// Taip nėra labai efektyvu - pagalvokite, kokiais kitais būdais
// galima būtų pasiekti šį rezultatą? Hint: gavus success
// message iš back-end'o filtruoti duomenis ir ištrinti su
//front-end'u irgi.
