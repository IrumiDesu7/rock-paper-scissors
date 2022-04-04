const playerSelectionBtns = document.querySelectorAll('.btn');
const result = document.querySelector('.result');
const playerScore = document.querySelector('#yourScore');
const botScore = document.querySelector('#botScore');
let arr = [0, 0];
let yourScore = arr[0];
let computerScore = arr[1];

function computerPlay() {
  let computerWeapons = ['rock', 'paper', 'scissors'];
  return computerWeapons[Math.floor(Math.random() * computerWeapons.length)];
}

function playRound(playerSelection, computerSelection) {
  let arr = ['AW, YOU LOSE', 0];

  if (playerSelection === computerSelection) {
    arr[0] = 'DRAW';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    arr[0] = 'YOU WIN';
    arr[1]++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    arr[0] = 'YOU WIN';
    arr[1]++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    arr[0] = 'YOU WIN';
    arr[1]++;
  }
  return arr;
}

playerSelectionBtns.forEach((e) =>
  e.addEventListener('click', function () {
    const playerSelection = e.textContent.toLowerCase();
    const computerSelection = computerPlay();
    const resultText = playRound(playerSelection, computerSelection);
    result.textContent = resultText[0];
    if (result.textContent === 'AW, YOU LOSE') {
      yourScore++;
    } else if (result.textContent === 'YOU WIN') {
      computerScore++;
    }
    playerScore.textContent = yourScore;
    botScore.textContent = computerScore;
    if (yourScore === 5) {
      result.textContent = 'YOU WIN THIS MATCH!';
      computerScore = 0;
      yourScore = 0;
    } else if (computerScore === 5) {
      result.textContent = 'COMPUTER WIN! WHY U SO NOOB?';
      computerScore = 0;
      yourScore = 0;
    }
  })
);
