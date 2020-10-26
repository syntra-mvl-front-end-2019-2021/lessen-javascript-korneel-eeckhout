// let randomNumber = Math.floor(Math.random() * 11); -> generate number 0 <= x <= 10
// console.log(randomNumber);

const promptInt = function (question, minVal, maxVal) {
    let answer = parseInt(prompt(question));

    while (isNaN(answer) || answer < minVal || answer > maxVal) {
        answer = parseInt(prompt('Insert a valid number: \n' + question));
    }

    return answer;
};

const guessingGame = function (maxNumber, maxGuesses) {
    let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
    let question = 'Guess a number between 0 and ' + maxNumber;

    let guess = promptInt(question, 0, maxNumber);
    let guessCount = 1;

    while (guess !== randomNumber && guessCount < maxGuesses) {
        alert('Try again');
        guess = promptInt(question, 0, maxNumber);
        guessCount++;
    }

    if (guess === randomNumber) {
        alert('Well done');
        return true;
    } else {
        alert('You lose, the number was ' + randomNumber);
        return false;
    }
};

const guessingCompetition = function () {
    const maxNumber = promptInt('Guess between 0 and ...', 1, Infinity);
    const maxGuesses = promptInt('How many guesses can you make?', 1, Infinity);
    const maxGames = promptInt('Best of ...', 1, Infinity);

    let playerScore = 0;
    let aiScore = 0;

    while (
        playerScore * 2 < maxGames &&
        aiScore * 2 < maxGames &&
        playerScore + aiScore < maxGames
    ) {
        if (guessingGame(maxNumber, maxGuesses)) {
            playerScore++;
        } else {
            aiScore++;
        }
        alert('Player: ' + playerScore + '\n AI: ' + aiScore);
    }

    if (playerScore > aiScore) {
        alert('Player wins');
    } else if (aiScore > playerScore) {
        alert('AI wins');
    } else {
        alert('TIE');
    }
};

guessingCompetition();
