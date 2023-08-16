// Task: Calculate the Sum of an Array of Numbers
// You are given an array of numbers. Your task is to use the reduce method
//to calculate the sum of all numbers present in the array.
// const numbers = [5, 10, 20, 30, 50, 15];
// Expected Output: 130 (because 5 + 10 + 20 + 30 + 50 + 15)
const numbers = [5, 10, 20, 30, 50, 15];
const sum = numbers.reduce((acc, number) => acc + number, 0);
// ,0 pradine acc reiksme
console.log(sum);

// Convert Array to Object
// Given an array of strings, use the reduce method to convert it
//into an object where each string becomes a key and its length becomes the value.
// Example Input: ["apple", "kiwi", "banana"]
// Example Output: {apple: 5, kiwi: 4, banana: 6}
const fruitArr = ["apple", "kiwi", "banana"];
const fruitObj = fruitArr.reduce((acc, fruit) => {
  acc[fruit] = fruit.length;
  return acc;
}, {});
console.log(fruitObj);
// Flatten a 2D Array
// Given a 2D array, use the reduce method to flatten it into a 1D array.
// Example Input: [[1, 2], [3, 4], [5, 6]]
// Example Output: [1, 2, 3, 4, 5, 6]

const arr2d = [[1, 2], [3, 4], [5, 6], 10, 19, 8];

const arr1d = arr2d.reduce((acc, element) => {
  if (Array.isArray(element)) {
    return [...acc, ...element];
  } else {
    acc.push(element);
    return acc;
  }
}, []);
console.log(arr1d);
// Sort:
// Sort by Last Character
// Given an array of strings, use the sort method to sort the strings based
//on the last character in each string.
// Example Input: ["apple", "kiwi", "banana", "grape"]
// Example Output: ["banana", "apple", "grape", "kiwi"]
const fruit1 = ["apple", "kiwi", "banana", "grape"];
const sortedFruit = fruit1.sort((a, b) => {
  return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
});
console.log(sortedFruit);

// Sort Numbers in Descending Order
// Given an array of numbers, use the sort method to sort them in descending order.
// Example Input: [34, 12, 56, 8, 90, 15]
// Example Output: [90, 56, 34, 15, 12, 8]

const numbers1 = [34, 12, 56, 8, 90, 15];
const sorted = numbers1.sort(
  (a, b) => a - b
  //return a - b;
  // a - b didejimo tvarka b-a mazejimo tvarka rikiuoja
);
console.log(sorted);

// Sort Array of Objects by Date
// Given an array of objects, where each object has a date property in the
// format YYYY-MM-DD, sort them in ascending order based on the date.
// [
//   {name: "Event 1", date: "2023-03-15"},
//   {name: "Event 2", date: "2023-02-10"},
//   {name: "Event 3", date: "2023-04-01"}
// ]
// [
//   {name: "Event 2", date: "2023-02-10"},
//   {name: "Event 1", date: "2023-03-15"},
//   {name: "Event 3", date: "2023-04-01"}
// ]

const events = [
  { name: "Event 1", date: "2023-03-15" },
  { name: "Event 2", date: "2023-02-10" },
  { name: "Event 3", date: "2023-04-01" },
];

const sortedEvents = [...events].sort(
  (a, b) => new Date(a.date) - new Date(b.date)
);
console.log(sortedEvents);
