/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const output = document.querySelector("#output");
const weightInput = document.querySelector("#search");
const form = document.querySelector("form");

function convertWheight() {
  output.innerHTML = "";
  const wheightKg = weightInput.value;
  const weightG = wheightKg / 0.001;
  const weightLb = wheightKg * 2.2046;
  const weightOz = wheightKg * 35.274;
  const gOut = document.createElement("p");
  gOut.textContent = weightG + " grams";
  gOut.style.textAlign = "center";
  const lbOut = document.createElement("p");
  lbOut.textContent = weightLb + " lb";
  lbOut.style.textAlign = "center";
  lbOut.style.color = "blue";
  const ozOut = document.createElement("p");
  ozOut.textContent = weightOz + " oz";
  ozOut.style.textAlign = "center";
  ozOut.style.color = "red";
  output.append(gOut, lbOut, ozOut);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  convertWheight();
});
