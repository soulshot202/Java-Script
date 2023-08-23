class Book {
  constructor(title, year, id, author) {
    this.title = title;
    this.year = year;
    this.id = id;
    this.author = author;
  }
  logTitle() {
    console.log(this.title);
  }
}

class Library {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.books = [];
  }
  addNewBook(book) {
    this.books.push(book);
  }
  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }
  removeBookByID(id) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books = this.books.splice(bookIndex, 1);
    } else {
      console.log("tokios knygos nera");
    }
  }
}

const martynoMazvydo = new Library("Martyno Mazvydo", "Zalgirio g. 17");

const altoriuSesely = new Book("altoriu  Sesely", 1995, 2, "Kazys Grinius");
const kvepalai = new Book("Kvepalai", 2015, 1, "Pinkis Binkis");

martynoMazvydo.addNewBook(kvepalai);
martynoMazvydo.addNewBook(altoriuSesely);
martynoMazvydo.removeBookByID(2);
console.log(martynoMazvydo);

class Animal {
  constructor(name) {
    this.name = name;
  }
  breathe() {
    console.log("I m breathing");
  }
}

class Mamal extends Animal {
  constructor(typeOfDrink, name) {
    super(name);
    this.typeOfDrink = typeOfDrink;
  }
  drink() {
    console.log("I M drinking milk");
  }
}

const karve = new Mamal("Vanduo", "Birute");
karve.breathe();
karve.drink();
console.log(karve.typeOfDrink);
console.log(karve.name);
