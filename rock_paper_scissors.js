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

const buttonRock = document.createElement("button");
buttonRock.textContent = "Rock";
document.body.appendChild(buttonRock);
const buttonPaper = document.createElement("button");
buttonPaper.textContent = "Paper";
document.body.appendChild(buttonPaper);
const buttonScissors = document.createElement("button");
buttonScissors.textContent = "Scissors";
document.body.appendChild(buttonScissors);

buttonRock.addEventListener("click", function () {
  playRound("rock");
});
buttonPaper.addEventListener("click", function () {
  playRound("paper");
});
buttonScissors.addEventListener("click", function () {
  playRound("scissors");
});

//starting point for both scores
let playerScore = 0;
let computerScore = 0;

const results = document.createElement("div");
document.body.appendChild(results);

function playRound(playerChoice) {
  //parameters receive value from previous steps, but make them case-insensitive
  //let playerChoice = getHumanChoice().toLowerCase();
  let computerChoice = getComputerChoice();
  console.log("My choice is " + getComputerChoice());
  console.log("Your choice is " + playerChoice);
  //compare both answers and give point to winner
  if (playerChoice === computerChoice) {
    console.log("It's a draw! Try again!");
  }
  if (playerChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock.");
    computerScore += 1;
  }
  if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors.");
    playerScore += 1;
  }
  if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats paper.");
    computerScore += 1;
  }
  if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock.");
    playerScore += 1;
  }
  if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors.");
    computerScore += 1;
  }
  if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper.");
    playerScore += 1;
  }

  results.textContent =
    "You chose " +
    playerChoice +
    ". I chose " +
    computerChoice +
    ". Your score is " +
    playerScore +
    ". My score is " +
    computerScore +
    ".";

  if (playerScore >= 5) {
    results.textContent +=
      " Congrats! This is the end of the game. You have 5 points, you win the game!";
    document.body.removeChild(buttonRock);
    document.body.removeChild(buttonPaper);
    document.body.removeChild(buttonScissors);
  } else if (computerScore >= 5) {
    results.textContent +=
      " Oh too bad, this is the end of the game. I have 5 points so I win. Loser!";
    document.body.removeChild(buttonRock);
    document.body.removeChild(buttonPaper);
    document.body.removeChild(buttonScissors);
  }
}
