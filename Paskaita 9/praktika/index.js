//uzduotis 1
const vardas = document.querySelector("#vardas");
vardas.addEventListener("click", changeVardas);

function changeVardas() {
  vardas.classList.add("vardas2x");
}

//uzduotis 2
const mygtukas = document.querySelector("#mygtukas");
document.querySelector("#mygtukas").addEventListener("mousemove", buttonRun);

function buttonRun() {
  if (mygtukas.classList == "virsus-kaire" || mygtukas.classList == "") {
    mygtukas.classList.remove("virsus-kaire");
    mygtukas.classList.add("apacia-desine");
  } else if (mygtukas.classList == "apacia-desine") {
    mygtukas.classList.remove("apacia-desine");
    mygtukas.classList.add("apacia-kaire");
  } else if (mygtukas.classList == "apacia-kaire") {
    mygtukas.classList.remove("apacia-kaire");
    mygtukas.classList.add("virsus-desine");
  } else if (mygtukas.classList == "virsus-desine") {
    mygtukas.classList.remove("virsus-desine");
    mygtukas.classList.add("virsus-kaire");
  }
}

//uzduotis 3
//padarytas antrame

//uzduotis 4
const nameInput = document.querySelector("#name");
nameInput.addEventListener("input", colorChange);
function colorChange() {
  let vardas = nameInput.value;
  console.log(vardas.length);

  if (vardas.length < 3 && vardas.length > 0) {
    document.body.style.backgroundColor = "red";
  } else if (vardas.length > 2) {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "";
  }
}
//uzduotis 5
const spalvos = ["red", "green", "yellow", "blue", "black", "white", "pink"];

document.querySelector("#randomColor").addEventListener("click", () => {
  document.querySelector("#randomColor").style.backgroundColor =
    spalvos[Math.floor(Math.random() * 7)];
});

//uzduotis 6
document.querySelector("#randomColor2").addEventListener("click", () => {
  let x = Math.floor(Math.random() * (255 + 1));
  let y = Math.floor(Math.random() * (255 + 1));
  let z = Math.floor(Math.random() * (255 + 1));
  document.querySelector(
    "#randomColor2"
  ).style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
});
