//uzduotis 1
//Sukurkite su HTML formą su vienu laukeliu - fullname,
// ir po apačia - lentelę su dviem stulpeliais - name ir
// surname. JavaScripte pasirašykite konstruktorių, kuris
// turės vardą, pavardę ir metodą - atsirasti lentelėje.
//Kai vartotojas įrašo savo pilną vardą - su JS metodais
//išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų
//tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės
//padidinkit, o kitas - sumažinkit (capitalization); sukurkite
// objektą naudojant konstruktorių; ir galiausiai iškvieskite
// metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus,
//vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje
//išskirtas vardas ir pavardė, o ir leis tolimesniai projekto
//plėtrai (t.y. darbui su objektais).

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
//uzduotis 2
//Sukurkite HTML formą, kurioje vartotojas galės
//įrašyti (į input laukelius): car brand, model,
//mileage, price ir image (url laukelis).
//Per konstruktorių, sukuriams objektas ir
//jis atvaizduojamas po forma (CSS rašykite CSS'e)
// kaip atvaizduota nuotraukoje apačioje.
//Paspaudus ant automobilio bloko - turi alert
//išmesti kainą

//uzduotis 2
//Sukurkite HTML formą, kurioje vartotojas galės
//įrašyti (į input laukelius): car brand, model,
//mileage, price ir image (url laukelis).
//Per konstruktorių, sukuriams objektas ir
//jis atvaizduojamas po forma (CSS rašykite CSS'e)
// kaip atvaizduota nuotraukoje apačioje.
//Paspaudus ant automobilio bloko - turi alert
//išmesti kainą

const brandInput = document.querySelector("#brand");
const modelInput = document.querySelector("#model");
const priceInput = document.querySelector("#price");
const imageInput = document.querySelector("#imageUrl");
const mileageInput = document.querySelector("#mileage");
const mygtukas = document.querySelector("#submit");
document.querySelector("#form2").addEventListener("submit", formSubmit);
const body = document.querySelector("body");
const div = document.createElement("div");
const cars = [];
function formSubmit(e) {
  e.preventDefault();
  const brand = brandInput.value;
  const model = modelInput.value;
  const price = priceInput.value;
  const mileage = mileageInput.value;
  const image = imageInput.value;
  const newCar = new Car(brand, model, price, mileage, image);
  cars.push(newCar);

  newCar.addCar();
}

class Car {
  constructor(brand, model, price, mileage, image) {
    this.brand = brand;
    this.price = price;
    this.model = model;
    this.mileage = mileage;
    this.image = image;
    this.id = cars.length + 1;
  }
  addCar() {
    const img = document.createElement("img");
    const insideDiv = document.createElement("div");
    const h4 = document.createElement("h4");
    div.classList.add("flex");
    img.src = this.image;
    img.style.maxWidth = "290px";
    img.style.maxHeight = "250px";
    h4.textContent = this.brand + " " + this.model;
    insideDiv.style.margin = "10px";
    insideDiv.classList.add("inside-cont");
    insideDiv.id = this.id;

    body.append(div);
    div.appendChild(insideDiv);
    insideDiv.append(img, h4);
    insideDiv.addEventListener("click", () => alert(`Kaina: ${this.price}`));
  }
}

//uzduotis 3
//Prisimename darbą su masyvais: sukurkite funkciją,
// kuri priims masyvą ir išfiltruos visus
//pasikartojančius skaičius bei šį masyvą grąžins atgal
const array = [1, 2, 1, 1, 3, 4, 5, 5, 2, 3];
const filteredarray = [...new Set(array)];
console.log("uzduotis 3", filteredarray);
