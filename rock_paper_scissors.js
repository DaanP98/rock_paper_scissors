function getComputerChoice() {
  //generate a random number
  let randomNumber = Math.random();
  //if smaller than 0,33: return rock
  if (randomNumber < 0.33) {
    return "rock";
  }
  //if bigger than 0,33 and smaller than 0,66: return paper
  else if (randomNumber >= 0.33 && randomNumber < 0.66) {
    return "paper";
    //else: return scissors
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
  //pop up window for user to give an answer
  let userChoice = prompt(
    "What is your Choice?",
    "Rock, paper or scissors",
  ).toLowerCase();
  //if answer = rock, paper or scissors, return answer
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    return userChoice;
  }
  //if else = wrong answer, try again
  else {
    alert("Oops, that was not an option. Try again!");
    return getHumanChoice();
  }
}

//starting point for both scores
let humanScore = 0;
let computerScore = 0;

function playRound() {
  //parameters receive value from previous steps, but make them case-insensitive
  let humanChoice = getHumanChoice().toLowerCase();
  let computerChoice = getComputerChoice();

  //compare both answers and give point to winner
  if (humanChoice === computerChoice) {
    console.log("It's a draw! Try again!");
  }
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock.");
    computerScore += 1;
  }
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors.");
    humanScore += 1;
  }
  if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats paper.");
    computerScore += 1;
  }
  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock.");
    humanScore += 1;
  }
  if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors.");
    computerScore += 1;
  }
  if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper.");
    humanScore += 1;
  }
  console.log("Your score is " + humanScore + ".");
  console.log("My score is " + computerScore + ".");
}

// play round 5 times
function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  console.log(
    "This is the end of the game. Your final score is " +
      humanScore +
      " and mine is " +
      computerScore +
      ".",
  );
}

playGame();
