//uzduotis 1
document.querySelector("p:nth-child(2) > span").textContent = "blue";

//uzduotis 2
const pirmas = document.querySelector("ol > li:first-child").textContent;
const antras = document.querySelector("ol li:nth-child(2)").textContent;
document.querySelector("ol > li:first-child").textContent = antras;
document.querySelector("ol > li:nth-child(2)").textContent = pirmas;
console.log(pirmas);
console.log(antras);
