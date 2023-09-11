/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const output = document.querySelector("#output");
const button = document.querySelector("#btn");
async function fetchData() {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      return await response.json();
    } else {
      console.log("kazkokia klaida");
    }
  } catch (error) {
    console.log("kazkokia klaida");
  }
}

async function showUsers() {
  const data = await fetchData();
  output.innerHTML = "";
  data.forEach((el) => addUser(el));
}

button.addEventListener("click", showUsers);

function addUser(user) {
  const login = document.createElement("h3");
  login.style.color = "tomato";
  const avatar = document.createElement("img");
  login.style.color = "blue";
  login.style.marginBottom = "10px";
  login.style.textAlign = "center";
  avatar.style.maxWidth = "100px";
  avatar.src = user.avatar_url;
  avatar.style.borderRadius = "10px";
  const container = document.createElement("div");
  container.style.border = "1px solid blue";
  container.style.width = "24%";
  container.classList.add("out");
  container.style.padding = "20px";
  login.textContent = user.login;
  container.append(login, avatar);
  output.append(container);
}
