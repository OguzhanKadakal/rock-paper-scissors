//SCORE VARIABLES
let humanScore = 0;
let computerScore = 0;

function playGame() {
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
    let userInput = prompt("Enter your decision! Rock, Paper or Scissor?");
    if (userInput.toLowerCase() === "rock") {
      return "Rock";
    } else if (userInput.toLowerCase() === "paper") {
      return "Paper";
    } else if (userInput.toLowerCase() === "scissors") {
      return "Scissors";
    } else {
      console.log("Invalid choice! Defaulting to Rock.");
      return "Rock";
    }
  }
  const humanSelection = getHumanChoice();

  // ROUND AND RESULT FUNCTION
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Rock") {
      return "Draw! Rock can't beat Rock";
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
      return "Draw! Paper can't beat Paper";
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
      return "Draw! Paper can't beat Paper";
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
      return "You Lose! Rock can't beat Paper";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
      return "You Win! Rock can beat Scissors";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
      return "You win! Paper beat Rock";
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
      return "You Lose! Paper can't beat Scissors";
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
      return "You Lose! Scissors can't beat Rock";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
      return "You Win! Scissors can't beat Paper";
    }
  }

  let result = playRound(humanSelection, computerSelection);
  console.log(result);

  //SCORE COUNTER
  function score(counter) {
    if (counter.includes("Win")) {
      humanScore++;
    } else if (counter.includes("Lose")) {
      computerScore++;
    }
  }
  score(result);
  console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

for (let i = 0; i < 5; i++) {
  playGame();
}

if (humanScore > computerScore) {
  console.log("Congratulations! You Win The Game!");
} else if (humanScore === computerScore) {
  console.log("Draw! Better Luck next Time!");
} else {
  console.log("You Lose The Game! Better Luck Next Time!");
}
