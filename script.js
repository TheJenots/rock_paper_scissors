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
let userChoice;
let computerChoice;
let winMessage;
let lostMessage;
let tieMessage;
let userScore = 0;
let computerScore = 0;


function playRound(userChoice, computerChoice) {
    //Users choice - prompt user to enter Rock, Paper or Scissors
    userChoice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
    computerChoice = computerPlay().toLowerCase();
    //Output message declarations depending on the round result
    winMessage = `You won this round! ${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase()}${computerChoice.slice(1)}!`;
    lostMessage = `You lost this round! ${computerChoice.charAt(0).toUpperCase()}${computerChoice.slice(1)} beats ${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)}!`;
    tieMessage = `It's tie! You both chose ${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)}!`;
    //Compare computers choice and users choice, determine winner in a round, update players and computers scores based on the round result and return suitable message
    if (userChoice === computerChoice) {
        userScore += 0.5;
        computerScore += 0.5;
        return tieMessage;
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||
               (userChoice === "paper" && computerChoice === "rock") ||
               (userChoice === "scissors" && computerChoice === "paper")) {
        userScore += 1;
        return winMessage;
    } else if ((userChoice === "rock" && computerChoice === "paper") ||
               (userChoice === "paper" && computerChoice === "scissors") ||
               (userChoice === "scissors" && computerChoice === "rock")) {
        computerScore += 1;
        return lostMessage;
    } else {
        return ("Something wrong! Please enter Rock, Paper or Scissors!");
    }
}

//Play 5 rounds
function game() {
    do {
        console.log(
        `${playRound()}
        Your score after this round is: ${userScore}
        Computers score after this round is: ${computerScore}`
        );
    } while ((userScore + computerScore) < 5);
    //Determine winner of the whole 5 round game and inform user
    if (userScore > computerScore) {
        return (
        `You won this game! 
        Your total score is: ${userScore}
        Computers total score is: ${computerScore}
        Reload page or press F5 to play again!`);
    } else if (userScore === computerScore) {
        return (
        `It's tie game!
        Your total score is: ${userScore}
        Computers total score is: ${computerScore}
        Reload page or press F5 to play again!`);
    } else {
        return (
        `You lost this game!
        Your total score is: ${userScore}
        Computers total score is: ${computerScore}
        Reload page or press F5 to play again!`);
    } 
}

console.log(game());