// task 1

const person = {
  name: 'Graham Boyle',
  age: 24,
  isDev: true,
  gender: 'male',
  country: 'Nigeria',
};

const { name, age, country } = person;

console.log(name, age, country);

// task 2

const person2 = {
  name: 'Richies Boyle',
  age: 22,
  isDev: true,
  gender: 'male',
  country: 'Nigeria',
};

const { name: personName, age: personAge, country: personCountry } = person2;

console.log(personName);
console.log(personAge);
console.log(personCountry);
