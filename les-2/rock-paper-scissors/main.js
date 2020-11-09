const arrayRPS = ['rock', 'paper', 'scissors'];

const promptInt = function (question, minVal, maxVal) {
    let answer = parseInt(prompt(question));

    while (isNaN(answer) || answer < minVal || answer > maxVal) {
        answer = parseInt(prompt('Insert a valid number: \n' + question));
    }

    return answer;
};

const getComputerGuess = function () {
    let randomIndex = Math.floor(Math.random() * 3);
    return arrayRPS[randomIndex];
};

const getPlayerGuess = function () {
    let playerGuess = prompt('rock, paper, scissors?');

    while (
        // playerGuess.toLowerCase() !== 'rock' &&
        // playerGuess.toLowerCase() !== 'paper' &&
        // playerGuess.toLowerCase() !== 'scissors'

        !arrayRPS.includes(playerGuess.toLowerCase().trim())
    ) {
        playerGuess = prompt(
            'Select a correct value: \n rock, paper, scissors?',
        );
    }

    return playerGuess.toLowerCase().trim();
};

const rockPaperScissors = function () {
    let computerGuess = getComputerGuess();
    let playerGuess = getPlayerGuess();

    while (computerGuess === playerGuess) {
        alert('AI chose ' + computerGuess + "\nIt's a tie, try again");
        computerGuess = getComputerGuess();
        playerGuess = getPlayerGuess();
    }

    if (
        (computerGuess === arrayRPS[0] && playerGuess === arrayRPS[1]) ||
        (computerGuess === arrayRPS[1] && playerGuess === arrayRPS[2]) ||
        (computerGuess === arrayRPS[2] && playerGuess === arrayRPS[0])
    ) {
        alert('AI chose ' + computerGuess + '\nYou won');
        return true;
    } else {
        alert('AI chose ' + computerGuess + '\nYou lost');
        return false;
    }
};

const rockPaperScissorsCompetition = function () {
    let maxGames = promptInt(
        'How many games do you want to play?',
        1,
        Infinity,
    );
    let playerScore = 0;
    let aiScore = 0;

    while (
        playerScore * 2 < maxGames &&
        aiScore * 2 < maxGames &&
        playerScore + aiScore < maxGames
    ) {
        if (rockPaperScissors()) {
            playerScore++;
        } else {
            aiScore++;
        }
        alert('Current score: \nAI: ' + aiScore + '\nPlayer: ' + playerScore);
    }

    if (playerScore > aiScore) {
        alert('You win the competition!');
    } else if (playerScore < aiScore) {
        alert('You lost the competition!');
    } else {
        alert('Nobody wins, play again?');
    }
};

rockPaperScissorsCompetition();
