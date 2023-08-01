document.querySelector("#forma").addEventListener("submit", submitHandler);
const submit = document.querySelector("#forma");
const amziusInput = document.querySelector("input[type=number]");
const vardasInput = document.getElementById("vardas");

submit.addEventListener("submmit", submitHandler);

function submitHandler(e) {
  e.preventDefault();
  vardas = vardasInput.value;
  amzius = amziusInput.value;
  console.log(vardas + " " + amzius);
  alert(`Tavo vardas: ${vardas}`);
  document.querySelector("#uzd2").textContent = `Tau yra ${amzius} metu(ai)`;
  if (amzius >= 18) {
    document.querySelector("#uzd3").textContent = `${vardas} Vairuoti gali`;
  } else {
    document.querySelector(
      "#uzd3"
    ).textContent = `${vardas} dar tik mokysis vairuoti`;
  }
}
