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

function playRound(computerSelection , playerSelection){
    if (computerPlay === playerSelection){
        return("the computer says:" + computerSelection + " ,it's a Draw!!");
    }
    else if (computerSelection === "rock" && playerSelection === "paper"){
        return("the computer says:" + computerSelection + " ,You won!!");
    }
    else if (computerSelection === "paper" && playerSelection === "scissors"){
        return("the computer says:" + computerSelection + " ,You won!!");
    }
    else if (computerSelection === "scissors" && playerSelection === "rock"){
        return("the computer says:" + computerSelection + " ,You won!!");
    }
    else {
        return ("the computer says: " + computerSelection + " ,You lost.");
    }
}

let playerChoice = prompt("Rock, Paper, Scissors!:");
let playerSelection = playerChoice.toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(computerSelection, playerSelection));