//SCORE VARIABLES
let humanScore = 0;
let computerScore = 0;

// COMPUTER CHOICE FUNCTION
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
const computerSelection = getComputerChoice();

//HUMAN CHOICE FUNCTION
function getHumanChoice() {
    let userInput = prompt("Enter your decision! Rock, Paper or Scissor?")
    if (userInput.toLowerCase() === "rock") {
        return "Rock"
    } else if (userInput.toLowerCase() === "paper") {
        return "Paper"
    } else if (userInput.toLowerCase() === "scissors") {
        return "Scissors"
    }
}
const humanSelection = getHumanChoice();

function playRound(humanChoice, computerChoice) {
    if (humanSelection === "Paper" && computerSelection === "Paper") {
        return "Draw! Paper can't beat Paper!"
    } else if (humanSelection === "Rock" && computerSelection === "Rock") {
        return "Draw! Rock can't beat Rock!"
    } else if (humanSelection === "Scissors" && computerSelection === "Scissors") {
        return "Draw! Scissors can't beat Scissors!"
    } else {
        return "deneme"
    }
}


