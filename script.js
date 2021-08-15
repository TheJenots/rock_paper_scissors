//create random number 0-2
function randomNumb() {
    return (Math.floor(Math.random()*3));
}

//Computers choice - return random choice from 3 options Rock, Paper or Scissors
function computerPlay() {
    switch(randomNumb()) {
        case 0:
            return ("Rock");
        case 1:
            return ("Paper");
        case 2:
            return ("Scissors");
    }
}

//Global variable declarations
let userScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", play));

function play(e) {
    let uScore = document.querySelector("#uScore");
    let cScore = document.querySelector("#cScore");
    let totalResult = document.querySelector("#totalResult");
    let result = document.querySelector("#result");   
    let userChoice = this.id;
    let computerChoice = computerPlay().toLowerCase();
    //Output message declarations depending on the round result
    let winMessage = `You won this round! ${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase()}${computerChoice.slice(1)}!`;
    let lostMessage = `You lost this round! ${computerChoice.charAt(0).toUpperCase()}${computerChoice.slice(1)} beats ${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)}!`;
    let tieMessage = `It's tie! You both chose ${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)}!`;
    if (userScore < 5 && computerScore < 5) {
    //Compare computers choice and users choice, determine winner in a round, update players and computers scores based on the round result and return suitable message
      if (userChoice === computerChoice) {
        result.textContent = tieMessage;
      } else if ((userChoice === "rock" && computerChoice === "scissors") ||
               (userChoice === "paper" && computerChoice === "rock") ||
               (userChoice === "scissors" && computerChoice === "paper")) {
        userScore += 1;
        result.textContent = winMessage;
      } else if ((userChoice === "rock" && computerChoice === "paper") ||
               (userChoice === "paper" && computerChoice === "scissors") ||
               (userChoice === "scissors" && computerChoice === "rock")) {
        computerScore += 1;
        result.textContent = lostMessage;
      } 
    } else {
        alert("Game over! Please press play again!");
    } 

    uScore.textContent = `${userScore}`;
    cScore.textContent = `${computerScore}`;

    //Determine winner -player who first reaches 5 wins- and inform user
    if (userScore === 5 || computerScore === 5) {
        if (userScore > computerScore) {
        totalResult.textContent =`You won this game!`;
        } else if (userScore === computerScore) {
        totalResult.textContent =`It's tie game!`;
        } else {
        totalResult.textContent =`You lost this game!`;
        } 
        //Adds play again button
        let playAgain = document.createElement("button");
        playAgain.textContent = "Play again!";
        playAgain.classList.add("btnPlayAgain");
        totalResult.appendChild(playAgain);
        //Restarts game
        playAgain.addEventListener("click", () => {
            userScore = 0;
            computerScore = 0;
            uScore.textContent = "0";
            cScore.textContent = "0";
            totalResult.textContent = "Choose your weapon!";
            result.textContent = "";
        });
       
    }
}
