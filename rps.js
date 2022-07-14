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

function game(){
    for (let i = 0; i < 5; i++){
        let playerChoice = prompt("Rock, Paper, Scissors!:");
        let playerSelection = playerChoice.toLowerCase();
        const computerSelection = computerPlay();
        let result=playRound(computerSelection, playerSelection);
        console.log(result);
        let score=[0,0];
        if (result.includes('won')){
            score[0] += 1;
            console.log('Round ' + i + 'score:' + score[0] + '-' + score[1]);
        }
        else if (result.includes('lost')){
            score[1] += 1;
            console.log('Round ' + i + 'score:' + score[0] + '-' + score[1]);
        }
        else {
            console.log('Round ' + i + 'score:' + score[0] + '-' + score[1]);
        }        
    }
    if (score[0]>score[1]){
        console.log('You won!!');
    }
    else if (score[0]<score[1]){
        console.log('the computer won');
    }
}