let pScore = 0;
let cScore = 0;


function displayResult(winner){
    let score = document.querySelector(".score");
    score.textContent = "Score: "+ pScore+ " "+ cScore;

    const container = document.querySelector("body")
    const div = document.createElement("h3");
    const oldResult = container.querySelector("h3");
    if (oldResult) oldResult.remove();
    if (winner == "Player"){
        div.textContent = "Yay! You won!"
    }
    else if (winner == "Computer"){
        div.textContent = "EVEN A COMPUTER WON FROM YOU!"
    }
    else{
        div.textContent = "Bum. It's a tie!"
    }
    container.appendChild(div);

}




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
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Draw";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ) {
        pScore++;
        return "Player";
    } else {
        cScore++;
        return "Computer";
    }
}

const buttons = document.querySelector(".buttons")
buttons.addEventListener("click", (e) => {
    player = null;
    if (e.target.classList.contains("rock")){
        player = "rock";
    }
    else if (e.target.classList.contains("paper")){
        player = "paper";
    }
    else  {
        player = "scissor";
    }
    if (player){
        computer = getComputerChoice();
        const winner = playRound(player, computer);
        displayResult(winner);
        }
    
});



