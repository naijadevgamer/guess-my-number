'use strict';

let randNum = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = randNum;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  let score = Number(document.querySelector('.score').textContent);
  if (!guess) {
    document.querySelector('.message').textContent = 'You must enter a number';
  } else if (guess < randNum) {
    if (score <= 0) {
      document.querySelector('.message').textContent = 'You lose';
    } else {
      document.querySelector('.message').textContent = 'Guess higher';
      score--;
    }
  } else if (guess > randNum) {
    if (score <= 0) {
      document.querySelector('.message').textContent = 'You lose';
    } else {
      document.querySelector('.message').textContent = 'Guess lower';
      score--;
    }
  } else if (guess === randNum) {
    document.querySelector('.message').textContent = 'You win';
  }
});
