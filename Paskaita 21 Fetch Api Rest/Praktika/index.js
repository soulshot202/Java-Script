// 1. Jums paskambino pažinčių portalas –
//jiems reikia greitai sukurti front-endą,
//kuris pasiimtų duomenis iš https://randomuser.me/api/
// ir juos atvaizduotų juos puslapyje. Duomenys galėtų
//būti atvaizduoti panašioje kortelėje. Svarbu atvaizduoti
// nuotrauką, vardą, amžių ir el. pašto adresą.
const res1 = document.querySelector("#uzd1");
const duomenys = await fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((data) => data)
  .catch((e) => console.log(e.message));
//console.log(duomenys);

function getData(data) {
  data.results.forEach((el, i) => {
    const vardas = el.name.first;
    const age = el.dob.age;
    const email = el.email;
    const url = el.picture.large;

    const cont = document.createElement("div");
    const cont2 = document.createElement("div");
    const photo = document.createElement("img");
    const vardasTab = document.createElement("h4");
    const ageTab = document.createElement("h6");
    const emailTab = document.createElement("p");
    photo.src = url;

    vardasTab.textContent = vardas;
    ageTab.textContent = age + " Years old";
    emailTab.textContent = email;
    cont.style.border = "1px solid black";
    cont.style.maxWidth = "300px";
    photo.style.width = "100%";
    cont2.style.margin = "20px 5%";
    cont.style.backgroundColor = "lightGrey";
    vardasTab.style.margin = "0 5%";
    vardasTab.style.width = "40%";
    ageTab.style.width = "40%";
    vardasTab.style.display = "inline";
    ageTab.style.display = "inline";
    ageTab.style.color = "lightGreen";
    emailTab.style.margin = "5px 5% 10px 5%";
    cont2.style.paddingBottom = "10px";
    photo.style.marginBottom = "30px";
    cont2.style.backgroundColor = "white";
    cont2.style.width = "90%";
    cont2.append(photo, vardasTab, ageTab, emailTab);
    cont.append(cont2);
    res1.append(cont);
  });
}

getData(duomenys);
// 2. Naudojant https://party-wedding.glitch.me/v1/party -
// pasiimkite informaciją iš šito puslapio ir naudojant
//skirtingus array metodus, transformuokite duomenis bei
//išmeskite true/false ekrane - ar "Kristupas Lapeika"
//yra VIP, ar ne?

const uzd2Data = await fetch("https://party-wedding.glitch.me/v1/party")
  .then((res) => res.json())
  .catch((err) => {
    console.log("ivyko klaida:", err);
  });
const person = "Kristupas Lapeika";
//console.log(uzd2Data);
function checkVIP(duomenys, zmogus) {
  const asmuo = duomenys.find((el) => {
    if (el.name === zmogus) {
      return el;
    }
  });

  console.log("uzd2:", asmuo.VIP);
}
checkVIP(uzd2Data, person);

// 3. Organizuojate vestuves - pasiimkite informaciją
//iš https://party-wedding.glitch.me/v1/wedding ir
//atvaizduokite lentelėje: vardą, plusOne ir attending.
//Parašykite taip, kad plusOne ir attending būtų ne
//true/false, bet "+" arba "-".
const WeedData = await fetch("https://party-wedding.glitch.me/v1/wedding")
  .then((data) => data.json())
  .catch((err) => console.log("klaida:", err));
const tbody = document.querySelector("tbody");
const th = document.querySelector("th");
th.style.width = "170px";
th.style.textAlign = "left";
const th2 = document.querySelector("th:nth-child(2)");
th2.style.width = "100px";
document.getElementsByTagName("th")[0].classList.add("nameborder");
document.getElementsByTagName("th")[1].classList.add("nameborder");
document.getElementsByTagName("th")[2].classList.add("nameborder");
document.getElementsByTagName("th")[2].style.width = "100px";
document.querySelector("table").style.border = "3px solid blue";
document.querySelector("table").style.borderSpacing = "0px";
document.querySelector("table").style.margin = "20px";
console.log(WeedData);
function getTable(data) {
  data.forEach((el) => {
    const tr = document.createElement("tr");
    const vardasTab = document.createElement("td");
    const plusOneTab = document.createElement("td");
    const attendingTab = document.createElement("td");
    vardasTab.textContent = el.name;
    plusOneTab.textContent = el.plusOne ? "+" : "-";
    plusOneTab.style.textAlign = "center";
    attendingTab.style.textAlign = "center";
    attendingTab.textContent = el.attending ? "+" : "-";
    attendingTab.classList.add("border");
    plusOneTab.classList.add("border");
    vardasTab.classList.add("border");

    tr.append(vardasTab, plusOneTab, attendingTab);
    tbody.append(tr);
  });
}

getTable(WeedData);
