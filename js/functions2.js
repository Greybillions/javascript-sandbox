// learning to use functions

/* <-------- function declaration -------->
  Storing functions normally
*/

// the function can be called above or below the declaration, for example
sayHello('Grey');

function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello('Richies');

// return => function
function add(num1, num2) {
  return num1 + num2;
}

const result = add(1500, 600);

console.log(result);

// Task
function mul(x, y) {
  return x * y;
}

const result2 = mul(1500, 600);

console.log(result2);

/* <------- Function Expression -------->
 Storing functions in a variable 
*/

// u have to call ur function underneath your expression for example

const greet = function (user) {
  console.log(`Hello ${user}`);
};

greet('Graham');
