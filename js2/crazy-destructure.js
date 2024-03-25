const data = {
  user: {
    id: '007',
    name: 'Graham Olayile Boyle',
    dob: '9th March, 1999',
    age: 24,
    email: 'olayile1999@gmail.com',
    address: {
      country: 'Nigeria',
      state: 'Lagos',
      estate: 'Lekki Gardens Estate',
    },
    hobbies: [
      'programming',
      'video games',
      'long walks on a beach',
      'writing',
      'singing',
      'movies',
    ],
    score: {
      maths: 90,
      english: 100,
      science: 95,
      history: 50,
    },
  },
  products: [
    { id: 1, name: 'laptop', price: 900 },
    { id: 2, name: 'iPhone 15', price: 1500 },
    { id: 3, name: 'JBL Speaker', price: 150 },
  ],
  settings: {
    darkmode: true,
    notifications: {
      email: true,
      sms: true,
      push: false,
    },
    language: 'english',
  },
};

const {
  user: {
    id,
    name,
    dob,
    age,
    email,
    address: { state, country, estate },
    hobbies,
    score: {
      maths: mathsScore,
      english: englishScore,
      science: scienceScore,
      history: historyScore,
    },
  },
  products: [product1, product2, product3],
  settings: {
    darkmode,
    notifications: {
      email: emailNotification,
      sms: smsNotification,
      push: pushNotification,
    },
    language,
  },
} = data;

console.log(`id: ${id}`);
console.log(`name: ${name}`);
console.log(`dob: ${dob}, ${age} years old`);
console.log(`email: ${email}`);
console.log(`address: ${country}, ${state}, ${estate}`);
console.log(`hobbies: ${hobbies.join(', ')}`);
console.log(`math score: ${mathsScore}`);
console.log(`english score: ${englishScore}`);
console.log(`science score: ${scienceScore}`);
console.log(`history score: ${historyScore}`);
console.log(`product 1: ${product1.name}, price: ${product1.price}`);
console.log(`product 2: ${product2.name}, price: ${product2.price}`);
console.log(`product 3: ${product3.name}, price: ${product3.price}`);
console.log(`darkmode: ${darkmode}`);
console.log(`email notifications: ${emailNotification}`);
console.log(`sms notifications: ${smsNotification}`);
console.log(`push notifications: ${pushNotification}`);
console.log(`lang: ${language}`);
