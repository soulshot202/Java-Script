// BASE URL = https://olive-bead-glazer.glitch.me
// 1. Sukurkite puslapį, index.html, kurį užkrovus atsiranda
// lentelė su visais automobiliais iš base URL.

const res = document.querySelector("#uzd1");

async function makeTable() {
  try {
    const response = await fetch("https://olive-bead-glazer.glitch.me");

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      data.forEach((el) => {
        const tr = document.createElement("tr");
        const tdBrand = document.createElement("td");

        const tdModel = document.createElement("td");
        tdBrand.textContent = el.brand;
        tdModel.textContent = el.model;
        tr.append(tdBrand, tdModel);
        res.append(tr);
      });
    } else {
      console.log("kazkokia klaida");
    }
  } catch (err) {
    console.log(err.message);
  }
}
makeTable();

// 2. Sukurkite papildomą puslapį, add.html, kuriame būtų
//forma su dviem inputais - brand ir model; šie paduotų su
//post'u informaciją į base url (formatas: objektas su dviem
//properties: brand ir model).

const brandInput = document.querySelector("#brand");
const modelInput = document.querySelector("#model");
const SubmitForm = document.querySelector("form");
SubmitForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const brand = brandInput.value;
  const model = modelInput.value;
  try {
    const response = await fetch("https://olive-bead-glazer.glitch.me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        brand: brand,
        model: model,
      }),
    });
    if (response.ok) {
      alert("Success");
    } else {
      alert("Error, Try Again");
    }
  } catch (e) {
    console.log(e.message);
  }
});

// 3. Sukurkite notification - t.y. sėkmingai užpildžius formą ir
// gavus patvirtinimą, turi virš formos rašyti, kad duomenys
// sėkmingai išsaugoti; o jei blogai - išmesti errorą.

// 4. Sukurkite navigaciją, kad galėtumėte tarp puslapių vaikščioti
//ir patikrinkite ar įrašyti duomenys atsivaizduoja :)
