
//computers selection using a random # to generate rock, paper, scissors
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = ""

    // using a if/else to pick rock, paper,scissors, based of randomNumber

    if (randomNumber === 0){
        computerChoice = "Rock"
    }else if (randomNumber === 1) {
        computerChoice = "Paper"
    }else {
        computerChoice = "Scissor"
    };
    
    return computerChoice;
}

// function that plays one round of rock paper scissors
function oneRound(x,y) {
    // x = playerSelection
    // y = computerSelection

    //making inputs case insensitive using toLowerCase()
    x = x.toLowerCase();
    y = y.toLowerCase();
    //console.log(x);
    //console.log(y);

    //determining the winner using if/else statements and returning win/lose/tie
    //rock
    if(x ===  "rock" && y === "rock"){
        return "Its a Tie";
    }else if (x === "rock" && y === "paper"){
        return "You Lose";
    }else if (x === "rock" && y === "scissor"){
        return "You Win";
    };

    //paper
    if(x ===  "paper" && y === "paper"){
        return "Its a Tie";
    }else if (x === "paper" && y === "rock"){
        return "You Win";
    }else if (x === "paper" && y === "scissor"){
        return "You Lose"
    };

    // scissor
    if(x ===  "scissor" && y === "scissor"){
        return "Its a Tie";
    }else if (x === "scissor" && y === "paper"){
        return "You Win";
    }else if (x === "scissor" && y === "rock"){
        return "You Lose"
    };
}



// creating a function a that plays 5 rounds of rock paper scissors, keeps score, and reports the winner at the end
function game(){
    
    //keeping score using let
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    //playing 5 rounds using while loop
    let rounds = 0;
    while(rounds < 5) {  
    oneRound(playerSelection,computerPlay());
    //console.log(oneRound(playerSelection,computerPlay()))
        //adding score
        if(oneRound(playerSelection,computerPlay()) === "You Win"){
            playerScore++;
            console.log(oneRound(playerSelection,computerPlay()))
            //console.log(playerScore);
            //console.log(computerScore);
        }else if(oneRound(playerSelection,computerPlay()) === "You Lose"){
            computerScore++;
            console.log(oneRound(playerSelection,computerPlay()))
            //console.log(playerScore);
            //console.log(computerScore);
        }else {
            tieScore++;
            console.log(oneRound(playerSelection,computerPlay()))
            //console.log(playerScore);
            //console.log(computerScore);
        }
    console.log(playerScore);
    console.log(computerScore);    
    rounds++;
    }
    
    //determining Winner
    if(playerScore > computerScore){
        console.log("YOU WIN THE GAME");
    }else if(playerScore < computerScore){
        console.log("YOU LOSE THE GAME!");
    }else if(playerScore = computerScore){
        console.log("The Game is a Tie!");
    }
}

//const playerSelection = window.prompt("Please Choose: Rock,Paper or Scissor");


const computerSelection = computerPlay();

//let playOneRound = oneRound(playerSelection,computerSelection);
//console.log(oneRound(playerSelection,computerSelection));
//game();