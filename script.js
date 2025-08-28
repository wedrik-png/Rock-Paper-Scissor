function getComputerChoice(){
    const intChoice = Math.random();
    if (intChoice>=0 && intChoice<=0.333){
        return "Rock";
    }
    else if (intChoice>0.333 && intChoice<=0.666){
        return "Paper";
    }
    else {
        return "Scissor";
    }
}
console.log(getComputerChoice());