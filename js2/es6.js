// Enhanced object literals

test = (a, b, c) => {
  return {
    a,
    b,
    c,
  };
};

const obj = test(1, 2, 3);

console.log(obj);

// task 2
const lib = {
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
  sub: (a, b) => a - b,
  div: (a, b) => a / b,
  rem: (a, b) => a % b,
};

console.log(lib.sub(70, 20));
console.log(lib.mult(70, 20));
console.log(lib.sum(70, 20));
console.log(lib.div(70, 20));
console.log(lib.rem(70, 20));

//Task 3
getPersonES6 = (name, age, height) => {
  return {
    name,
    age,
    height,
  };
};

const person = getPersonES6(`Graham`, 24, `6.1ft`);
console.log(person);
