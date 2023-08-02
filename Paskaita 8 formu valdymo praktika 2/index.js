document.querySelector("#forma1").addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();
}

console.log(Math.random());

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
piestiL(4);

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
piestiC(5);

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
