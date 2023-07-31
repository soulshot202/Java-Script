// Find Maximum Value Create an array of numbers and write a JavaScript function to find the maximum value in that array using a loop and an if statement.
const arr = [1, 6, -8, 11, -50, 33];

let max = arr[0];
for (let index = 1; index < arr.length; index++) {
  if (arr[index] > max) {
    max = arr[index];
  }
}
console.log(max);
//-------------

// Task 3: Password Strength Checker Create a simple password strength checker. Write a function that takes a password as input and checks its strength based on the following criteria:
// At least 8 characters long
// Contains at least one uppercase letter
// Contains at least one lowercase letter
// Contains at least one digit
// Contains at least one special character (e.g., !, @, #, $, etc.)
const pass = "sLaptazodis@123";
const regex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

const res = regex.test(pass);
console.log(res);

// DOM Manipulation Create an HTML page with a list of items (e.g., a todo list). Use querySelector to select the list items and then use a loop to iterate through them and apply some styling or modification (e.g., change their background color or add a class).

const listItems = document.querySelectorAll(`ul > li`);
console.log(listItems);
for (let index = 0; index < listItems.length; index++) {
  listItems[index].style.backgroundColor = "aqua";
  listItems[index].classList.add(`li-item`);
  listItems[index].classList.remove(`big-text`);
}

// FizzBuzz Write a function that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz" instead of the number. For numbers that are multiples of both 3 and 5, print "FizzBuzz".

for (let index = 1; index <= 100; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("FizzBuzz");
  } else if (index % 3 === 0) {
    console.log("Fizz");
  } else if (index % 3 === 0) {
    console.log("Buzz");
  } else {
    console.log(index);
  }
}

// Reverse a String Write a JavaScript function that takes a string as input and returns the reverse of that string using a loop.

const str = "Labas rytas";
let reverseStr = "";
console.log(str.length);
for (let index = str.length - 1; index >= 0; index--) {
  reverseStr += str[index];
}
console.log(reverseStr);

// Multiplication Table Write a function that takes a number as input and prints the multiplication table for that number from 1 to 10 using a loop.
// 5 x 1 = 5

// const num = 5;
for (let num = 1; num <= 10; num++) {
  for (let index = 1; index <= 10; index++) {
    //   const x = num * index;
    console.log(`${num} x ${index} = ${num * index}`);
  }
}

// Task 14: Count Vowels Write a function that takes a string as input and counts the number of vowels (a, e, i, o, u) using a loop and conditional statements.

const sakinys0 = "laba dienA, kaip gyvenat";
const sakinys = sakinys0.toLowerCase();
let balses = 0;
for (let index = 0; index < sakinys.length; index++) {
  if (
    sakinys[index] == "a" ||
    sakinys[index] == "o" ||
    sakinys[index] == "e" ||
    sakinys[index] == "u" ||
    sakinys[index] == "ė" ||
    sakinys[index] == "i"
  ) {
    balses++;
  }
}
console.log(`Balsiu skaicius sakinyje yra ${balses}`);

// 2 varinatas

const word = "laba DIENA";
const balsiai = ["a", "e", "i", "o", "u"];
const lowerWord = word.toLowerCase();
let balsiuSk = 0;

for (let index = 0; index < lowerWord.length; index++) {
  if (balsiai.includes(lowerWord[index])) {
    balsiuSk++;
  }
}
console.log(`Balsiu yra ${balsiuSk}`);

//-------------------

//Filter Even Numbers Create an array of numbers and write a JavaScript
//function to filter out and return only the even numbers using a loop and an
//if statement. Kad prideti nauja elements prie array rašom arr.push(elementas)

const evenNo = [];

for (let index = 1; index <= 50; index++) {
  if (index % 2 === 0) {
    evenNo.push(index);
  }
}
console.log(evenNo);

// Write a function that takes an array of numbers as input and returns
//the sum of all the numbers using a loop

const skaiciai = [];

for (index = 0; index < 25; index++) {
  const userInput = +prompt(
    "iveskite skaiciu(noredami baigti ivedineti iveskite 0"
  );
  if (isNaN(userInput) === false && userInput !== 0) {
    skaiciai.push(userInput);
  } else if (userInput === 0) {
    break;
  }
}

let sumaSk = 0;
for (index = 0; index < skaiciai.length; index++) {
  // if (skaiciai[index] !== NaN) {
  sumaSk += skaiciai[index];
  // }
}
console.log(skaiciai);
console.log(sumaSk);

