function computerPlay(){
    let computerSelection = Math.floor(Math.random()*(2-0+1)+0); 
    if (computerSelection === 0){
        return "scissors";
    }
    else if (computerSelection === 1){
        return "rock";
    }
    else if(computerSelection === 2){
        return "paper";
    }
}


let playerChoice = prompt("Rock, Paper, Scissors!:");
let playerSelection = playerChoice.toLowerCase();
const computerSelection = computerPlay();
console.log(computerSelection);