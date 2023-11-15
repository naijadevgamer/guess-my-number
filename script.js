'use strict';

let randNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'You must enter a number';
  } else if (guess !== randNum) {
    score--;
    if (score === 0) {
      document.querySelector('.message').textContent = "You're a loser 🤣";
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `${
        guess < randNum ? '⛰️ Guess higher' : 'Guess lower ↘️'
      }`;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess === randNum) {
    document.querySelector('.message').textContent = 'Winner 🔥🔥';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = randNum;
    document.querySelector('.number').style.width = '25rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
