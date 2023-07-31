// uzduotis 1

const vardas = "Vytautas";
const names = function (name) {
  alert(name);
};

/// uzduotis 2
function random(min = 1, max = 5) {
  let num = Math.random();
  num = num * max;
  num = num + min;
  num = Math.floor(num);
  console.log(num);
  return num;
}
//console.log(random());

// uzduotis 3
function sum(name, lastName) {
  const sum = name.length + lastName.length;
  return sum;
}
console.log(sum("Vytautas", "Berzvinskas"));

//uzduotis 4

function abc(raide) {
  let array = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "y",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "r",
    "s",
    "t",
    "u",
    "v",
    "z",
  ];
  raide--;
  raide = array[raide];
  return raide;
}
console.log(abc("2"));

// uzduotis 5
function calc(x, y, z) {
  if (z === "sum") {
    rez = x + y;
    return rez;
  } else if (z === "sub") {
    rez = x - y;
    return rez;
  } else if (z === "div") {
    rez = x / y;
    return rez;
  } else if (z === "multi") {
    fit = x * y;
    return fit;
  }
}
console.log(calc(5, 5, "sum"));

// uzduotis 6

function rnd(x, y) {
  skaicius = Math.random();
  skaicius = skaicius * 10;
  skaicius = skaicius + 1;
  skaicius = Math.floor(skaicius);
  return skaicius;
}
function qva(x) {
  z = x * x;
  return z;
}
console.log(qva(rnd()));
