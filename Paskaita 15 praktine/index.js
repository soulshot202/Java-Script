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
  return atbulas;
}
console.log("uzduotis 6", atbulai("Zigmas"));
//console.log(typeof );

//  7. Parašykite funkciją, kuri paims array skaičių ir
// grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

//  8. Sukurkite funkciją, kuri paims skaičių parametrą
//ir sugeneruos array su tiek random skaičių (nuo 1 - 10)),
//kiek parametre nurodyta.T.y. "3" => [1, 6, 3].

//  9. Sukurkite arrow funkciją, kuri paimtų du skaičius
// ir grąžintų boolean value ar skaičių suma didesnė
// už 100 ar mažesnė (ir lygi).Pvz.: fn(10, 50) -> true

// 10.  Parašykite funkciją, kuri paimtų array
//(susideda iš objektų su vardu ir amžium) bei
// grąžina array išrykiuotą pagal amžių ir jei
//amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25},
//{name: „Kasparas“, age: 20}]) ->
//[{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25},
// {name: „Jonas“, age: 25}]

//  11. Parašykite funkciją, į kurią padavus datą, pasakys
//ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true

//  12. Sukurkite funkciją, kuri kaip parametrą
//gaus array su skaičiais. Funkcija turės grąžinti
// mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3
