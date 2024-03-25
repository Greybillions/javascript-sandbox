const fruit = 'orange';
const aFruit = 'how you like them apples?';
const bFruit = 'banana is good';
const cFruit = 'not a fan of coconuts';
const dFruit = "i've never heard of that fruit";

switch (fruit) {
  case 'apple':
    console.log(aFruit);
    break;
  case 'banana':
    console.log(bFruit);
    break;
  case 'coconuts':
    console.log(cFruit);
    break;
  default:
    console.log(dFruit);
}
