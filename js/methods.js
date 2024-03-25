// methods are functions inside an object, for example

//example 1
function greet() {
  return `Hello, my name is ${person.name} and i am ${person.age} years old. I live in ${person.location}.`;
}

const person = {
  name: 'Graham Boyle',
  age: 24,
  location: 'Lagos, Nigeria',
  greet,
};

console.log(greet());

//example 2
const person2 = {
  name: 'Richies Boyle',
  age: 22,
  location: 'Port Harcourt, Nigeria',
  greet2: function () {
    return `Hello, my name is ${person2.name} and i am ${person2.age} years old. I live in ${person2.location}.`;
  },
};

console.log(person2.greet2());
