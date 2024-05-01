'use strict';

// defining the random number for comparison
let secretNumber = Math.trunc(Math.random() * 50) + 1;

let score = 20;
let highScore = 0;

//check number if guessed right
document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;

  // when no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Type in a Number!';
  }

  // when player wins
  else if (Number(guess) === secretNumber) {
    document.querySelector('.message').textContent = '✅ 💃🏽 Correct Number!';
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = secretNumber;

    //Adding modifications to background when player wins
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  //when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '❌ Wrong Answer, Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    }

    //when player loses
    else {
      document.querySelector('.message').textContent = 'GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '❌ Wrong Answer, Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    }

    //when player loses
    else {
      document.querySelector('.message').textContent = 'GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//again function
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background = `purple`;
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
});
