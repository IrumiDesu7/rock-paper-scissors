function computerPlay() {
  let computerWeapons = ['rock', 'paper', 'scissors'];
  return computerWeapons[Math.floor(Math.random() * computerWeapons.length)];
}

function playRound(playerSelection, computerSelection) {
  let score = 0;
  if (playerSelection === computerSelection) {
    score;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    score++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    score++;
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    score++;
  } else {
    score--;
  }
  return score;
}

function game() {
  let total = 0;
  for (let i = 0; i < 4; i++) {
    total += playRound('scissors', 'scissors');
  }
  return total;
}

console.log(game());
