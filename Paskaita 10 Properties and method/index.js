const person = {
  age: 26,
  name: `Vytautas`,
  car: {
    make: "Opel",
    year: 2004,
  },
  pets: ["rainius", "rudis"],
  sayHello: () => {
    console.log("hello");
  },
  sayGoodBye: () => {
    console.log("bye");
  },
};
console.log(person.age);
console.log(person.car.make);
person.sayHello();

delete person.age;
console.log(person);

// function augintinis() {
//   this.name = "Vytautas";
//   console.log(this);
// }
// augintinis();

const person2 = {
  ...person,
  lastName: "kazkas kito",
};
const obj = {
  name: "Vytautas",
  age: 37,
};
console.log(person2);

function changeObject(objektas) {
  const copy = JSON.parse(JSON.stringify(objektas));
  copy.name = "Migle";
}
changeObject(obj);
console.log(obj);

class Person {
  constructor(name, age) {
    //console.log(name, age);
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log("Hello");
  }
  sayBye(name) {
    console.log(`bye ${name}`);
  }
}
const Vytautas = new Person("Vytautas", 37);
console.log(Vytautas);
Vytautas.sayHello();

const rima = new Person("Rima", 38);
console.log(rima);
console.log(rima.sayBye("Tadas"));
