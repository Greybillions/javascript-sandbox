const cart = [
  { id: 1, product: 'vegetable', price: 130 },
  { id: 2, product: 'iPhone', price: 150 },
  { id: 3, product: 'cloths', price: 175 },
];

const totalPrice = cart.reduce((a, c) => a + c.price, 0);
console.log(totalPrice);

// task 2

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'jd@gmail.com',
    age: 30,
    phone: '111-111-1111',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janed@gmail.com',
    age: 25,
    phone: '222-222-2222',
  },
  {
    firstName: 'Bob',
    lastName: 'Doe',
    email: 'bobd@gmail.com',
    age: 45,
    phone: '333-333-3333',
  },
  {
    firstName: 'Sara',
    lastName: 'Doe',
    email: 'sarad@gmail.com',
    age: 19,
    phone: '444-444-4444',
  },
  {
    firstName: 'Anna',
    lastName: 'Doe',
    email: 'annad@gmail.com',
    age: 23,
    phone: '555-555-5555',
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => {
    return {
      name: `${person.firstName} ${person.lastName}`,
      age: person.age,
    };
  });
console.log(youngPeople);

//task 3
const numbers = [2, -30, 50, 20, -12, -9, 7];

const addPosNum = numbers.filter((x) => x > 0).reduce((a, c) => a + c, 0);

console.log(addPosNum);

//task 4

const words = ['coder', 'programmer', 'developer'];

const cWord = words.map((word) => word[0].toUpperCase() + word.slice(1));

console.log(cWord);
