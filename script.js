function getComputerChoice() {
    // 

    let options = ["Rock", "Paper", "Scissor"];
    let randomnumber = Math.floor(Math.random() * options.length); 

    return options[randomnumber]; 
}

let playerWon = false; 

function playRound(playerSelection, computerSelection) {

    let newPlayerSelection = playerSelection.toLowerCase();
    let newComputerSelection = computerSelection.toLowerCase(); 
    
    if (newPlayerSelection == "rock") {

        if (newComputerSelection == "scissor") {
            playerWon = true; 
            return "You Win! " + playerSelection + " beats " + computerSelection; 
        }

        else if (newComputerSelection == "paper") {
            playerWon = false; 
            return "You loose! " + computerSelection + " beats " + playerSelection; 
        }

        else {
            return "Its a draw :(, you both chose " + computerSelection;
        }

    }

    else if (newPlayerSelection == "paper") {

        if (newComputerSelection == "rock") {
            playerWon = true; 
            return "You Win! " + playerSelection + " beats " + computerSelection; 
        }

        else if (newComputerSelection == "scissor") {
            playerWon = false; 
            return "You loose! " + computerSelection + " beats " + playerSelection; 
        }

        else {
            return "Its a draw :(, you both chose " + computerSelection;
        }
    }

    else {
        if (newComputerSelection == "paper") {
            playerWon = true; 
            return "You Win! " + playerSelection + " beats " + computerSelection; 
        }

        else if (newComputerSelection == "scissor") {
            playerWon = false; 
            return "You loose! " + computerSelection + " beats " + playerSelection; 
        }

        else {
            return "Its a draw :(, you both chose " + computerSelection;
        }
    }

}



// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection))



function game() {

    let playerWinCount = 0; 
    let computerWinCount = 0; 
    

    for (let i = 0; i < 5 ; i++) {
        let userInput = prompt("What do you want to play: ")
        playRound(userInput, getComputerChoice())

        if (playerWon) {
            playerWinCount++; 
        }

        else {
            computerWinCount++
        }


    }

    if (playerWinCount > computerWinCount) {
        return "You won! With " +  playerWinCount + " points"
    }

    else {
        return "You lost! with " + playerWinCount + " points"
    }

}


console.log(game())