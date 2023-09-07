export function addToHtml(app) {
  //   const header = document.createElement("header");
  //   const h1 = document.createElement("h1");
  //   h1.textContent = "Cia yra Headeris";
  //   h1.style.color = "green";
  //   h1.style.textAlign = "center";
  //   header.style.width = "500px";
  //   header.style.height = "200px";
  //   header.style.margin = "20px auto";
  //   header.style.border = "2px solid black";
  //   header.append(h1);
  //   app.append(header);
  const headerHTML = `<header style="background-color: #333; color: #fff; padding: 10px; text-align: center;">
      <h1>Mano Puslapio Pavadinimas</h1>
    </header>`;

  app.innerHTML += `<header style="background-color: green; color: #fff; padding: 10px; text-align: center;">
      <h1>Mano Puslapio Pavadinimas</h1>
    </header>`;
}
