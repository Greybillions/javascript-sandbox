'use strict';

import games from './games.js';

//task 1
const [players1, players2] = games.players;

console.log(players1, players2);

//task 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// task 4
const players1Finals = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Finals);

//task 5
const { team1, x: draw, team2 } = games.odds;
console.log(team1, draw, team2);

//task 6
function printGoals(playerNames, goalsScored) {
  //   for (let i = 0; i < playerNames.length; i++) {
  console.log(playerNames);
  console.log(`${playerNames.length} players scored goal.
    Goals scored: ${goalsScored}`);
}

printGoals(games.scored, games.score);

//task 7
team1 < team2 && console.log('Team1 is most likely to win');
team1 > team2 && console.log('Team2 is most likely to win');
