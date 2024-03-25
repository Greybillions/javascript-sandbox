// learning Functions

// example 1
function sayHello() {
  console.log('hello world');
}
sayHello(); // use this to call/execeute the function on the console

//example 2
function add(num1, num2) {
  console.log(num1 + num2);
}
add(90, 6);

// example 3
function sub(num1, num2) {
  return num1 - num2;

  console.log('after the return'); //this wont work
}

const result = sub(60, 70);

console.log(result, sub(50, 90));
