//uzduotis 1
document
  .querySelector("#teatroForma")
  .addEventListener("submit", submitHandler);
const bilietoKaina = 6;
const amziusInput = document.querySelector("#amzius");

function submitHandler(e) {
  e.preventDefault();
  amzius = amziusInput.value;
  bilietasIki16 = bilietoKaina / 2;
  bilietas60Plius = (bilietoKaina / 3) * 2;
  if (amzius <= 16) {
    document.querySelector(
      "#uzd1"
    ).textContent = `Jusu bilieto kaina: ${bilietasIki16}`;
  } else if (amzius > 60) {
    document.querySelector(
      "#uzd1"
    ).textContent = `Jusu bilieto kaina: ${bilietas60Plius}`;
  } else {
    document.querySelector(
      "#uzd1"
    ).textContent = `Jusu bilieto kaina: ${bilietoKaina}`;
  }
}

// uzduotis 2
document.querySelector("#forma2").addEventListener("submit", submitHandler2);
const ageInput = document.querySelector("#age");
const checkInput = document.querySelector("#check");
const result = document.querySelector("#uzd2");

function submitHandler2(e) {
  e.preventDefault();
  amzius = ageInput.value;
  arNeteistas = checkInput.checked;
  if (amzius >= 18 && amzius <= 30 && arNeteistas) {
    result.textContent = "Jums gali tekti eiti i kariuomene";
  } else {
    result.textContent = "I kariuomene jums eiti nereikes";
  }
}
