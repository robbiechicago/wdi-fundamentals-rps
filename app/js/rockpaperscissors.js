////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    playerMove = getPlayerMove();
    computerMove = getComputerMove();

    // player move = rock

    if(playerMove == "rock"){
    	if(computerMove == "rock"){
    		winner = "tie";
    	}else if(computerMove == "paper"){
    		winner = "computer";
    	}else{
    		winner = "player";
    	}

    // player move = paper

    }else if(playerMove == "paper"){
    	if(computerMove == "paper"){
    		winner = "tie";
    	}else if(computerMove == "scissors"){
    		winner = "computer";
    	}else{
    		winner = "player";
    	}

    // player move is scissors

    }else{
    	if(computerMove == "scissors"){
    		winner = "tie";
    	}else if(computerMove == "rock"){
    		winner = "computer";
    	}else{
    		winner = "player";
    	}
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    

    while(playerWins < 5 || computerWins < 5){
    	console.log("Player selected " + getPlayerMove());
    	console.log("Computer selected " + getComputerMove());
    	console.log(getWinner());
    	if(getWinner() != "tie"){
	    	if(getWinner() == "player"){
	    		playerWins ++;
	    	}else{
	    		computerWins ++;
	    	}
	    	console.log(getWinner() + " wins!");
	    }else{
	    	console.log("A tie!");
	    }
	    console.log("Current Score:  Player " + playerWins + " - " + computerWins + " computer");
    }
    return [playerWins, computerWins];
}

playToFive();



















