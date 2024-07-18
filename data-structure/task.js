'use strict';

import games from './games.js';

// task 1
for (const [index, player] of games.scored.entries())
  console.log(`Goals ${index + 1}: ${player}`);

// task 2
const odds = Object.values(games.odds);
let average = 0;

for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//task 3
for (const [team, odd] of Object.entries(games.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${games[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
