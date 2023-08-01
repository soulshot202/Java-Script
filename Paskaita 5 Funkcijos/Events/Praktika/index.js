//uzduotis 1
/* function alertas() {
  alert("Vytautas");
}
*/
// uzduotis 2
document
  .querySelector("#name")
  .addEventListener("click", () => alert("Vytautas"));
//document.querySelector("#name").addEventListener("click", tuk());
function tuk(x) {
  alert("Vytautas");
}

// uzduotis 3
document
  .querySelector("#name")
  .addEventListener(
    "click",
    () => (document.querySelector("p").textContent = "Apie mane")
  );

//uzduotis 4
document
  .querySelector("#sk")
  .addEventListener(
    "click",
    () => (document.querySelector("#skaicius").textContent = "2")
  );

//uzduotis 5
document
  .querySelector("#ilgasTekstas")
  .addEventListener("copy", () => alert("Kopijuoti draudziama"));

//uzduotis 6
function random(x, y) {
  let sk = Math.random();
  sk = sk * y;
  sk = sk + x;
  sk = Math.floor(sk);
  return sk;
}
document
  .querySelector("#but6")
  .addEventListener(
    "click",
    () => (document.querySelector("#random").textContent = random(1, 100))
  );

//uzduotis 7
document
  .querySelector("#over18")
  .addEventListener(
    "click",
    () => (document.querySelector("#over18").innerHTML += "<h1>Alus</h1>")
  );
document
  .querySelector("#no18")
  .addEventListener("click", () => alert("Nepilnametis - nieko neturim"));

//uzduotis 8
const win = random(1, 3);
console.log(win);

document
  .querySelector("#sk1")
  .addEventListener("click", () => (win === 1 ? alert("Yay") : alert("Nay")));
document
  .querySelector("#sk2")
  .addEventListener("click", () => (win === 2 ? alert("Yay") : alert("Nay")));
document
  .querySelector("#sk3")
  .addEventListener("click", () => (win === 3 ? alert("Yay") : alert("Nay")));

//uzduotis 9

document.body.addEventListener("click", () => {
  const isBtn = event.target.nodeName === "BUTTON";
  if (isBtn) {
    document.getElementById("nespausk").innerText = "Neklausote manęs";
  }
});

//uzduotis 10
document
  .querySelector("#uzd10")
  .addEventListener(
    "mousemove",
    () =>
      (document.querySelector("#uzd10").textContent = "Kiek galite neklausyti?")
  );
