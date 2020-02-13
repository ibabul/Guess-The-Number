let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let randomNumber = Math.floor(Math.random() * 9);
    return randomNumber;
}


const compareGuesses = (humanGuess, computerGuess, targetGuess) => {

    if (Math.abs(humanGuess - targetGuess) < Math.abs(computerGuess - targetGuess)) {
        return true;
    } else if (Math.abs(humanGuess - targetGuess) > Math.abs(computerGuess - targetGuess)) {
        return false;
    } else {
        return 'Invalid!'
    }
}

let updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1
    } else if (winner === 'computer') {
        computerScore += 1
    }
}

let advanceRound = () => {
    currentRoundNumber += 1
};