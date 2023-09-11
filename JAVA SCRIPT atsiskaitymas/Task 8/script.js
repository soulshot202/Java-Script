/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  constructor(sk1, sk2) {
    this.skaicius1 = sk1;
    this.skaicius2 = sk2;
  }
  sum() {
    return this.skaicius1 + this.skaicius2;
  }
  subtraction() {
    return this.skaicius1 - this.skaicius2;
  }
  multiplication() {
    return this.skaicius1 * this.skaicius2;
  }
  division() {
    return this.skaicius1 / this.skaicius2;
  }
}

const duKeturi = new Calculator(2, 4);
console.log(duKeturi.sum());
console.log(duKeturi.subtraction());
console.log(duKeturi.multiplication());
console.log(duKeturi.division());
