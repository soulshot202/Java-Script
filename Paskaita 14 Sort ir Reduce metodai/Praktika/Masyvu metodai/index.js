//Kaip matome - šitame masyve yra objektai (o iš objekto pasiimame reikšmę -
//t.y. property, rašydami objektas.property).
const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];
//Prafiltruojame masyvą, kad rodytų tik pilnamečius.
const filtered = people.filter(pilnameciai);
function pilnameciai(obj) {
  return obj.age >= 18;
}
console.log(filtered);

// 2. Pakoreguojame aukščiau nurodytą pratimą, kad pilnamečių array rodytų
// tik vardus (amžius jau nesvarbu). Tai rezultatas turi
//būti: ["Petras", "Antanas", "Diana"].
const vardai = filtered.map((vardasObj) => vardasObj.name);
//function vardasObj(obj) {
// return obj.name;
//}
console.log(vardai);
// 3. Antro pratimo array A-Z tvarka išrykiuokite. Optimizuokite kodą,
//kad visas veiksmas tilptų į vieną eilutę.

console.log(vardai.sort());

// 4. Sukurkite funkciją. Ji priims vieną argumentą - array su objektais,
//kurie turės du parametrus - name ir price. Grąžins - brangiausią
//ir pigiausią prekes. Turi veikti padavus neribotą kiekį elementų
//(pavyzdyje apačioje - tik du).
//Pvz:
//iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}])
//grąžins: {brangiausias: "lemonade", pigausias: "lime"}

const prekes = [
  { name: "limonadas", kaina: 1.5 },
  { name: "varske", kaina: 2.5 },
  { name: "silke", kaina: 11 },
  { name: "arbuzas", kaina: 5 },
  { name: "mesa", kaina: 4.99 },
  { name: "duona", kaina: 2 },
  { name: "traskuciai", kaina: 3 },
];
function piguBrangu(produktai) {
  const prekesRikiuotos = prekes.sort((a, b) => a.kaina - b.kaina);
  console.log(
    "Brangiausias:",
    prekesRikiuotos[prekesRikiuotos.length - 1].name,
    ", pigiausias:",
    prekesRikiuotos[0].name
  );
}
piguBrangu(prekes);
//console.log(prekesRikiuotos);
