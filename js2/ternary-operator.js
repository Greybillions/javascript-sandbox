// Task 1

//first solution using a person object
const person = {
  hasMoney: true,
};

function moneyChecker(money) {
  return money === true ? 'buy products' : 'should bring money';
}

const { hasMoney } = person;
const res = moneyChecker(hasMoney);

console.log(res);

// second solution
let peronMoney = true;
let haveMoney =
  peronMoney === true ? 'have money to buy products' : 'should bring money';

console.log(haveMoney);
