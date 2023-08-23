const x = 3.65;
console.log(typeof x.toString());
console.log(x.toFixed(1));
console.log(x.toFixed(3));
console.log(x.toPrecision(3));
const xString = "3.78";
console.log(typeof Number.parseFloat(xString));
console.log(Number.parseInt(xString));
console.log(Number.parseInt("asd"));
console.log(Number.isNaN(NaN));
console.log(typeof +"3.08");

const catsName = "Rainius pinkis zalias bebras";
console.log(catsName.includes("uka"));
console.log(catsName.endsWith("s"));
console.log(catsName.length);
console.log(catsName.indexOf("x"));
console.log(catsName.slice(1, 3));
console.log(catsName.split(" "));
console.log(catsName.replace("Rainius", "Bubis"));

const isTrue = true;

const person = {
  name: "Vytautas",
  age: 37,
  auto: "VW",
};

const person1 = Object.freeze({
  name: "Tadas",
  age: 50,
  vidinisObjektas: {
    vardas: "vaflis",
    metai: 2015,
  },
});
person1.age = 15;
person1.lastName = "sasdasd";
person1.vidinisObjektas.naujaReiksme = "nauja";
console.log(person1);

console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1));

const arr = [
  ["name", "vardas", "zigmas", "petras1"],
  ["nascar", "Car", "vienas", "du"],
];

console.log(Object.fromEntries(arr));
