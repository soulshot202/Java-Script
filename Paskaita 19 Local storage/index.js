document.cookie = "name=Vytas";
console.log(document.cookie);
sessionStorage.setItem(
  "manoSessionStorage",
  JSON.stringify({ labas: "labas" })
);
const x = sessionStorage.getItem("manoSessionStorage");
const obj = JSON.parse(x);
console.log(x);
//sessionStorage.removeItem("manoSessionStorage");

//localStorage.setItem("Vardas", "Matas");
