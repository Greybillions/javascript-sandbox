// task 1 finding adults

const ages = [32, 33, 16, 40];

const adults = ages.filter((age) => age > 18);

// console.log(adults);

// task 2

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const longerWords = words.filter((i) => i.length >= 6);

// console.log(longerWords);

// task 3
const products = [
  { name: 'chess', category: 'toys' },
  { name: 'ps5', category: 'toys' },
  { name: 'checkers', category: 'toys' },
  { name: 'harry potter', category: 'books' },
  { name: 'iphone', category: 'electronics' },
  { name: 'samsung', category: 'electronics' },
  { name: 'learn JavaScript', category: 'books' },
];

const bookProducts = products.filter((x) => x.category === 'books');
const electProducts = products.filter((x) => x.category === 'electronics');
const toyProducts = products.filter((x) => x.category === 'toys');

console.log(`books: `, bookProducts);
console.log(`electronics: `, electProducts);
console.log(`toys & games: `, toyProducts);
