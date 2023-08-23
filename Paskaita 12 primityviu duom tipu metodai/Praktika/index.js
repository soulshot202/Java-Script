// boolean metodai
const isLegalAge = true;
console.log(isLegalAge);
console.log(isLegalAge.toString());

// number metodai
//1 uzd

const milkPrice = 3.56;
Number.isInteger(milkPrice)
  ? console.log("jums centu ieskoti nereikes")
  : console.log("Jums prireiks ir centu");
// 2uzd
console.log("tiksli pieno kaina yra", milkPrice.toFixed(2));

//uzd 3
const kainaInput = document.querySelector("#kaina");
const kiekisInput = document.querySelector("#kiekis");
kiekisInput.addEventListener("input", skaiciuotiKaina);
kainaInput.addEventListener("input", skaiciuotiKaina);
const resField = document.createElement("h1");
document.body.append(resField);
function skaiciuotiKaina() {
  const kaina = +kainaInput.value;

  const kiekis = +kiekisInput.value;

  if (kaina && kiekis) {
    const suma = kaina * kiekis;
    resField.textContent = suma.toFixed(2);
  }
}

// string metodai
// 1uzd
const vardasInput = document.querySelector("#vardas");
const skaiciusInput = document.querySelector("#skaicius");
skaiciusInput.addEventListener("input", uzd1);
const uzd1Field = document.createElement("h1");
document.body.append(uzd1Field);

function uzd1() {
  let vardas = vardasInput.value;
  let skaicius = +skaiciusInput.value;
  if (vardas && skaicius && Number.isInteger(skaicius)) {
    uzd1Field.textContent = vardas.repeat(skaicius);
  } else {
    console.log("truksta duomenu arba skaicius nera sveikas");
  }
}

//uzd2
vardasInput.addEventListener("input", tikrintiVarda);

function tikrintiVarda() {
  vardas = vardasInput.value;
  console.log("vardo ilgis yra", vardas.trim().length);
}

//uzd 3
const varPavar = document.querySelector("#varPavar");

const h2 = document.createElement("h2");
const pavh2 = document.createElement("h2");
document.body.append(h2, pavh2);
document.querySelector("h2").id = "h2vardas";
document.querySelector("h2:last-child").id = "h2pavarde";
h2vardas = document.querySelector("#h2vardas");
h2pavarde = document.querySelector("#h2pavarde");
varPavar.addEventListener("blur", vardoSkaldymas);
function vardoSkaldymas() {
  pavarde = varPavar.value;
  if (pavarde.includes(" ")) {
    vpav = pavarde.split(" ");
    if (vpav.length > 2) {
      h2vardas.textContent = vpav[0];
      h2pavarde.textContent = vpav[1] + " " + vpav[2];
    } else {
      h2vardas.textContent = vpav[0];
      h2pavarde.textContent = vpav[1];
    }
  }
}
