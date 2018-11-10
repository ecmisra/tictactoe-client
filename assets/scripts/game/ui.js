const store = require('../store.js')

const playGameSuccess = function (playGameResponse) {
  store.game = playGameResponse.game.id
  store.cells = playGameResponse.game.cells
  // const gameId = store.game.game.id
  // console.log(gameId)
  $('#message').html('Let the game begin!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#board').removeClass('hidden')
  // $('#message').html(`Total games played: ${playGameResponse.games.length}`)
}

const failure = function (game) {
  $('#message').html('You suck, idiot.')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

// Append move to gameboard func (not working)
// v
// const markSquare = function (cell) {
//   $('#0').append('x')
// }
//
// const updateMove = function (move) {
//   $('.grid').on('click', markSquare)
// }

module.exports = {
  playGameSuccess,
  failure
  // updateMove
}
