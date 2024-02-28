// const hummus = function (factor) {
//   const ingredient = function (amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredient > 1) {
//       unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };

//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
// };

// console.log(hummus());

/*This is for Call Stack */

// function greet(who) {
//   console.log("Hello" + who);
// }
// greet("harry");
// console.log("Bye");

/*This is for Optional Argument */

// function square(x) {
//   return x * x;
// }
// console.log(square(4, true, "hedgehog"));

/*         ARRAY       */

/*This is for Array .push() Method */

/*----------------------------------------------*/

// const itemTracker = ["item 0", "item 1", "item 2"];

// itemTracker.push("item 3", "item 4");

// console.log(itemTracker);

/*----------------------------------------------*/

/*This is for Array .pop() Method */

/*----------------------------------------------*/

// const newItemTracker = ["item 0", "item 1", "item 2"];

// const removed = newItemTracker.pop();

// console.log(newItemTracker);
// console.log(removed);

/*----------------------------------------------*/

/*This is for Array .shift() Method  - remove first element*/

/*----------------------------------------------*/

/*
const groceryList = ["juice", "milk", "banana", "Eggplant"];

const removed = groceryList.shift();
console.log(removed);
console.log(groceryList);
*/

/*----------------------------------------------*/

/*This is for Array .unshift() Method  - add one or more to the beginning*/

/*----------------------------------------------*/
/*
const groceryList = ["juice", "milk", "banana", "Eggplant"];

const add = groceryList.unshift("peanut");
console.log(add);
console.log(groceryList);
*/
/*----------------------------------------------*/

/*This is for Array .unshift() Method  - add one or more to the beginning*/

/*----------------------------------------------*/
/*
const groceryList = ["juice", "milk", "banana", "Eggplant"];

const add = groceryList.unshift("peanut");
console.log(add);
console.log(groceryList);
*/
/*----------------------------------------------*/

/*This is for Array .slice() Method  - method returns a shallow copy of all or part of an array without modifying the original*/

/*----------------------------------------------*/
/*
const groceryList = ["juice", "milk", "banana", "Eggplant"];

const add = groceryList.slice();
console.log(add);
console.log(groceryList);
*/
/*----------------------------------------------*/

/*This is for Array .indexOf() Method  - returns the 1st index at which an element can be found*/
// it cannot find returns -1
/*----------------------------------------------*/
/*
const groceryList = ["juice", "milk", "banana", "Eggplant"];

const find = groceryList.indexOf("banana", 3);
console.log(find);
console.log(groceryList);
*/
/*----------------------------------------------*/

/*This is for Array .at() Method  - return the element at a specified index in an array*/

/*----------------------------------------------*/

/*
const groceryList = ["juice", "milk", "banana", "Eggplant"];

const find = groceryList.at(-2);
console.log(find);
console.log(groceryList);
*/
/*----------------------------------------------*/

/*This is for Array .concat() Method  - cancatenates 1 or more array*/

/*----------------------------------------------*/
/*
const shoppingList = ["bag", "shampoo", "clothes", "shoes"];
const groceryList = ["juice", "milk", "banana", "Eggplant"];

const combine = shoppingList.concat(groceryList);
console.table(combine);
*/
/*----------------------------------------------*/

/*This is for Array .copyWithin() Method  -returns a shallow copy of an array where one subarray replaces another part without modifying the original length*/

/*----------------------------------------------*/
/*
const shoppingList = ["bag", "shampoo", "clothes", "shoes"];

const combine = shoppingList.copyWithin(3, 1);
console.table(combine);
*/
/*----------------------------------------------*/

/*This is for Array .every() Method  -iterates over each element in an array and stops when a falsy value is returned by the provided callback function*/

/*----------------------------------------------*/

// const arr = [5, 9, 29, 57, 1];
// console.log(arr.every((i) => i !== undefined));
/*
const numbers = [3, 5, 7, 9, 11];
const allEven = numbers.every((i) => i % 2 === 1);

console.log(allEven);
*/
/*----------------------------------------------*/

/*This is for Array .filter() Method  -creates a new array with all elements that pass the test from the provided function.*/

/*----------------------------------------------*/
// Filter small values
// const numbers = [30, 78, 4, 23, 546];
// const allEven = numbers.filter((i) => i < 24);

// console.log(allEven);

// Filter index
// const numbers = [30, 78, 4, 23, 546];
// const allEven = numbers.filter((element, index) => {
//   return index % 2 === 0;
// });

// console.log(allEven);

//Filtering out names that don’t begin with the given character:

// const names = ["Jim", "Bob", "Sarah", "Alex", "James", "Sam", "Peter"];

// const filteredNames = (char, array) => {
//   return array.filter((name) => name[0].toLowerCase() === char);
// };

// console.log(filteredNames("j", names));

// let techCompany = [
//   {name: 'John Doe', tenure: 8, position: 'Developer'},
//   {name: 'Elisabeth Hills', tenure: 2, position: 'Developer'},
//   {name: 'Izabella Zboncak', tenure: 4, position: 'Finance'},
//   {name: 'Jane Smith', tenure: 11, position: 'Developer'},
//   {name: 'Mo DuBuque', tenure: 3, position: 'HR'},
//   {name: 'Markus Pagac', tenure: 9, position: 'CEO'},
//   {name: 'Jack Jakubowski', tenure: 7, position: 'Developer'}
// ];

// let employees = techCompany.filter(company => company.tenure <= 5 && company.position == 'Developer');

// console.log(employees)

/*----------------------------------------------*/

/*This is for Array .find() Method  - method returns the first element in the array that satisfies the given functi*/

/*----------------------------------------------*/
/*
const names = ["cora", "may", "joana", "alicia"];

const filteredNames = (char, array) => {
  return array.find((name) => name[0].toLowerCase() === char);
};
console.log(filteredNames("c", names));

*/
/*----------------------------------------------*/

/*This is for Array .findIndex() Method  - the first index that passes the callback function’s test. Returns -1 if no element passes the test.ement in the array that satisfies the given functi*/

/*----------------------------------------------*/
/*
const names = ["cora", "may", "joana", "alicia"];

const findIndexNames = (char, array) => {
  return array.findIndex((name) => name[0].toLowerCase() === char);
};
console.log(findIndexNames("a", names));
*/
/*----------------------------------------------*/

/*This is for Array .findIndex() Method  - the first index that passes the callback function’s test. Returns -1 if no element passes the test.ement in the array that satisfies the given functi*/

/*----------------------------------------------*/
/*
const names = ["cora", "may", "joana", "alicia"];

const findIndexNames = (char, array) => {
  return array.findIndex((name) => name[0].toLowerCase() === char);
};
console.log(findIndexNames("a", names));
*/
/*----------------------------------------------*/
