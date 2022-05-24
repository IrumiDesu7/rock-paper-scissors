const rps = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;
let draw = 0;

function computerPlay() {
  return rps[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let referee = '';
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
    referee = `You Lose! ${computerSelection} beats ${playerSelection} `;
    computerScore++;
  }
  return referee;
}

function game() {
  for (let i = 0; i < 5; i++) {
    let userInput = prompt();
    playRound(userInput, computerPlay());
    if (i === 4) {
      if (userScore > computerScore) {
        console.log(
          'You win! Score : ' +
            userScore +
            '\nEnemy Score : ' +
            computerScore +
            '\ndraw count : ' +
            draw
        );
      } else {
        console.log(
          'You lose! Score : ' +
            userScore +
            '\nEnemy Score : ' +
            computerScore +
            '\ndraw count : ' +
            draw
        );
      }
    }
  }
}

game();
