const x = 10;
const y = 20;
if (x > y) {
  console.log("taip x daugiau uz y");
} else {
  console.log("x nera daugiau uz y");
}

if (x === 15) {
  console.log("x yra 15");
} else {
  console.log("x nera lygus 15");
}

// ------

let kaRytApsirengti;
const arRytLyja = false;
const arRytSninga = true;
if (arRytLyja) {
  kaRytApsirengti = "Dzemperis";
} else if (arRytSninga) {
  kaRytApsirengti = "Striuke";
} else {
  kaRytApsirengti = "tai kuo dabar apsirenges";
}

console.log(kaRytApsirengti);

// ----
const num = 3;
if (num % 2 === 0) {
  console.log("lyginis");
} else {
  console.log("nelyginis");
}

// ---
const numberOfMusicans = 5;
//  +prompt ivesties vertimas i number formata
// const numberOfMusicans = +prompt("iveskite skaiciu");
if (numberOfMusicans === 0) {
  console.log("ne grupe");
} else if (numberOfMusicans === 1) {
  console.log("solo");
} else if (numberOfMusicans === 2) {
  console.log("duetas");
} else if (numberOfMusicans === 3) {
  console.log("trio");
} else if (numberOfMusicans === 4) {
  console.log("kvartetas");
} else if (numberOfMusicans > 4) {
  console.log("didele grupe");
} else {
  console.log("ne grupe");
}

// --------------

switch (numberOfMusicans) {
  case 0:
    console.log("nei sis nei tas");
    break;
  case 1:
    console.log("Solo");
    break;
  case 2:
    console.log("Duetas");
    break;
  case 3:
    console.log("Trio");
    break;
  case 4:
    console.log("kvartetas");
    break;
  case 4:
    console.log("Trio");
    break;

  default:
    console.log("neatitiko nei vieno varianto");
    break;
}
