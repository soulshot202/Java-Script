// 1. Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių.
// Jam resolve - išoka alert "yes, veikia!".
//Pažado aprašyme teks naudoti setTimeOut - daugiau apie jį čia.

const pazadas = new Promise((resolve, reject) => {
  setTimeout(() => {
    //alert("Yes, Veikia");
    console.log("yes, Veikia");
  }, 5000);
});

// 2. Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė,
// jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė,
//kad po 5 sekundžių bus reject.

const pazadas2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.floor(Math.random() * 5 + 1);
    if (rand === 5) {
      reject();
    } else {
      resolve();
    }
  }, 5000);
});
pazadas2
  .then(() => console.log("o taip vis dar veikia"))
  .catch(() => console.log("deja nepavyko"));

// 3. Then bendrauja su kitu then. Pakoreguokite antrą pratimą,
// kad jei resolve'inasi pirmas pažadas - pasileidžia then(),
// kuris paprasčiausiai grąžina žinutę "this is a message",
//šią žinutę pagauna antrasis then() ir ją alertina.
// Prisiminkime - ką then() returnina, tą pasigauna kitas
//then() kaip parametrą.
const pazadas3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.floor(Math.random() * 5 + 1);
    if (rand === 1) {
      reject();
    } else {
      resolve();
    }
  }, 5000);
});
pazadas3
  .then(() => "uzduotis 3 atlikta")
  .then((res) => console.log(res))
  .catch(() => console.log("deja nepavyko"));
