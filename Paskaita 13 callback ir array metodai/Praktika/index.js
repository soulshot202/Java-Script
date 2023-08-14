//call back pratimas
function alertName(text) {
  alert(text);
}
function consoleName(text) {
  console.log(text);
}

function coreFunction(vardas, fun) {
  const vardas1 =
    vardas.charAt(0).toUpperCase() + vardas.slice(1).toLowerCase();
  fun(vardas1);
}

coreFunction("BoTeNis", consoleName);

// array metodai
//1. Nusikopijuok array (const cars = ["BMW", "VW", "Audi"])
//ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).
const cars = ["BMW", "VW", "Audi"];
function automobiliai(auto) {
  auto.forEach((car, x) => {
    console.log(x, car);
  });
  console.log();
}
automobiliai(cars);

//2. Pakoreguok pirmą pratimą, kad atspaudintum index:
//value (pvz: "0: BMW", "1: VW" ir t.t.).

//automobiliai(cars);

//3. Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok
// (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk,
//kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti
// teisinga kapitalizacija (pvz. "peTras" => "Petras").

const draugai = [
  "BArtas",
  "zIGmas",
  "StasiuS",
  "Antanas",
  "AudrOnĖ",
  "DRUPšAS",
];
function draugyste(draugas) {
  const draugai2 = draugas.map(
    (vardas) => vardas.charAt(0).toUpperCase() + vardas.slice(1).toLowerCase()
  );
  console.log(draugai2);
}

draugyste(draugai);

//4. Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant
//filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.
const drauguAmzius = [10, 15, 88, 15, 22, 36, 5, 74, 90];
function pilnameciaiDraugai(draugas) {
  const pilnametis = draugas.filter((drg) => drg >= 18);
  console.log(pilnametis);
}

pilnameciaiDraugai(drauguAmzius);

//5. Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas").
// Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
const LtMiestai = [
  "Vilnius",
  "Jurbarkas",
  "Raseiniai",
  "Viesvile",
  "Zapyskis",
  "Kaunas",
  "elektrenai",
];
function raskMiesta(miestas) {
  const radau = miestas.find((mst) => mst[0] == "R");
  console.log(radau);
}
raskMiesta(LtMiestai);

//6. Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar
//bent vienas miestas prasideda iš mažosios.
const lowerLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "v",
  "z",
];
function isMazosios(miestas) {
  const mazosios = miestas.some((mst) => lowerLetters.includes(mst[0]));
  console.log("ar bent vienas is mazosios", mazosios);
}
isMazosios(LtMiestai);

//7. Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas
// prasideda ir mažosios, bet ar visi iš didžiosios.

const upperLetters = lowerLetters.map((raide) => raide.toUpperCase());

function visiIsDidziosios(miestai) {
  const didziosios = miestai.every((miest) => upperLetters.includes(miest[0]));
  console.log("ar visi is didziosios raide", didziosios);
}
visiIsDidziosios(LtMiestai);
