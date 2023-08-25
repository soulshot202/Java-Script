// 1. Sukurk formą, kuri leis įrašyti vardą -
//jis bus išsaugojamas į cookies. Jei vardas jau
//egzistuoja - išmeta tik vardą ir mygtuką, su
//kuriuo cookies ištrinamas. Jei neegzistuoja - formą

//document.body.addEventListener("submit", (e) => e.preventDefault());
const vardasInput = document.querySelector("#vardas");
const formSubmit = document.querySelector("#forma");
const submitButton = document.querySelector("#submit");
const output = document.querySelector("#output");
const nameOutput = document.querySelector("#name1");
// document
//   .querySelector("#forma")
//   .addEventListener("submit", (e) => e.preventDefault());
formSubmit.addEventListener("submit", displayName);
const deleteButton = document.querySelector("#deleteName");

const vardasStorage = localStorage.getItem("name");
function displayName(e) {
  e.preventDefault();
  const vardas = vardasInput.value;

  if (vardasStorage !== "" && vardasStorage) {
    formSubmit.classList.add("hidden");
    output.classList.remove("hidden");
    nameOutput.innerText = vardasStorage;
  } else {
    localStorage.setItem("name", vardas);
    formSubmit.classList.add("hidden");
    output.classList.remove("hidden");
    nameOutput.innerText = vardas;
  }
}

deleteButton.addEventListener("click", () => {
  localStorage.removeItem("name");
  formSubmit.classList.remove("hidden");
  output.classList.add("hidden");
  nameOutput.textContent = "";
});
displayName();
//COOCie versija
// Šiame atsakyme nenaudojam Cookie Store API.
// Funckijos paimtos iš https://www.w3schools.com/js/js_cookies.asp
/*function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  const form = document.querySelector('form');
  const output = document.getElementById('output');
  const name = getCookie('name');
  
  // Jeigu puslapis būtų perkraunamas
  if (getCookie(name)) {
    form.classList.add('hidden');
    output.classList.remove('hidden');
  } else {
    form.classList.remove('hidden');
    output.classList.add('hidden');
  }
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    setCookie('name', name, 1);
    document.getElementById('name').innerText = name;
    form.classList.add('hidden');
    output.classList.remove('hidden');
  });
  
  document.getElementById('erase').addEventListener('click', (event) => {
    document.cookie = '';
    document.getElementById('name').innerText = '';
    output.classList.add('hidden');
    form.classList.remove('hidden');
  }); 
  */



// 2.  localStorage, įrašykite savo vardą, pavardę,
//aprašymą, ir nuorodą į profilio nuotrauką. Informaciją
//įrašykite pirmą kartą užkrovus puslapį, o vėliau ją atvaizduokite



// 3. Sukurkite puslapį, kuriame būtų forma su vienu input - fullName.
//Įvedus vardą ir pavardę, juos padalina į dvi dalis (name ir surname).
// Vardą ir pavardę įdeda į objektą, o objektą - į array. Šį array
//išsaugo localStorage. Po forma sukurkite lentelę joje atvaizduokite
//informaciją iš localStorage
