// console.log(window.innerHeight);
// document.body.style.backgroundColor = "green";
const h1 = document.getElementById("manoId");
console.log(h1);
h1.style.color = "Blue";
const divs = document.getElementsByTagName("div");
console.log(divs);
const klase = document.getElementsByClassName("pirma");
console.log(klase);
const divSuVardu = document.getElementsByName("antras");
console.log(divSuVardu);

const h1Querry = document.querySelector("#manoId");
console.log(h1Querry);
const divs2 = document.querySelectorAll("div");
console.log(divs2);
const divClass = document.querySelectorAll(".pirma");
console.log(divClass);
const divsNames = document.querySelectorAll(`[name = "antras"]`);
console.log(divsNames);
const h2inDiv = document.querySelector("div > h2");
console.log(h2inDiv);

const obj = {
  name: "Darius",
  age: 33,
  lastName: "Kazemekas",
  parents: ["Jonas", "Aldona"],
  car: {
    years: 2000,
    brand: "BMW",
    seats: {
      pirmaSedyne: "Melyna",
      antraSedyne: "Zalia",
      treciaSedyne: "Raudona",
    },
  },
};
console.log(obj.lastName);
console.log(obj.car.seats.antraSedyne);
obj.lastName = "Petraitis";
console.log(obj.lastName);

console.log(obj);

obj.address = "gerosios vilties gatve";
delete obj.name;

console.log(obj);
const numeris = Math.abs(-100);
console.log(numeris);

const saknis = Math.sqrt(49);
console.log(saknis);

const saknis3 = Math.cbrt(8);
console.log(saknis3);

h1.textContent += " sikna nauji metai";
