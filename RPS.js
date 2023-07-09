
let computerSelection = getComputerChoice();

function getComputerChoice() {
    const values = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}


let playerSelection = prompt('Rock, Paper, or Scissors?', 'Rock');

playerSelection = getPlayerSelection(playerSelection);

computerSelection = computerSelection.toLowerCase();

function getPlayerSelection(playerSelection) {
    const normalizedSelection = playerSelection.toLowerCase(); // Convert to lowercase
    
    if (
      normalizedSelection === 'rock' || 
      normalizedSelection === 'paper' || 
      normalizedSelection === 'scissors'
    ) {
      return normalizedSelection;
    } else {
      throw new Error('Invalid selection. Please choose Rock, Paper, or Scissors.');
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    let playerSelection = getPlayerSelection(prompt('Rock, Paper, or Scissors?', 'Rock'));
    let computerSelection = getComputerChoice();

    let roundResult = playRound(playerSelection, computerSelection);
    console.log(`Round ${round}: ${roundResult}`);

    if (roundResult.startsWith("You Win!")) {
      playerScore++;
    } else if (roundResult.startsWith("You Lose!")) {
      computerScore++;
    }
  }


console.log(`Final Score: Player ${playerScore} - ${computerScore} Computer`);

if (playerScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Sorry, you lost the game.");
  } else {
    console.log("It's a tie game.");
  }
}

game()