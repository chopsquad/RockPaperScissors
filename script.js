// a
const playerSelection = "SCISSOR";
const computerSelected = computerPlay();

function computerPlay(){
    // generate a random #
    let randomNumber = Math.floor(Math.random()* 3);
    // if number 0 -> "rock", 1 -> "paper", 2 -> "scissor"
    if (randomNumber === 0) {
        return "Rock";
    }else if (randomNumber === 1){
        return "Paper";
    }else {
        return "Scissor";
    }
}




function playRound(playerSelection,computerSelection) {
    
    if (playerSelection.toLowerCase() === "rock"  && computerSelection.toLowerCase() === "scissor"){
        return "You win! Rock beats Scissor";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        return "You lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissor"){
        return "You lose! Scissor beats Paper";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "rock"){
        return "You lose! Rock beats Scissor";
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "paper"){
        return "You win! Scissor beats Paper";
    } else {
        return "Its a Tie!";
    };
    

  
}

function game(){
   
    // score tracker for player and computer
    let computerScore = 0;
    let playerScore = 0;
    let tie = 0;

    // play a round
    let round = playRound(playerSelection,computerPlay());
    //determine winner with if statment using includes.
    
    while (computerScore < 3 && playerScore < 3){
        round;
        if (round.includes("win")) {
            playerScore++;
        }else if (round.includes("lose")){
            computerScore++;
        }else {
            tie++; 
        }
    }
   
    console.log(computerScore);
    console.log(playerScore);

}

//game();
