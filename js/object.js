// Object Challenge

// create an array called library
const library = [
  {
    title: 'Thinking for a change',
    author: 'John C. Maxwell',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Richest Man in Babylon',
    author: 'Graham Boyle',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Not Giving a Fuck',
    author: 'Hillary Abigail',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// set read value to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//destructure title of the firstbook, renaming variable to first book

const { title: firstBook } = library[0];

//Turn library object to JSON script

const jstr = JSON.stringify(library);

console.log(jstr);
