function getComputerChoice() {
    // 

    let options = ["Rock", "Paper", "Scissor"];
    let randomnumber = Math.floor(Math.random() * options.length); 

    return options[randomnumber]; 
}

let playerWon = false; 

function playRound(playerSelection) {

    let computerSelection = getComputerChoice().toLowerCase(); 
    let newPlayerSelection = playerSelection.toLowerCase();
    
    if (newPlayerSelection == "rock") {

        if (computerSelection == "scissor") {
            playerWon = true; 
            return "You Win! " + playerSelection + " beats " + computerSelection; 
        }

        else if (computerSelection == "paper") {
            playerWon = false; 
            return "You loose! " + computerSelection + " beats " + playerSelection; 
        }

        else {
            return "Its a draw :(, you both chose " + computerSelection;
        }

    }

    else if (newPlayerSelection == "paper") {

        if (computerSelection == "rock") {
            playerWon = true; 
            return "You Win! " + playerSelection + " beats " + computerSelection; 
        }

        else if (computerSelection == "scissor") {
            playerWon = false; 
            return "You loose! " + computerSelection + " beats " + playerSelection; 
        }

        else {
            return "Its a draw :(, you both chose " + computerSelection;
        }
    }

    else {
        if (computerSelection == "paper") {
            playerWon = true; 
            return "You Win! " + playerSelection + " beats " + computerSelection; 
        }

        else if (computerSelection == "scissor") {
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



let playerWinCount = 0; 
let computerWinCount = 0; 

function game() {
    let userInput = prompt("What do you want to play: ");
    playRound(userInput, getComputerChoice());

    if (playerWon) {
        playerWinCount++; 
    } else {
        computerWinCount++;
    }

    if (playerWinCount > computerWinCount) {
        return "You won! With " +  playerWinCount + " points"; 
    } else {
        return "You lost! with " + playerWinCount + " points";
    }
}




const rockBtn = document.querySelector("#rock"); 
rockBtn.addEventListener("click", function() {
    game();
    console.log("Playing rock")
}); 

const paperBtn = document.querySelector("#paper"); 
paperBtn.addEventListener("click", function() {
    playRound("Paper");
    console.log("Playing paper")
}); 

const scissorBtn = document.querySelector("#scissor"); 
scissorBtn.addEventListener("click", function() {
    playRound("Scissor");
    console.log("Playing scissor")
}); 


let output = document.querySelector(".output"); 
output.innerHTML = "Your score: " + playerWinCount;