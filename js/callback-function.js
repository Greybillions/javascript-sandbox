// calling a function inside of a function,for example

function greet(name, callback) {
  console.log(`Hello ${name} lets practice call back functions`);
  callback();
}

greet(`Graham`, () => {
  console.log(`it is i, the call back function`);
});

//Task
function showCallFunc(func) {
  const value = 'Bitch im the man 😂';
  func(value);
}

showCallFunc((value) => {
  console.log(value);
});
