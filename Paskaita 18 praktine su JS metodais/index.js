//uzduotis 1
//Parašykite metodą klasėje, kuris pasakys
//ar žmogus yra pilnametis ar ne, pagal jo amžių

//p1.compareAge() => "Petras is old enough to drink";
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge() {
    if (this.age >= 18) {
      console.log("uzduotis 1:", this.name, "is old enough to drink");
    } else {
      console.log("uzduotis 1:", this.name, "not enough age to drink");
    }
  }
}
const p1 = new Person("Petras", 16);
p1.compareAge();

//uzduotis 2
//Parašykit funkciją, kuri priimtu mąsyvą sudarytą
//iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais
const array = [1, 2, "h", 3, "r", 4, "T", 5, "G"];
console.log(
  "uzduotis 2:",
  array.filter((e) => typeof e === "number")
);

//uzduotis 3
//Sukurk funkciją, kuri paims stringą kaip parametrą
//ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių)
const vardas = "Vytautas 12345 Berzvinskas";
const letters = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "ą",
  "č",
  "ę",
  "ė",
  "į",
  "š",
  "ų",
  "ū",
];

function checkString(string) {
  let stringas = "";
  for (let i = 0; i < string.length; i++) {
    parseInt(string[i]);
    if (letters.includes(string[i].toLowerCase())) {
      stringas += string[i] + string[i];
    } else {
      stringas += string[i];
    }
  }

  return stringas;
}

console.log("uzduotis 3:", checkString("labaS 15 Vakaras 20 kaip, sekasi?"));
//kitas variantas
//const duplicateAllLetters = (text) => text.split('').map(element => element.match(/[a-z]/i) ?
// element.repeat(2) : element).join('');
//console.log(duplicateAllLetters('Petras 123 Slekys'));

//uzduotis 4
//Parašykite funkciją, kuri tikrins ar paduotas
//post code - teisingas. Post code turi susidėti
//iš 5 skaičių, arba trijų skaičių ir dviejų raidžių.
//Jei yra tarpų - post code neteisingas

function checkPostCode(code) {
  if (
    (code.length === 5 &&
      !isNaN(Number(code[0])) &&
      !isNaN(Number(code[1])) &&
      !isNaN(Number(code[2])) &&
      letters.includes(code[3].toLowerCase()) &&
      letters.includes(code[4].toLowerCase())) ||
    (code.length === 5 &&
      !isNaN(Number(code[0])) &&
      !isNaN(Number(code[1])) &&
      !isNaN(Number(code[2])) &&
      !isNaN(Number(code[3])) &&
      !isNaN(Number(code[4])))
  ) {
    console.log("uzduotis 4:", "Kodas yra teisingas");
  } else {
    console.log("uzduotis 4:", "Neteisingas kodas");
  }
}
checkPostCode("123?l");
//kitas variantas
// const isValidPostCode = (postCode) =>
//   /^[0-9]{5}|[0-9]{3}[A-Za-z]{2}$/.test(postCode);
// console.log(isValidPostCode("abc123"));
// console.log(isValidPostCode("12345"));
// console.log(isValidPostCode("123ab"));

//uzduotis 5
//Sukurkite funkciją, kuri priims array ir
//prie kiekvieno array elemento pridės "7",
// nebent elementas baigsis "7"
const duomenys = [
  "La",
  "B7",
  "a5",
  "selas",
  "LAPE",
  "Gg",
  "dojUs3",
  "preZidentas777",
  "Ziede5",
];

console.log(
  "uzduotis 5:",
  duomenys.map((e) => (e !== "" && e[e.length - 1] !== "7" ? (e += "7") : e))
);
