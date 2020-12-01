// player clicks button
// > Determine players choice
// > Generate ai choice
// > Compare
// >> Determine winner/tie
// >>> Update counts
// >>> Add history line
// >>>> Append p tag in #history-container
// >>> Update message

// Fase 2
// Add restart btn
// > On click
// >> Empty #history-container
// >> Reset counts
// >> Empty message

const $btnContainer = document.getElementById('btn-container');
// const $rockBtn = document.getElementById('rock-btn');
// const $paperBtn = document.getElementById('paper-btn');
// const $scissorsBtn = document.getElementById('scissors-btn');
const $restartBtn = document.getElementById('restart-btn');
const $aiScore = document.getElementById('ai-score');
const $userScore = document.getElementById('user-score');
const $message = document.getElementById('message');
const $historyContainer = document.getElementById('history-container');
const $restartBtnContainer = document.getElementById('restart-btn-container');

const rpsChoices = ['rock', 'paper', 'scissors'];

let aiScore = 0;
let userScore = 0;

function getAIChoice() {
  const randomIndex = Math.floor(Math.random() * rpsChoices.length);
  return rpsChoices[randomIndex];
}

/*
 * Compare ai choice with user choice
 * Returns:
 *  0 for tie
 *  1 for user win
 *  2 for ai win
 */
function compareRPS(aiChoice, userChoice) {
  if (aiChoice === userChoice) {
    return 0;
  } else if (
    (userChoice === rpsChoices[0] && aiChoice === rpsChoices[2]) ||
    (userChoice === rpsChoices[1] && aiChoice === rpsChoices[0]) ||
    (userChoice === rpsChoices[2] && aiChoice === rpsChoices[1])) {
    return 1;
  } else {
    return 2;
  }
}

function printCounts(aiCount, userCount) {
  $aiScore.textContent = aiCount;
  $userScore.textContent = userCount;
}

/*
 * comparison =>
 *  0 for tie
 *  1 for user win
 *  2 for ai win
 */
function generateMessage(comparison) {
  switch (comparison) {
    case 0:
      return "It's a tie";
    case 1:
      return 'You win';
    case 2:
      return 'AI wins';
    default:
      return 'Something went wrong';
  }
}

/*
 * comparison =>
 *  0 for tie
 *  1 for user win
 *  2 for ai win
 */
function printMessage(comparison) {
  // let message;
  // if (comparison === 0) {
  //   message = "It's a tie";
  // } else if (comparison === 1) {
  //   message = 'You win';
  // } else  {
  //   message = 'AI wins';
  // }

  // switch (comparison) {
  //   case 0:
  //     message = "It's a tie";
  //     break;
  //   case 1:
  //     message = 'You win';
  //     break;
  //   case 2:
  //     message = 'AI wins';
  //     break;
  //   default:
  //     message = 'Something went wrong';
  // }

  $message.textContent = generateMessage(comparison);
}

/*
 * comparison =>
 *  0 for tie
 *  1 for user win
 *  2 for ai win
 */
function printNewLine(aiChoice, userChoice, comparison) {
  // let newLine = 'User: ' + userChoice + ' | ';
  // newLine += 'AI: ' + aiChoice + ' | ';
  // newLine += generateMessage(comparison);
  // let $newP = document.createElement('p');
  let newLine = `<p>User: ${userChoice} | AI: ${aiChoice} | ${generateMessage(comparison)}</p>`;
  // $newP.insertAdjacentText('beforeend', newLine);
  // $historyContainer.insertAdjacentElement('beforeend', $newP);
  $historyContainer.insertAdjacentHTML('beforeend', newLine);
}

function showRestartBtn() {
  $restartBtnContainer.classList.remove('hidden');
}

function hideRestartBtn() {
  $restartBtnContainer.classList.add('hidden');
}

function playRPS(userChoice) {
  const aiChoice = getAIChoice();
  const comparison = compareRPS(aiChoice, userChoice);

  if (comparison === 1) {
    userScore++;
  } else if (comparison === 2) {
    aiScore++;
  }

  printCounts(aiScore, userScore);
  printMessage(comparison);
  printNewLine(aiChoice, userChoice, comparison);
  showRestartBtn();
}

function resetGame() {
  aiScore = 0;
  userScore = 0;
  printCounts(aiScore, userScore);
  $message.textContent = '';
  $historyContainer.innerHTML = '';
  hideRestartBtn();
}

// function rockBtnClicked() {
//   playRPS(rpsChoices[0])
// }
//
// function paperBtnClicked() {
//   playRPS(rpsChoices[1]);
// }
//
// function scissorsBtnClicked() {
//   playRPS(rpsChoices[2]);
// }

function btnContainerClicked(event) {
  console.log(event);
  if (event.target.matches('.choice-btn')) {
    playRPS(event.target.dataset.choice);
  }

  // switch(event.target.id) {
  //   case 'rock-btn':
  //     playRPS(rpsChoices[0]);
  //     break;
  //   case 'paper-btn':
  //     playRPS(rpsChoices[1]);
  //     break;
  //   case 'scissors-btn':
  //     playRPS(rpsChoices[2]);
  //     break;
  // }

  console.log(event.target.id);
}

resetGame();

// $rockBtn.addEventListener('click', rockBtnClicked);
// $paperBtn.addEventListener('click', paperBtnClicked);
// $scissorsBtn.addEventListener('click', scissorsBtnClicked);
$restartBtn.addEventListener('click', resetGame);
$btnContainer.addEventListener('click', btnContainerClicked);
