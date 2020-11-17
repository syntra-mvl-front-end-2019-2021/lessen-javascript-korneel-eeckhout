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
