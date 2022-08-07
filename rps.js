function playerSelection(){
    let userChoice = '';
    document.querySelector('#Rock').onclick = function() {
        userChoice = "Rock";
    }
    document.querySelector('#Paper').onclick = function() {
        userChoice = "Paper";
    }
    document.querySelector('#Scissors').onclick = function() {
        userChoice = "Scissors";
    }

    let user_choice = document.querySelector('#user-choice');
    user_choice.addEventListener('click', function() {
        console.log(userChoice);
    });
    return userChoice;
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

function playRound(computerSelection , playerChoice){
    if (computerPlay === playerChoice){
        return("the computer says:" + computerSelection + " ,it's a Draw!!");
    }
    else if (computerSelection === "rock" && playerChoice === "paper"){
        return("the computer says:" + computerSelection + " ,You won!!");
    }
    else if (computerSelection === "paper" && playerChoice === "scissors"){
        return("the computer says:" + computerSelection + " ,You won!!");
    }
    else if (computerSelection === "scissors" && playerChoice === "rock"){
        return("the computer says:" + computerSelection + " ,You won!!");
    }
    else {
        return ("the computer says: " + computerSelection + " ,You lost.");
    }
}

function game(){
    let score=[0,0];
    for (let i = 0; i < 5; i++){
        const playerChoice = playerSelection();
        console.log(playerChoice);
        const computerSelection = computerPlay();
        let result=playRound(computerSelection, playerChoice);
        console.log(result);
        if (result.includes('won')){
            score[0] += 1;
            console.log('Round ' + (i+1) + ' score:' + score[0] + '-' + score[1]);
        }
        else if (result.includes('lost')){
            score[1] += 1;
            console.log('Round ' + (i+1) + ' score:' + score[0] + '-' + score[1]);
        }
        else {
            console.log('Round ' + (i+1) + ' score:' + score[0] + '-' + score[1]);
        }        
    }
    if (score[0]>score[1]){
        console.log('Final Score: You won!!');
    }
    else if (score[0]<score[1]){
        console.log('Final Score: the computer won.');
    }
    else {
        console.log('Draw Game.');
    }
}


game();