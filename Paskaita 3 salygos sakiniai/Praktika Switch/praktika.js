// uzduotis 1
car = "Opel";

switch (car) {
  case "VW":
  case "Audi":
  case "Bentley":
  case "Bugatti":
  case "Lamborghini":
  case "Porshe":
    console.log("Jusu auto priklauso WAG Group");
    break;
  case "BMW":
  case "Mini":
  case "Rolls-Royce":
  case "Opel":
    console.log("jusu auto priklauso BMW Group");
    break;
  default:
    console.log("auto grupe neatpazinta");
    break;
}
// ----
// uzduotis 2

let userInput = "Morka";
switch (userInput) {
  case "Obuolys":
  case "Bananas":
  case "Serbentas":
  case "Slyva":
  case "Kriause":
    console.log(userInput + " yra vaisius");
    break;
  case "Pomidoras":
  case "Agurkas":
  case "Kopustas":
  case "Bulve":
  case "Morka":
    console.log(userInput + " yra darzove");
    break;
  default:
    console.log("nezinau kas tai");
    break;
}
// uzduotis 3

let weekDay = new Date().getDay();
switch (weekDay) {
  case 0:
    weekDay = "Sekmadienis";
    console.log("siandien yra " + weekDay);
    break;
  case 1:
    weekDay = "Pirmadienis";
    console.log("siandien yra " + weekDay);
    break;
  case 2:
    weekDay = "Antradienis";
    console.log("siandien yra " + weekDay);
    break;
  case 3:
    weekDay = "Treciadienis";
    console.log("siandien yra " + weekDay);
    break;
  case 4:
    weekDay = "Ketvirtadienis";
    console.log("siandien yra " + weekDay);
    break;
  case 5:
    weekDay = "Penktadienis";
    console.log("siandien yra " + weekDay);
    break;
  case 6:
    weekDay = "Sestadienis";
    console.log("siandien yra " + weekDay);
    break;

  default:
    console.log("nezinau sios dienos");
    break;
}
