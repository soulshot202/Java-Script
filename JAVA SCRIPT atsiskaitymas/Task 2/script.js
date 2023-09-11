/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let count = 1;
const button = document.querySelector("#btn__element");
const res = document.querySelector("#btn__state");

button.addEventListener("click", () => {
  res.textContent = count;
  count++;
});
