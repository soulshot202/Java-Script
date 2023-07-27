let num = 10;
while (num < 17) {
  console.log(num);
  num++;
}
let num1 = 10;
do {
  console.log(num1);
  num1++;
} while (num1 > 17);

// ----------

for (let i = 0; i < 10; ++i) {
  console.log(i);
}

const zmones = ["Vytautas", "Migle", "Tautvydas"];
for (let i = 0; i < zmones.length; i++) {
  console.log("labas, " + zmones[i]);
}

// -----------

for (let i = 2; i <= 10; ++i) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
// ----

let laughter = "";
const userNo = 5;
// const userNo = +prompt("ivesk sveikaji skaiciu")
for (let i = 0; i < userNo; i++) {
  laughter += "ha";
}
console.log(laughter);
// ---
for (let i = 9; i >= 1; i--) {
  console.log("hello " + i);
}