//Array Reversal Write a function that takes an array as input and returns a
// new array with its elements reversed using a loop. Kad prideti nauja elements
//prie array rašom arr.push(elementas)

const array1 = [15, 10, "opa", true, NaN, "labas"];
const array1Reverse = [];
for (let index = array1.length - 1; index >= 0; index--) {
  array1Reverse.push(array1[index]);
}
console.log(array1);
console.log(array1Reverse);

//Array Uniqueness Write a function that takes an array as input and returns
// a new array with duplicate elements removed using a loop. naudojam arr.includes
const array2 = [10, 20, true, true, false, "geras", "geras", 10];
const array2NoDuplicates = [];
for (index = 0; index < array2.length; index++) {
  if (array2NoDuplicates.includes(array2[index]) === false) {
    array2NoDuplicates.push(array2[index]);
  }
}
console.log(array2);
console.log(array2NoDuplicates);

//Count Occurrences in Array Description: Create a function that takes an array
// of numbers and a target number as inputs. Use a loop to count and return the
// number of occurrences of the target number in the array.
const array3 = [10, 15, 10, 20, 30, 100, 0, 4, 16, 10, 100, 46, 9];
let ocuNum = 0;
const userChk = +prompt("iveskite ieskoma skaiciu");
for (let index = 0; index < array3.length; index++) {
  if (array3[index] === userChk && isNaN(array3[index]) === false) {
    ocuNum++;
  }
}
if (isNaN(userChk)) {
  console.log("tai ka ivedei nera skaicius");
} else if (ocuNum === 0) {
  console.log("tokio skaiciaus sarase nera");
} else {
  console.log(`Skaicius ${userChk} sarase pasikartoja ${ocuNum} karta(us)`);
}

//Replace all occurances in an array with a different number: example array
//[ 1, 5, 'a', 76, 'b', 'a'] replace all 'a' with number 5
const array4 = [10, "a", 15, "b", 10, "c", true, false, NaN, "geras"];
const repl = 100;
for (index = 0; index < array4.length; index++) {
  if (array4[index] === 10) {
    array4[index] = "BOOM";
  } else if (isNaN(array4[index]) || typeof array4[index] !== "number") {
    array4[index] = repl;
  }
}
console.log(array4);

//Validate Email Addresses Description: Create a function that takes an array of
// email addresses as input. Use a loop to validate each email address and return
// an array containing only the valid ones. Valid email addresses should have the
//format "username@domain.com". patikrintinti ar stringe yra "@" ir "." čia bus ciklas cikle

const emailAddr = [
  "pomppa@lopas.lt",
  "botas@varlelt",
  "kaledosvelykos.com",
  "manoauto@raudonas.org",
  "kastu@one.pl",
  "@.",
  "dd@await.",
  "@zalias.lt",
  "reew@dasd@.dd",
  "daras@das@sss.com",
  "labas@.eu",
  ".draugas@on.lt",
  "draugas.lt@",
  "miegas.lova@ss",
];
const TrustAddr = [];
for (i = 0; i < emailAddr.length; i++) {
  if (
    emailAddr[i].includes("@") &&
    emailAddr[i].includes(".") &&
    emailAddr[i].length >= 5
  ) {
    let tempAddr = emailAddr[i];
    let etaCount = 0;
    let tarpas = true;
    let etaAfterDot = false;
    console.log(tempAddr);
    for (j = 0; j < tempAddr.length; j++) {
      if (tempAddr[j] === "@") {
        etaCount++;
        // let k = j + 3;
      }
      if (tempAddr[j + 1] === "." || tempAddr[j + 2] === ".") {
        tarpas = false;
      }
      // else {
      //   for (k; k < tempAddr.length; k++) {
      // if (tempAddr[k > j + 3] === ".") {
      //   etaAfterDot === true;
    }
    //   }

    //   }
  }

  if (
    //etaAfterDot === true &&
    etaCount === 1 &&
    tarpas !== false &&
    tempAddr[0] !== "@" &&
    tempAddr[1] !== "@" &&
    tempAddr[0] !== "." &&
    tempAddr[tempAddr.length - 1] !== "." &&
    tempAddr[tempAddr.length - 2] !== "." &&
    tempAddr[tempAddr.length - 1] !== "@" &&
    tempAddr[tempAddr.length - 2] !== "@"
  ) {
    TrustAddr.push(tempAddr);
  }
  // }
}
console.log(TrustAddr);
