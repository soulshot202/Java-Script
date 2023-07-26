const legalAge = 20;
const clientAge = prompt("iveskite savo amziu");
if (clientAge < legalAge && clientAge.length >= 1) {
  alert("jus esate per jaunas perziureti turini");
} else if (clientAge.length == 0) {
  alert("laukelis negali buti tuscias");
} else if (clientAge >= legalAge) {
  alert("sveikiname jus galite lankytis siame puslapyje");
} else {
  alert("iveskite skaiciu");
  // return(0);
}
//  uzduotis 2
const vardas = prompt("iveskite savo varda");
if (vardas.length > 6) {
  alert("tavo vardas yra ilgas");
}

// uzduotis 3
const yourAge = prompt("dar karta ivesk savo amziu");

if (yourAge >= 1 && yourAge <= 18) {
  alert(" esi dar vaikas");
} else if (yourAge.length == 0) {
  alert("laukelis negali buti tuscias");
} else if (yourAge >= 1 && yourAge <= 18) {
  alert(" esi dar vaikas");
} else if (yourAge >= 19 && yourAge <= 99) {
  alert("esi jau suaugęs");
} else if (yourAge >= 100 || yourAge <= 0) {
  alert("nep***sk proto su tokiu amziumi");
} else {
  alert("ivesk skaiciu zioply!");
}

// uzduotis 4
const car = "Porshek";
if (
  car === "VW" ||
  car === "Audi" ||
  car === "Bentley" ||
  car === "Bugatti" ||
  car === "Lamborghini" ||
  car === "Porshe"
) {
  alert("tavo auto priklauso VW Group!");
} else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
  alert("tavo auto priklauso BMW group");
} else {
  alert("tavo auto grupe nenustatyta");
}

// ---------

const car2 = "BMW2";
if (
  car2 === "VW" ||
  car2 === "Audi" ||
  car2 === "Bentley" ||
  car2 === "Bugatti" ||
  car2 === "Lamborghini" ||
  car2 === "Porsche"
) {
  alert("VW Group");
} else if (car2 === "BMW" || car2 === "Mini" || car2 === "Rolls-Royce") {
  alert("BMW Group");
} else {
  alert("Nei vienam");
}
