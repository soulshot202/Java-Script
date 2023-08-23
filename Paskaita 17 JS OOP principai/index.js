//Inkapsuliacija objekto vidiniai duomenys slepiami ir jais galima manipuliuoti
// tik naudojant objekto viesus metodus

class Car {
  static test = "123";
  #make;
  constructor(make, year) {
    this.#make = make;
    this.year = year;
  }
  getMake() {
    return this.#make;
  }
  setMake(make) {
    this.#make = make.trim();
  }
  static sayHello() {
    console.log("Sveiki");
  }
}

const bmw = new Car("bmw", 2000);
bmw.setMake("  Audi");
console.log(bmw.make);
console.log(bmw.getMake());
console.log(Car.test);
Car.sayHello();

//Abstrakcija (objekto nepriklausomumas nuo isoriniu sudedamuju daliu);

class Person {
  #age;
  #name;
  constructor(age, name) {
    this.#age = age;
    this.#name = name;
  }
  walk() {
    //console.log(person1BirthDate);
    console.log(`${this.#name} is walking`);
  }
}

const person1 = new Person(37, "Vytautas");
person1.walk();

// Paveldejimas(klase yra kitos klases konkretizacija)
class Shape {
  constructor(color) {
    this.color = color;
  }
  sayHello() {
    console.log("Hello");
  }
}

class Triangle extends Shape {
  constructor(color, height) {
    super(color);
    this.height = height;
  }
  sayHello() {
    console.log("Hello from triangle");
  }
}

const tr = new Triangle("Red", 100);
console.log(tr.color);

// polimorfizmas (galimybe dirbti su objektu nezinant jo tikslaus tipo bei strukturos)

class Vehicle {
  startEngine() {
    console.log("Engine started");
  }
}

class Tractor extends Vehicle {
  startEngine() {
    console.log("Tractor Engine Started");
  }
}

class Bike extends Vehicle {
  startEngine() {
    console.log("Bike engine started");
  }
}
const veh = new Vehicle();
const tra = new Tractor();
const bk = new Bike();

const vehicles = [veh, tra, bk];
vehicles.forEach((v) => {
  v.startEngine();
});
