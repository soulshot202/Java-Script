console.log(123);
const itsRed = true;
console.log(itsRed);
let vardas = null;
console.log(vardas);
const didelisSkaicius = 1234564697797974466444646n;
const isGreater = 2<3;
console.log(isGreater);
const inf = Infinity;
console.log(inf);

const templateLiteral = `labas ate ${inf}`;
console.log(templateLiteral);

// let tekstasKabutese = "vytas sake \"labas\""
// console.log(tekstasKabutese);
let tekstasKabutese2 = `vytas sake "labas"`
console.log(tekstasKabutese2);
console.log(typeof didelisSkaicius);

let number = 9;
number = ++number;
console.log(number);

number += 6;
console.log(number);

const array = [1 , 2, true, "labas"];
console.log(array[0]);

const palyginimas = 4=="4";
console.log(palyginimas);

// turi buti abu true kad grazintu true
const logic = true && false;
console.log(logic);

// operatorius or jei bent viena true grazina true
const logic1 = true || false;
console.log(logic1);

// pavercia reiksme i priesinga
const logic2 = !true;
console.log(logic2);

const logic3 = !"cat"
console.log(logic3);

// jei teisinga grazinta pirma reiksme(teisinga) jei rezultatas false grazinta antra reiksme(neteisinga)
const ternary = 12 > 15 ?"teisinga" : "neteisinga"; 
console.log(ternary);

const pavarde = "petraitis";
const ternary2 = pavarde === "petraitis" ? "atspejau" : "neatspejau" ;
console.log(ternary2);