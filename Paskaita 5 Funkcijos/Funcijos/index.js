function sayHello(vardas, age = 10) {
  console.log("Hello " + vardas);
  console.log("Your age is " + age);
}
sayHello("Vytas", 20);
sayHello("Tadas");

function addNumbers(x, y) {
  const sum = x + y;
  return sum;
}
console.log(addNumbers(10, 8));
const sum = addNumbers(3, 8);
console.log(sum);

function findBiggest(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
console.log(findBiggest(10, 15));

function addNumbers2(x, y) {
  sum = x + y;
  // {
  //   function hello ("inside the function"){
  //   console.log();
  // }
  // }
}
function checkAge(age) {
  return age > 18 ? true : confirm("Ar tikrai taip?");

  // if (age > 18) {
  //   return true;
  // } else {
  //   return confirm("ar tikrai?");
  // }
}
checkAge(19);
console.log(checkAge(110));

function min(x, y) {
  return x < y ? x : y;
}
console.log(min(10, -152));

const funkc1 = function (name) {
  console.log("hello " + name);
};
funkc1("Vytautas");

// arrow funkcija
const arrowFunkc = (name) => {
  console.log(name);
};
console.log(arrowFunkc("Tadas"));

const sumFunkc = (x, y) => x + y;
console.log(sumFunkc(5, 6));
