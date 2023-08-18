//  1. Parašykite funkciją, kuri priims minutes (number) ir
//grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".
function minToSec(min) {
  const seconds = min * 60;
  console.log(`${seconds} seconds`);
}
minToSec(5);

//  2. Parašykite funkciją, kuri priims varotojų amžių ir
//grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu,
//neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.
const metai = 21;
function nugyventaDienu(age) {
  console.log("nugyventa dienu:", age * 365);
}
nugyventaDienu(metai);

//  3. Parašykite arrow funkciją (viena eilutė),
//kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25

const fn = (n1) => n1 ** 2;
console.log("uzduotis 3", fn(2));
// 4.  Parašykite arrow funkciją (viena eilutę),
//kuri paėmus du skaičius (aukštį ir plotį) grąžintų
//trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50
const trikampioPlotas = (n1, n2) => (n1 * n2) / 2;
console.log("uzduotis 4", trikampioPlotas(10, 5));

// 5.  Parašykite funkciją, kuri paims parametrą String,
// ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".
const paskRaide = (string) => string[string.length - 1];
console.log("uzduotis 5", paskRaide("Vaida"));

//  6. Sukurkite funkciją, kuri paims stringą ir
//grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"
function atbulai(zodis) {
  let atbulas = "";
  for (let i = zodis.length - 1; i >= 0; i--) {
    atbulas += zodis[i];
  }
  atbulas = atbulas.toLowerCase();
  return atbulas;
}
console.log("uzduotis 6", atbulai("Zigmas"));
//console.log(typeof );

//  7. Parašykite funkciją, kuri paims array skaičių ir
// grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"
//?????????????????????????????????????
const skaiciai = [-1, -100, -5, 10, 0, 11];
const skaiciaiNeigiami = skaiciai.filter((x) => x < 0).sort((a, b) => b - a);

console.log("uzduotis 7", skaiciaiNeigiami[0]);

//  8. Sukurkite funkciją, kuri paims skaičių parametrą
//ir sugeneruos array su tiek random skaičių (nuo 1 - 10)),
//kiek parametre nurodyta.T.y. "3" => [1, 6, 3].
function randomSk(x) {
  const arr = [];
  for (let i = 0; i < x; i++) {
    arr.push(Math.floor(Math.random() * 10) + 1);
  }
  return arr;
}
console.log("uzduotis 8", randomSk(10));

//  9. Sukurkite arrow funkciją, kuri paimtų du skaičius
// ir grąžintų boolean value ar skaičių suma didesnė
// už 100 ar mažesnė (ir lygi).Pvz.: fn(10, 50) -> true

const palyg = (sk1, sk2) => sk1 + sk2 <= 100;
console.log("uzduotis 9", palyg(70, 60));

// 10.  Parašykite funkciją, kuri paimtų array
//(susideda iš objektų su vardu ir amžium) bei
// grąžina array išrykiuotą pagal amžių ir jei
//amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25},
//{name: „Kasparas“, age: 20}]) ->
//[{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25},
// {name: „Jonas“, age: 25}]

const duomenys = [
  { vardas: "Tadas", amzius: 26 },
  { vardas: "Maryte", amzius: 14 },
  { vardas: "Jurgita", amzius: 18 },
  { vardas: "Zigmas", amzius: 25 },
  { vardas: "Vaisvildas", amzius: 25 },
  { vardas: "Bronele", amzius: 86 },
  { vardas: "Stefa", amzius: 86 },
  { vardas: "Antanas", amzius: 86 },
];

function rikiuoti(v) {
  const surikiuota = v.sort((a, b) =>
    a.amzius === b.amzius ? a.vardas > b.vardas : a.amzius - b.amzius
  );

  return surikiuota;
}

console.log("uzduotis 10", rikiuoti(duomenys));
//  11. Parašykite funkciją, į kurią padavus datą, pasakys
//ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true
const iseigines = [
  "2023-05-05",
  "2023-09-01",
  "2023-12-24",
  "2023-10-01",
  "2024-01-01",
];
const data = new Date().toLocaleDateString();
function arIseigine(date) {
  if (iseigines.includes(date.toLocaleDateString())) {
    return true;
  } else {
    return false;
  }
}

console.log("uzduotis 11", arIseigine(new Date("2024-01-01")));

//  12. Sukurkite funkciją, kuri kaip parametrą
//gaus array su skaičiais. Funkcija turės grąžinti
// mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3
const skaiciuArr = [1, 2, 3, 5, 6, 7, 9, 10, 11, 12];
const trukstamas = tikr(skaiciuArr);
function tikr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
}

console.log("uzduotis 12", trukstamas);

// const missingNumber = (array) =>
//   array.find((x, i) => x + 1 !== array[i + 1]) + 1;
// console.log(missingNumber(skaiciuArr));
