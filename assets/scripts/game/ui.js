const store = require('../store.js')

const playGameSuccess = function (playGameResponse) {
  store.game = playGameResponse.game.id
  store.cells = playGameResponse.game.cells
  store.over = playGameResponse.game.over
  // console.log(store)
  // const gameId = store.game.game.id
  // console.log(gameId)
  $('#message').html('Let the game(s) begin!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#board').removeClass('hidden')
  // $('#change-password').addClass('hidden')
  $('#get-score').removeClass('hidden')
  $('.grid').empty()
  $('#score-display').addClass('hidden')
  $('#rules-message').addClass('hidden')
  // $('#message').html(`Total games played: ${playGameResponse.games.length}`)
}
const clearMessage = function () {
  $('#message').empty()
}
$('.grid').click('#message', clearMessage)
// trying to get board to display 'x' or 'o' on corresponding grid
// square vvv
//
// const playerChoice = function () {
//   $('.grid').append(store.player.id)
// }

const failure = function (game) {
  $('#message').html('Ya blew it, bud. Try again.')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

// Append move to gameboard func (not working)
// v
//
const updateMove = function (id) {
  // console.log(id)
  // console.log(store.player)
  // console.log(store.over)
  if (store.player === 'x' && store.over === false && store.cells[id] === '') {
    $($(event.target)).html(store.player)
    // console.log('hello')
  } else if (store.player === 'o' && store.over === false && store.cells[id] === '') {
    $($(event.target)).html(store.player)
  }

  // if (store.player.id === 'x') {
  //   $('#message').html('x is playing')
  // } else if (store.player.id === 'o') {
  //   $('#message').html('o is playing')
  // }
}

const onGetScoreSuccess = function (event) {
  $('#score-display').html(`Total games played:${event.games.length}`)
  $('#score-display').removeClass('hidden')
}
module.exports = {
  playGameSuccess,
  failure,
  updateMove,
  onGetScoreSuccess
}
