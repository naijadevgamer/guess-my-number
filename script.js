'use strict';

let randNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('You must enter a number 😉');
  } else if (guess !== randNum) {
    score--;
    if (score === 0) {
      displayMessage("You're a loser 🤣");
      displayScore(score);
    } else {
      displayMessage(guess < randNum ? '⛰️ Guess higher' : 'Guess lower ↘️');
      displayScore(score);
    }
  } else if (guess === randNum) {
    displayMessage('Winner 🔥🔥');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = randNum;
    document.querySelector('.number').style.width = '25rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

// reset game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randNum = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
