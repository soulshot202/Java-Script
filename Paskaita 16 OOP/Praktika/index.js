//  1. Susikurkite konstruktorių car, kuris priims brand, model,
// engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'.
//Sukurkite du objektus ir patikrinkite ar veikia.

class Car {
  constructor(brand, model, engine, year, basePrice) {
    this.brand = brand;
    this.basePrice = basePrice;
    this.model = model;
    this.engine = engine;
    this.year = year;
  }
  turnOn() {
    alert("vrooooom");
  }

  getPrice() {
    let price = 0;
    if (this.engine === "electric") {
      price = this.basePrice + 10000;
    } else if (this.engine === "diesel") {
      price = this.basePrice + 5000;
    } else {
      price = this.basePrice;
    }

    return price;
  }
}
const audi = new Car("Audi", "Quatro", "electric", 2005);
const opel = new Car("Opel", "Vectra", "diesel", 2010);
console.log(opel);
console.log(opel.model);
console.log(audi.engine);

//  2. Pakoreguokite šį konstruktorių ir pridėkite papildomą
//property 'basePrice' ir metodą 'getPrice'. basePrice propertį
//įrašys sukuriant objektą, tačiau getPric priklausimai nuo
//variklio išmes kokia yra galutinė kaina. Jei variklis
//'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei
//'petrol' - kaina tokia kokia ir basePrice.

const Skoda = new Car("Skoda", "Fabia", "Petrol/Gas", 1998, 15000);
const VW = new Car("Volkswagen", "Toureg", "electric", 2014, 48000);

VW.getPrice();
console.log(VW.getPrice());
