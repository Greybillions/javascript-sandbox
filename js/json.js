const person1 = {
  name: 'Graham Boyle',
  age: 24,
  address: {
    state: 'Lagos',
    city: 'lekki',
    country: 'Nigeria',
  },
  isDeveloper: true,
  isRich: true,
  isMarried: false,
};

const person2 = {
  name: 'Richies Boyle',
  age: 22,
  address: {
    state: 'Rivers',
    city: 'Port Harcourt',
    country: 'Nigeria',
  },
  isDeveloper: false,
  isRich: true,
  isMarried: false,
};

console.log(person1, person2);

const toJson = JSON.stringify(person1);
const toJson2 = JSON.stringify(person2);

console.log(toJson, toJson2);

const toJs = JSON.parse(toJson);
const toJs2 = JSON.parse(toJson2);

console.log(toJs, toJs2);
