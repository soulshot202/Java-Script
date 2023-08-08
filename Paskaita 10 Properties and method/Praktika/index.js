//uzduotis 1

const car = {
  doors: 4,
  color: "black",
  brand: "Audi",
};
console.log(car);
console.log(car.color);

//uzduotis 2
const nameInput = document.querySelector("#name");
const surNameInput = document.querySelector("#surName");

surNameInput.addEventListener("blur", personCreate);
function personCreate() {
  name = nameInput.value;
  surName = surNameInput.value;
  if (name && surName) {
    let person = {
      vardas: name,
      pavarde: surName,
    };
    console.log(person);
  }
}

//uzduotis 3
const vardasInput = document.querySelector("#vardas");
const amziusInput = document.querySelector("#age");

amziusInput.addEventListener("blur", personInfo);

function personInfo() {
  name = vardasInput.value;
  age = amziusInput.value;
  isLegalAge = age >= 18;
  const person = {
    Vardas: name,
    LegalAge: isLegalAge,
  };
  console.log(person);
}
