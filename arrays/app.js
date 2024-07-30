'use strict';

const account1 = {
  owner: 'Graham Boyle',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

account1.movements.forEach((mov, i) => {
  mov > 0
    ? console.log(`${i}: You deposited ${mov}`)
    : console.log(`${i}: You withdrew ${Math.abs(mov)}`);
});
