let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const compareGuesses = (user, computer, target) => {
    if (user < 0 || user > 9) {
        alert('The number is out of range.');
        return;
    }
    if (getAbsoluteDistance(user, target) <= getAbsoluteDistance(computer, target)) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}