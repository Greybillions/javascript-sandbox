/* for each loop Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/

// task 1
const fruits = [
  'apple',
  'banana',
  'coconut',
  'pear',
  'cucumber',
  'orange',
  'guava',
  'blueberry',
];

fruits.forEach((e, idx) => {
  console.log(`${idx}: ${fruits[idx]} includes an a? ${e.includes('a')}.`);
});

// task 2

const numbers = [2500, 5000, 3500, 2000, 7000];

let sum = 0;

add = (x) => (sum += x); //adder function

numbers.forEach(add);

console.log(sum);
