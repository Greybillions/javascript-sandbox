'use strict';

import books from './main.js';

// solution 1
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

// solution 2
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);

//solution 3
function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}

printBookAuthorsCount('MONEY', 'kelly', 'Richies');
