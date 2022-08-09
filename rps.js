function playerSelection(){
    document.querySelector('#Rock').onclick = function() {
        playRound("rock");
    }
    document.querySelector('#Paper').onclick = function() {
        playRound("paper");
    }
    document.querySelector('#Scissors').onclick = function() {
        playRound("scissors");
    }
}

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

function playRound(playerChoice){
    const computerSelection = computerPlay();
    const playerScore = document.getElementById('playerscore');
    const pcScore = document.getElementById('pcscore');
    const winner = document.getElementById('winner');
    if (parseInt(playerScore.textContent) == 5){
        winner.innerHTML = "You Win!!!";
    }
    else if(parseInt(pcScore.textContent) == 5){
        winner.innerHTML = "Computer won...";
    }
    else {
        if (computerSelection === playerChoice){
            console.log("the computer says:" + computerSelection + " ,it's a Draw!!");
        }
        else if (computerSelection === "rock" && playerChoice === "paper"){
            console.log("the computer says:" + computerSelection + " ,You won!!");
            playerScore.innerHTML = `${parseInt(playerScore.textContent)+1}`;
        }
        else if (computerSelection === "paper" && playerChoice === "scissors"){
            console.log("the computer says:" + computerSelection + " ,You won!!");
            playerScore.innerHTML = `${parseInt(playerScore.textContent)+1}`;
        }
        else if (computerSelection === "scissors" && playerChoice === "rock"){
            console.log("the computer says:" + computerSelection + " ,You won!!");
            playerScore.innerHTML = `${parseInt(playerScore.textContent)+1}`;
        }
        else {
            console.log("the computer says: " + computerSelection + " ,You lost.");
            pcScore.innerHTML = `${parseInt(pcScore.textContent)+1}`;
        }
    }

}

playerSelection();