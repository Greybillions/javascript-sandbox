'use strict';

import books from './main.js';

// solution 1
const bookAuthors = [...books[0].author, ...books[1].author];

console.log(bookAuthors);

// solution 2
function spellWord(word) {
  console.log(...word);
}

spellWord('Javascript');
