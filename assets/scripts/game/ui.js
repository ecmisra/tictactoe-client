const store = require('../store.js')

const playGameSuccess = function (playGameResponse) {
  store.game = playGameResponse
  const gameId = store.game.game.id
  console.log(gameId)
  $('#message').html('Let the game begin!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#board').removeClass('hidden')
}

const failure = function (game) {
  $('#message').html('You suck, idiot.')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

module.exports = {
  playGameSuccess,
  failure
}
