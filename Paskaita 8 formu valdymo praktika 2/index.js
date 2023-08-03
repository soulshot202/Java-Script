document.querySelector("#forma1").addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();
}

//uzduotis 1

function piestiL(n) {
  starV = "";
  starH = "L";

  br = "<br />";
  rezFin = "";
  if (n > 1) {
    for (i = 1; i < n; i++) {
      starV += "L<br>";
      starH += "L";

      rezas = `${starV} ${starH} ${br}`;
      //rezFin = rezas;
    }
  } else if (n === 1) {
    rezas = "L";
  } else {
    rezFin = "";
  }
  document.querySelector("#raideL").innerHTML = rezas;
}
piestiL(7);

//uzduotis 2

function piestiC(n) {
  starV = "C<br>";
  starH = "";

  br = "<br />";
  rezFin = "";
  if (n > 1) {
    for (i = 1; i < n; i++) {
      starH += "C";
      if (i === n - 1) {
        starV += "C";
      } else {
        starV += "C<br>";
      }

      rezas = `${starH}${starV}${starH}`;
      //rezFin = rezas;
    }
  } else if (n === 1) {
    rezas = "C";
  } else {
    rezFin = "";
  }
  document.querySelector("#raideC").innerHTML = rezas;
}
piestiC(6);

//uzduotis 3
document.querySelector("#name").addEventListener("blur", kuritSarasa);
const nameInput = document.querySelector("#name");

function kuritSarasa() {
  name = nameInput.value;
  if (!document.querySelector("#vardaiList").textContent) {
    document.querySelector("#vardaiList").textContent += `${name}.`;
  } else {
    esamaInfo = document.querySelector("#vardaiList").textContent;
    document.querySelector("#vardaiList").textContent = `${name}, ${esamaInfo}`;
  }
}

// uzduotis 4
document.querySelector("#skaicius1").addEventListener("input", palyginimas);
document.querySelector("#skaicius2").addEventListener("input", palyginimas);
const skaicius1Input = document.querySelector("#skaicius1");
const skaicius2Input = document.querySelector("#skaicius2");

function palyginimas(sk1, sk2) {
  sk1 = skaicius1Input.value;
  sk2 = skaicius2Input.value;
  intervalas1 = Math.abs(100 - sk1);
  intervalas2 = Math.abs(100 - sk2);
  if (sk1 && sk2 && intervalas1 === intervalas2) {
    document.querySelector(
      "#uzd4Result"
    ).textContent = `${sk1} ir ${sk2} yra vienodai nutole nuo 100`;
    // alert(`${sk1} ir ${sk2} yra vienodai nutole nuo 100`);
  } else if (sk1 && sk2 && intervalas1 > intervalas2) {
    document.querySelector(
      "#uzd4Result"
    ).textContent = ` ${sk2} yra arciau nuo 100`;
    //alert(` ${sk2} yra arciau nuo 100`);
  } else if (sk1 && sk2 && intervalas1 < intervalas2) {
    document.querySelector(
      "#uzd4Result"
    ).textContent = `${sk1} yra arciau nuo 100`;
    //alert(`${sk1} yra arciau nuo 100`);
  }
}

//uzduotis 5 + 6
const randomSk = Math.floor(Math.random() * 5 + 1);
console.log(randomSk);
const spejimasInput = document.querySelector("#spek");
attempt = 1;
function submitHandler(e) {
  e.preventDefault();

  spejimas = spejimasInput.value;
  if (spejimas == randomSk) {
    alert(`Sveikiname atspejai skaiciu is ${attempt} karto(u)`);
    attempt++;
  } else if (!spejimas) {
    alert("Nepasirinkai skaiciaus");
  } else {
    alert(`Neatspejai skaiciaus is ${attempt} karto(u)`);
    attempt++;
  }
}

//bonus 6

document.querySelector("#num1").addEventListener("click", arAtspejau);
document.querySelector("#num2").addEventListener("click", arAtspejau);
document.querySelector("#num3").addEventListener("click", arAtspejau);
document.querySelector("#num4").addEventListener("click", arAtspejau);
document.querySelector("#num5").addEventListener("click", arAtspejau);
let attempt2 = 1;
function arAtspejau() {
  num1 = document.querySelector("#num1").checked;
  num2 = document.querySelector("#num2").checked;
  num3 = document.querySelector("#num3").checked;
  num4 = document.querySelector("#num4").checked;
  num5 = document.querySelector("#num5").checked;
  if (num1 && randomSk === 1) {
    alert(`Sveikiname atspejai skaiciu is ${attempt2} karto(u)`);
    attempt2++;
  } else if (num2 && randomSk === 2) {
    alert(`Sveikiname atspejai skaiciu! Bandymai: ${attempt2} `);
    attempt2++;
  } else if (num3 && randomSk === 3) {
    alert(`Sveikiname atspejai skaiciu! Bandymai: ${attempt2}`);
    attempt2++;
  } else if (num4 && randomSk === 4) {
    alert(`Sveikiname atspejai skaiciu! Bandymai: ${attempt2}`);
    attempt2++;
  } else if (num5 && randomSk === 5) {
    alert(`Sveikiname atspejai skaiciu! Bandymai: ${attempt2}`);
    attempt2++;
  } else {
    alert(`Neatspejai skaiciaus.. Bandymai: ${attempt2}`);
    attempt2++;
  }
}

//bonus 2
document.querySelector("#speti").addEventListener("change", tikrintiSpejima);
const valueInput = document.querySelector("#speti");
let attempt3 = 1;
function tikrintiSpejima() {
  userNum = valueInput.value;
  if (userNum == randomSk) {
    alert(`Valiooo. Skaicius atspetas is ${attempt3} karto`);
    attempt3++;
  } else {
    alert(`Neatspejai skaiciaus is ${attempt3} karto`);
    attempt3++;
  }
}
