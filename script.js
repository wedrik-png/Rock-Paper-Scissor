function getComputerChoice() {
    const intChoice = Math.random();
    if (intChoice <= 0.333) {
        return "Rock";
    } else if (intChoice <= 0.666) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Draw";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const playerChoice = prompt(`Round ${i}: Enter Rock, Paper, or Scissor:`); 
        const computerChoice = getComputerChoice();

        const winner = playRound(playerChoice, computerChoice);

        console.log(`Round ${i}: You chose ${playerChoice}, Computer chose ${computerChoice}.`);

        if (winner === "Player") {
            playerScore++;
            console.log("You win this round!");
        } else if (winner === "Computer") {
            computerScore++;
            console.log("Computer wins this round!");
        } else {
            console.log("It's a draw.");
        }
    }

    console.log("\nFinal Score:");
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("🎉 You win the game!");
    } else if (computerScore > playerScore) {
        console.log("💻 Computer wins the game!");
    } else {
        console.log("🤝 It's a tie!");
    }
}

game();
