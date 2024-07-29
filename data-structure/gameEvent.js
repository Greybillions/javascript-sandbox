'use strict';

import gameEvents from './game-events.js';

// task 1
const events = gameEvents.values();
console.log([...new Set(events)]);

// task 2
gameEvents.delete(64);

//task 3
const aveEventTime = 90 / gameEvents.size;
const output = `On average, an event happened every ${aveEventTime} minutes of the game`;
console.log(output);

//bonus
const time = [...gameEvents.keys()].pop();
console.log(time);
const output2 = `On average, an event happened every ${aveEventTime} minutes of ${time} of the game`;
console.log(output2);

//hard
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
