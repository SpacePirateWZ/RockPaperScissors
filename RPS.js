
let computerSelection = getComputerChoice()

function getComputerChoice() {
    const values = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * values.length)
    return values[randomIndex];
}


let playerSelection = prompt('Rock, Paper, or Scissors?','Rock')

playerSelection = getPlayerSelection(playerSelection);

computerSelection = computerSelection.toLowerCase()

function getPlayerSelection(playerSelection) {
    const normalizedSelection = playerSelection.toLowerCase(); // Convert to lowercase
    
    if (normalizedSelection === 'rock' || normalizedSelection === 'paper' || normalizedSelection === 'scissors') {
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
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

console.log(playRound(playerSelection,computerSelection))

