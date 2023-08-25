const pienasButton = document.querySelector("#pienas");
const bulkaButton = document.querySelector("#bulka");

const table = document.querySelector("tbody");
pienasButton.addEventListener("click", () => {
  addProductBag("pienas");
});
bulkaButton.addEventListener("click", () => {
  addProductBag("bulka");
});

function addProductBag(product) {
  const currentBag = localStorage.getItem("bag");
  if (currentBag) {
    const bag = JSON.parse(currentBag);
    const index = bag.findIndex((e) => e.name === product);
    if (index === -1) {
      bag.push({
        amount: 1,
        name: product,
      });
      localStorage.setItem("bag", JSON.stringify(bag));
    } else {
      bag[index].amount++;
      localStorage.setItem("bag", JSON.stringify(bag));
    }
  } else {
    localStorage.setItem("bag", JSON.stringify([{ amount: 1, name: product }]));
  }

  displayBag();
}

function displayBag() {
  table.textContent = "";
  const bagString = localStorage.getItem("bag");
  if (bagString) {
    const bag = JSON.parse(bagString);
    bag.forEach((el) => {
      const tr = document.createElement("tr");
      const tdname = document.createElement("td");
      const tdAmount = document.createElement("td");
      tdname.textContent = el.name;
      tdAmount.textContent = el.amount;
      tr.append(tdname, tdAmount);

      table.append(tr);
    });
  }
}
displayBag();
