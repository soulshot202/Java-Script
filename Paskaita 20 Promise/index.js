console.log("failo pradzia");

const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.floor(Math.random() * 2 + 1);
    console.log(random);
    if (random === 1) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  }, 2000);
  resolve("resolvedas");
  // reject("Rejected");
});

prom
  .then((res) => {
    console.log(res);
    return res + " labas";
  })
  .then((res) => {
    console.log(res, "then2");
  })
  .catch((err) => {
    console.log(err, "catch");
  })
  .finally((res) => {
    console.log("rezultatas");
  });
console.log("Failo pabaiga");

const prom2 = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 2 + 1);
  setTimeout(() => {
    console.log(random);
    if (random === 1) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  }, 2000);
  resolve("resolvedas");
  // reject("Rejected");
});

async function getData() {
  try {
    console.log("funkcijos pradzia");
    const res = await prom2;
    console.log(res);
    console.log("funkcijos pabaiga");
  } catch (error) {
    console.log(error, "catch dalis");
  }
}

getData();
