// Function to return the computer choice
function getComputerChoice() {
    const words = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * words.length);
    const guess = words[randomIndex];
    return guess;
}

// Function to get the human choice
function getHumanChoice() {
    let choice = window.prompt("Enter one of the choices (rock, paper or scissors)").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        alert("Welcome! You chose: " + choice);
        return choice;
    } else {
        alert("Please enter a valid string.");
        return null;
    }
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("It's a draw!");
        return "draw";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        alert(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human";
    } else {
        alert(`Computer wins! ${computerChoice} beats ${humanChoice}`);
        return "computer";
    }
}

// Function to play the game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 3;

    for (let i = 0; i < rounds; i++) {
        let humanSelection = null;
        
        // Keep prompting until valid input
        while (humanSelection === null) {
            humanSelection = getHumanChoice();
        }

        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
    }

    alert(`Final Scores:\nYou: ${humanScore}\nComputer: ${computerScore}`);
}
