'use strict';

import books from './main.js';

// solution 1
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

// solution 2
const { keywords: tags } = books[0];
console.log(tags);

// solution 3
const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);

// solution 4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookAuthor, bookTitle);

// solution 5
const {
  thirdParty: {
    goodReads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

//solution 6
function printBookInfo({ title, author, publicationDate = 'Unknown' }) {
  console.log(`${title} by ${author}, ${publicationDate.slice(0, 4)}`);
}

for (let book of books) {
  printBookInfo(book);
}
// printBookInfo(books[1]);
// printBookInfo(books[2]);
// printBookInfo(books[3]);
// printBookInfo(books[4]);
// printBookInfo(books[5]);
// printBookInfo(books[6]);
// printBookInfo(books[7]);

// console.log("let's make pasta");
