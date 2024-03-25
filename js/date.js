let x;
let date = new Date();

x = date.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  //   timeZone: 'GMT',
});

console.log(x);
console.log(date.toLocaleDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());
