export function addCars(app) {
  const cars = ["BMW", "VW", "AUDI", "MB"];
  const ul = document.createElement("ul");

  cars.map((el) => createHTML(ul, el));
  return app.append(ul);
}

function createHTML(target, el) {
  const li = document.createElement("li");
  li.textContent = el;
  target.append(li);
  //target.append(li);
}
