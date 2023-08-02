//uzduotis 1
document.querySelector("#someForm").addEventListener("submit", submit1Handler);

const defaultBonus = 50;
const stazasInput = document.querySelector("#stazas");
const result1 = document.querySelector("#result1");

function submit1Handler(e) {
  e.preventDefault();
  stazas = stazasInput.value;
  if (stazas > 10 && stazas < 20) {
    result1.textContent = `Jusu bonusas: ${defaultBonus + 50} euru`;
  } else if (stazas >= 20) {
    result1.textContent = `Jusu bonusas: ${defaultBonus + 150} euru`;
  } else {
    result1.textContent = `Jusu bonusas: ${defaultBonus} euru`;
  }
}
console.log(Math.random());

//uzduotis 2
document
  .querySelector("#metai")
  .addEventListener("input", tikrinimasKeliamieji);
const defaultYear = 2023;
const yearInput = document.querySelector("#metai");

yearInput.value = defaultYear;
function tikrinimasKeliamieji() {
  year = yearInput.value;

  if (
    (year % 400 === 0 && year >= 1800 && year <= 2200) ||
    (year % 100 !== 0 && year % 4 === 0 && year >= 1800 && year <= 2200)
  ) {
    document.querySelector(
      "#uzd2res"
    ).textContent = `${year} metai turi 366 dienas ir yra keliamieji`;
  } else if (year > 2200 || year < 1800) {
    document.querySelector(
      "#uzd2res"
    ).textContent = `galimas metu intervalas nuo 1800 iki 2200`;
    //yearInput.value = 2023;
  } else {
    document.querySelector(
      "#uzd2res"
    ).textContent = `${year} metai turi 365 dienas ir nera keliamieji`;
  }
  console.log(result2);
}

//uzduotis 3
document.querySelector("#temp").addEventListener("input", convert);
//let resultF = 0;
function convert() {
  temp = document.querySelector("#temp").value;
  resultF = temp * (9 / 5) + 32;
  document.querySelector("#farenheit").value = resultF;
}
//uzduotis 4
const emailInput = document.querySelector("#email");
const checkInput = document.querySelector("#check");
document.querySelector("#register").addEventListener("click", registerHandler);

function registerHandler() {
  email = emailInput.value;
  isAgree = checkInput.checked;
  if (email && isAgree) {
    alert(`El. pastas ${email} sekmingai uzregistruotas`);
  } else {
    alert("Registracija nesekminga");
  }
}

// uzduotis 5

const vardasInput = document.querySelector("#name");
const numberInput = document.querySelector("#skaicius");
const resultInput = document.querySelector("#listas");

document.querySelector("#skaicius").addEventListener("input", createList);

function createList() {
  vardas = vardasInput.value;
  number = numberInput.value;
  result = resultInput.innerHTML;
  input = `<li>${vardas}</li>`;
  let rez = "";
  if (number > 0) {
    for (i = 1; i <= number; i++) {
      if (vardas && number && number > 0) {
        rez += input;
        console.log(result);
      }
    }
  } else {
    rez = "";
  }
  document.getElementById("listas").innerHTML = rez;
}

/// uzduotis 6
document.querySelector("#uzd6Number").addEventListener("input", paintTriangle);
const numberInput6 = document.querySelector("#uzd6Number");
const rez6Input = document.querySelector("#staciakampis");

function paintTriangle() {
  numb = numberInput6.value;
  rezas = rez6Input.innerHTML;
  star = "";
  br = "<br />";
  rezFin = "";
  if (numb > 0) {
    for (i = 1; i <= numb; i++) {
      star += "*";
      rezas = `${star}  ${br}`;
      rezFin += rezas;
    }
  } else {
    rezFin = "";
  }
  document.querySelector("#staciakampis").innerHTML = rezFin;
  console.log(rezas);
}
