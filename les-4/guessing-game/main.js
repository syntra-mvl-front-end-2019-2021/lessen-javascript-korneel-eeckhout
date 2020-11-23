// Fase 1
// 1 generate random number between 0 10
// 2 insert random number in #solution
// 3 hide #solution (el.hidden)
// 4 on #guess-submit click
//   > get value from #guess-input (guess)
//   > make new p tag with textContent === guess
// 5 check guess
//   > if correct > #message.textContent = 'You won'
//      > show #solution
//   > if not correct > #message.textcontent = 'Try again'
// Fase 2
// 6 if player won
//   > #guess-submit.textContent = 'Restart'
// 7 on #guess-submit
//   > reset game
//      > empty #guess-container
//      > new solution
//      > #guess-submit.textContent = 'Guess'
// 8 invalid input
//    > #message.textContent = 'Insert valid number'
//    > do not add new p
// 9 max 5 guesses
//10 keep guess count in #guess-count

const $solution = document.getElementById('solution');
const $guessSubmit = document.getElementById('guess-submit');
const $guessInput = document.getElementById('guess-input');
const $guessContainer = document.getElementById('guess-container');
const $guessCount = document.getElementById('guess-count');
const $message = document.getElementById('message');

let guessCount = 0;
let minVal = 0;
let maxVal = 10;
let solution;
let gameDone = false;

function genRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function printSolution(solution) {
  $solution.textContent = solution;
}

function hideSolution() {
  $solution.classList.add('hidden');
}

function showSolution() {
  $solution.classList.remove('hidden');
}

// function showHideSolution(hide) {
//   if (hide) {
//     $solution.classList.add('hidden');
//   } else {
//     $solution.classList.remove('hidden');
//   }
// }

function getGuessInput() {
  let answer = parseInt($guessInput.value);

  if (isNaN(answer) || answer < minVal || answer > maxVal) {
    return false;
  } else {
    return answer;
  }
}

function printGuess(guess) {
  // $guessContainer.innerHTML += '<p class="guess">' + guess + '</p>';

  // const $newGuess = document.createElement('p');
  // $newGuess.textContent = guess;
  // $guessContainer.append($newGuess);

  $guessContainer.insertAdjacentHTML('beforeend', '<p class="guess">' + guess + '</p>');
  printGuessCount();
}

function printGuessCount() {
  $guessCount.textContent = guessCount;
}

function printMessage(message) {
  $message.textContent = message;
}

function setGameDone(done) {
  if (done) {
    $guessSubmit.textContent = 'Restart';
    gameDone = true;
  } else {
    $guessSubmit.textContent = 'Guess';
    gameDone = false;
  }
}

function clearGuesses() {
  $guessContainer.innerHTML = '';
  $guessInput.value = '';
  guessCount = 0;
  printGuessCount();
}

function initGuessingGame() {
  solution = genRandomNumber(maxVal);
  hideSolution();
  printSolution(solution);
  setGameDone(false);
  clearGuesses();
  printMessage('');
}

function submitGuess() {
  if (gameDone) {
    initGuessingGame();
  } else {
    const guess = getGuessInput();

    if (guess === false) {
      printMessage('Guess a valid number between ' + minVal + ' and ' + maxVal);
    } else {
      guessCount++;
      printGuess(guess);

      if (guess === solution) {
        printMessage('You won, restart?');
        showSolution();
        setGameDone(true);
      } else if (guessCount === 5) {
        showSolution();
        setGameDone(true);
        printMessage('You lost, restart?')
      } else {
        printMessage('Not correct,try again');
      }
    }
  }
}

initGuessingGame();
$guessSubmit.addEventListener('click', submitGuess);
