//  uzduotis 1
//Sukurkite modulį (t.y. file'ą - multi.js),
//kuriame būtų viena eksportuota (default)
//funkcija - multiplikacija. Ji priims du
//skaičius kaip parametrus ir grąžins šiuos skaičius
//sudaugintus. Pagrindiniame JS file'e (script.js)
//importuokite ir panaudokite šį modulį.
import multi from "./multi.js";

console.log("uzd1", multi(7, 6));

//uzduotis 2
//Sukurkite modulį pavadinimu header.js.
//Šiame modulyje bus funkcija, kuri paims app
//kaip argumentą, tačiau nieko negrąžins. Šios funkcijos tikslas
// - į app.innerHTML pridėti (t.y. +=) header'io kodą
//(pasirašykite standartinį HTML su inline CSS). Šį
//modulį importuokite į pagrindinį file'ą ir paduokite
//app, kuris bus document.body. Taip, puslapio viršuje
//turėtų atsivaizduoti header'is, kuris importuotas iš header.js.
import { addToHtml } from "./headers.js";
addToHtml(document.body);

//uzduotis 3
//Pridėkite dar vieną modulį, pavadinimu cars.js.
// Šis turės funkciją, kuri taip pat pasiims app ir
// nieko negrąžins (t.y. turinį pridės prie app.innerHTML).
// Tačiau šį kartą - funkcija viduj turės array
//(["BMW", "VW", "AUDI", "MB"]). O su innerHTML bus map
// metodas panaudotas ant array, kuris atvaizduos <ul>
//tag'e sugeneruos po kiekvieną automobilį <li> elemente (t.y.
//<ul>
//${array.map((item) => <li></li>}
//</ul>)
import { addCars } from "./cars.js";
addCars(document.body);
