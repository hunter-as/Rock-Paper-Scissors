


function computerPlay(){
    const random = Math.random();
    if (random < 0.34) {
        return 'rock';
    } else if (random <= 0.67){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock'){
            return 'Tie' ;
        }
     else if (computerSelection === 'paper') {
        computerScore++ ;
        return "Computer Wins!" ; 
    } 
    else {
        playerScore++;
        return 'Player Wins!' ;
    }
}
    if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock'){
            playerScore++;
            return 'Player Wins!';
        }
     else if (computerSelection == 'paper') {
        return  'Tie' ;
    } else {
        computerScore++;
        return 'Computer Wins!';
    }
}
    if (playerSelection.toLowerCase() === 'Scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return 'Computer Wins!';
        }
        else if (computerSelection === 'paper') {
            playerScore++;
            return 'Player Wins!';
        }
        else {
            return 'Tie'
        }
    }
}

playerScore = parseInt(0);
computerScore = parseInt(0);

function game() {
    for (let i = 0; i < 5; i++ ){
        let playerSelection = prompt('Pick a move Rock Paper or Scissors!');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log('Player score=' + playerScore);
        console.log('Computer score =' + computerScore);
    }
}
game();