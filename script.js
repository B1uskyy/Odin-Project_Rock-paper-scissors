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

function game(userInput) {
    playRound(userInput); 


    if (playerWon) {
        playerWinCount++; 
    } else {
        computerWinCount++;
    }

    let output = document.querySelector(".output");
    output.innerHTML = "You played " + userInput + "<br>";
    output.innerHTML += "Your score: " + playerWinCount + "<br>";
    output.innerHTML += "Computer score: " + computerWinCount;


    if (playerWinCount == 5) {
        output.innerHTML = "YOU WON!"
    }

    if (computerWinCount == 5) {
        output.innerHTML = "YOU LOST!"
    }
    

    
}

const rockBtn = document.querySelector("#rock"); 
rockBtn.addEventListener("click", function() {
    game("rock");
    console.log("Playing rock");
}); 

const paperBtn = document.querySelector("#paper"); 
paperBtn.addEventListener("click", function() {
    game("paper");
    console.log("Playing paper");
}); 

const scissorBtn = document.querySelector("#scissor"); 
scissorBtn.addEventListener("click", function() {
    game("Scissor");
    console.log("Playing scissor");
}); 

let output = document.querySelector(".output");
output.innerHTML = "Your score: " + playerWinCount + "<br>";
output.innerHTML += "Computer score: " + computerWinCount;

