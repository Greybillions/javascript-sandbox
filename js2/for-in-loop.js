// task 1

const object = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

for (let keys in object) {
  console.log(`${keys}: ${object[keys]}`);
}
