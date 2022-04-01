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
  }
  return score;
}

function game() {
  let total = 0;
  console.log(
    'if your score is higher or equal to 3, you win. otherwise you lose'
  );
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('rock paper scissors', 'rock');
    total += playRound(playerSelection, computerPlay());
  }
  if (total > 3) {
    return `your score is : ${total}/5. you WIN`;
  } else {
    return `your score is : ${total}/5. you LOSE`;
  }
}

console.log(game());
