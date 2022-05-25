const rps = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
const roundWinnerDiv = document.querySelector('.roundWinner');
const userScoreDiv = document.querySelector('.userScore');
const computerScoreDiv = document.querySelector('.computerScore');
const computerButtons = document.querySelectorAll('.computer');

let userScore = 0;
let computerScore = 0;
let draw = 0;
let isGameFinished = false;

function computerPlay() {
  return rps[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let referee = '';
  if (!isGameFinished) {
    if (playerSelection === computerSelection) {
      referee = "It's a draw!";
      draw++;
    } else if (playerSelection === rps[0] && computerSelection === rps[2]) {
      referee = `You win! ${playerSelection} beats ${computerSelection} `;
      userScore++;
    } else if (playerSelection === rps[1] && computerSelection === rps[0]) {
      referee = `You win! ${playerSelection} beats ${computerSelection} `;
      userScore++;
    } else if (playerSelection === rps[2] && computerSelection === rps[1]) {
      referee = `You win! ${playerSelection} beats ${computerSelection} `;
      userScore++;
    } else {
      referee = `Computer wins! ${computerSelection} beats ${playerSelection} `;
      computerScore++;
    }
  } else {
    restartGame();
    referee = `Choose Your Weapon!`;
  }
  isGameFinished = false;

  computerButtons[rps.indexOf(computerSelection)].classList.add('pressed');
  setTimeout(function () {
    computerButtons[rps.indexOf(computerSelection)].classList.remove('pressed');
  }, 1000);
  return referee;
}

function pressAnimation(e) {
  e.target.classList.add('pressed');
  setTimeout(function () {
    e.target.classList.remove('pressed');
  }, 155);
}

function restartGame() {
  userScore = 0;
  computerScore = 0;
}

function gameWinner(a, b) {
  if (a === 5) {
    roundWinnerDiv.textContent = `You win! Click any buttons to rematch`;
    isGameFinished = true;
  } else if (b === 5) {
    roundWinnerDiv.textContent = `Computer wins! Click any buttons to rematch`;
    isGameFinished = true;
  }
}

buttons.forEach((element) => {
  element.addEventListener('click', function (e) {
    if (e.target.classList.contains('player')) {
      pressAnimation(e);
      roundWinnerDiv.textContent = playRound(
        e.target.textContent,
        computerPlay()
      );
      userScoreDiv.textContent = 'Your Score : ' + userScore;
      computerScoreDiv.textContent = 'Computer Score : ' + computerScore;
      gameWinner(userScore, computerScore);
    }
  });
});
