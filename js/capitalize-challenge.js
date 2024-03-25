//Change the first letter of the string to uppercase
const myString = 'developer';

let newString;
//solution 1:
newString = myString.charAt(0).toUpperCase() + myString.substring(1);

//solution 2:
newString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

//solution 3:
newString = myString.charAt(0).toUpperCase() + myString.slice(1);

console.log(newString);