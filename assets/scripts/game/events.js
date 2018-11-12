// const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const gameLogic = require('./gamelogic.js')

const onPlayGame = function (event) {
  event.preventDefault()
  console.log('new game started!')
  api.playGame()
    .then(ui.playGameSuccess)
    .catch()
}

const addHandlers = function () {
  $('#play-game').on('submit', onPlayGame)
}

// const scoreDisplay = function () {
//   // const getScore = function () {
//   $('#get-score').on('click',
//     // getScore)
//     // const score = store.games.length
//     // $('#score-display').html('Score is ' + score)
//     console.log('huh'))
// }

const onGetScore = function (event) {
  event.preventDefault()
  api.getGame()
    .then(ui.onGetScoreSuccess)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const id = $(event.target).data().cellIndex
  const player = store.player
  const over = store.over
  console.log(store)
  api.updateGame(id, player)
    .then(ui.updateMove(id))
    .catch()
  gameLogic.rules(id, player, over)
  gameLogic.switchPlayer(player)
  console.log(store.cells)
  gameLogic.winningPlays(store.cells)
}

module.exports = {
  addHandlers,
  onPlayGame,
  onUpdateGame,
  onGetScore
  // getFormFields
}
