import books from './main.js';

const [firstBook, secondBook] = books;
const [, , thirdBook] = books;
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const ratingStars = [63405, 1808];

const [[, rating], [, ratingsCount]] = ratings;
const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
  ratingStars;

console.log(firstBook, secondBook);
console.log(thirdBook);
console.log(rating, ratingsCount);
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
