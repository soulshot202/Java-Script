// 1. Parašyk array su penkiais mėgstamiausiais tavo skaičiais.
//Su reduce visus juos sudėk ir grąžink vieną skaičių.
const manoSkaiciai = [1, 15, 33, 101, 50];
const rezas = manoSkaiciai.reduce((a, v) => a + v);
console.log(rezas, "pirma uzduotis");

// 2. Ne vien skaičius sudėti galime.
//Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"])
// ir naudojant reduce - grąžink skaičių, kiek šiame array elementų
//yra su 3 simboliais (p.s. efektyviau turbūt su filter,
//bet šiuo atveju išbandome reduce).
const auto = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
const skaicius = auto.reduce((a, v) => {
  if (v.length === 3) {
    a++;

    return a;
  } else {
    return a;
  }
}, 0);
console.log(skaicius, "antra uzduotis");

// 3. Sukurk array su daug skaičių. Grąžink didžiausią skaičių
//iš array naudojant reduce.

const numbers = [
  1, 5, 88, 68, 885, 102, 350, 41, 446, 108, 100, 1050, 500, 9991,
];
const didziausias = numbers.reduce((a, v) => {
  if (a > v) {
    return a;
  } else {
    a = v;
    return a;
  }
});
console.log("didziausias skaicius", didziausias);
