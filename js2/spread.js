// task 1

const arr = [1, 2, 3];
const arr2 = [4, 5];

const arrClone = [...arr, ...arr2];
console.log(arrClone);

const user = {
  name: 'Graham Boyle',
  age: 24,
};

const userClone = { ...user, location: 'Berlin' };
console.log(userClone);
