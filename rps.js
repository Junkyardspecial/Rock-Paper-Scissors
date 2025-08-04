let computerScore = 0;
let humanScore = 0;
let roundWinner = "";

function getComputerChoice() {
    let choice = Math.floor(Math.random()* 30);
    if (choice <= 10) {
      return "rock";
    }else if (choice <= 20) {
      return "paper";
    }else {
      return "scissors";
    }
}

function getHumanChoice() {
  let humanChoice = prompt("Pick your weapon: Rock, Paper, or Scissors?")

  if (humanChoice === null) {
    console.log("You didn't make a choice, choose again!");
    return getHumanChoice();
  }else if (humanChoice.toLowerCase() == "rock"){
    return "rock";
  }else if (humanChoice.toLowerCase() == "paper"){
    return "paper";
  }else if (humanChoice.toLowerCase() == "scissors"){
    return "scissors";
  }else{
    console.log("Invalid choice, please select Rock, Paper, or Scissors.");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {

  console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    roundWinner = "tie";
  }
  else if ((humanChoice === "scissors" && computerChoice === "paper") ||
           (humanChoice === "paper" && computerChoice === "rock") ||
           (humanChoice === "rock" && computerChoice === "scissors")) {
      humanScore++;  
      roundWinner = "human";
      console.log("You won this round!");
    }
  else if ((computerChoice === "scissors" && humanChoice === "paper")||
           (computerChoice === "paper" && humanChoice === "rock") ||
           (computerChoice === "rock" && humanChoice === "scissors")) {
      computerScore++;
      roundWinner = "computer";
      console.log("You lost this round, try again!");
    }
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    gameOver();
  }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

if(humanSelection && computerSelection) {
  playRound(humanSelection, computerSelection);
}else {
  console.log("No valid choices, game ended.");
}

function gameOver() {
  if (humanScore >= 5) {
    console.log("You win the game!");
    return true;
  }else if (computerScore >= 5){
    console.log("You lose! The computer has won.");
    return true;
  }
  return false;
}

