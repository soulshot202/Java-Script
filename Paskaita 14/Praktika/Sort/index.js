// uzd 1.Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.
const draugai = [
  "Tadas",
  "Tomas",
  "Aivaras",
  "Ausra",
  "Neringa",
  "Vaida",
  "Mindaugas",
  "Tautvydas",
];
const rikiuotiDraugai = draugai.sort();
console.log(rikiuotiDraugai);
//uzd 2. Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.
const rikiuotiDraugaiAtbulai = rikiuotiDraugai.sort((a, b) => (b > a ? 1 : -1));
console.log(rikiuotiDraugaiAtbulai);

//uzd 3. Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir su JS
//sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).
const skaiciai = [5, 10, 20, 11, 12, 1, 0, 14, 25];
skaiciai.sort((a, b) => (b > a ? 1 : -1));
console.log(skaiciai);

//uzd 4. Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią skaičių
//(vieną skaičių).
const skaiciai2 = [10, 5, 20, 4];
console.log(skaiciai2.sort((a, b) => a - b)[skaiciai2.length - 1]);
