// First challenge

const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.unshift(0);
arr.reverse();

console.log(arr);

//second challenge

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// solution 1
let arr3 = [arr1.slice(0, 4), arr2];

arr3 = arr3.flat();

console.log(arr3)

// solution 2
arr3 = arr1.slice(0, 4,).concat(arr2);

console.log(arr3);