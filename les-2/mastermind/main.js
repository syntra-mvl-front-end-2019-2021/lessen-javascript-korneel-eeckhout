const masterMind = function () {
    // generate an array with 5 random number between 0 and 5
    // ask for 5 numbers between 0 and 5
    // insert them into an array
    // count the number of numbers which are the same but do not have the same position
    // count the number of numbers which are the same and have the same position for (i=0; i<5; i++)
    // alert both to the player
    // if all the numbers are correct the player wins
    // if not let the player try again
    // max 15 guesses
};

// for (let i=0; i<5; i++) {
//     const solutionVal = solution[i];
//     for (let j=0; j<5; j++) {
//         const guessVal = guess[j];
//
//         if (solutionVal === guessVal) {
//
//         }
//     }
// }

// Math.min(1,2); -> returns 1

// [1,1,0,4,5]
// [4,0,0,1,1]
// solution: 0 -> 1 | 1 -> 2 | 2 -> 0 | 3 -> 0 | 4 -> 1 | 5 -> 1
// guess: 0 -> 2 | 1 -> 2 | 2 -> 0 | 3 -> 0 | 4 -> 1 | 5 -> 0
// Sum min values: 1 + 2 + 0 + 1 + 0 = 4
// Subtract correct number and place count = 4 - 1 -> 4
