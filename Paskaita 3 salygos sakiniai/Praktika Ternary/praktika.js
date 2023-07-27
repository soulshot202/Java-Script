// uzduotis 1

const name = "Vytautas";
name.length < 5
  ? console.log("Tavo vardas yra trumpas")
  : console.log("Tavo vardas yra ilgas");

//   uzduotis 2

const legalAge = 18;
const clientAge = -15;
clientAge >= legalAge
  ? console.log("Gali vairuoti")
  : console.log("Negali vairuoti");

//   uzduotis 3

clientAge < 0 || clientAge > 120
  ? console.log("neteisingas amzius")
  : clientAge >= legalAge
  ? console.log("Gali vairuoti")
  : console.log("Negali vairuoti");

//   uzduotis 4
const phone = "iPhone";
let isIphoneUser = phone === "iPhone";
console.log(isIphoneUser);
