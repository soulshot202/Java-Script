// uzduotis 1
const cos = Math.cos(0);
console.log(cos);

//uzduotis 2
const random1 = Math.floor(Math.random() * 5 + 1);
console.log(random1);

// uzduotis 3
const random2 = Math.floor(Math.random() * 8 + 5);
console.log(random2);

// uzduotis 4
const win = Math.floor(Math.random() * 5 + 1);
console.log(win);
if (win === 3) {
  alert("Sveikiname jus laimejote bilieta");
} else {
  alert("Deja, si karta nieko nelaimejote");
}
