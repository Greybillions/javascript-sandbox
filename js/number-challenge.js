// Number Challenge solutions:

//create variables x (random 1 to 100) and y (random 1 to 50)
let x;
let y;

// assign value to variables
x = Math.floor(Math.random() * 50 + 1);
y = Math.floor(Math.random() * 100 + 1);

//create variable for sum, difference, product, quotient, and remainder
const sum = x + y;
const difference = x - y;
const product = x * y;
const quotient = x / y;
const remainder = x % y;

// create the operations varible output
const sumOutput = `${x} + ${y} = ${sum}`;
const diffOutput = `${x} - ${y} = ${difference}`;
const pdOutput = `${x} * ${y} = ${product}`;
const quotientOutput = `${x} / ${y} = ${Math.floor(quotient)}`;
const rmOutput = `${x} % ${y} = ${remainder}`;

//output operations and results
console.log(sumOutput);
console.log(diffOutput);
console.log(pdOutput);
console.log( quotientOutput);
console.log(rmOutput);