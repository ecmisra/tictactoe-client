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

const addHandlers = () => {
  $('#play-game').on('submit', onPlayGame)
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
  onUpdateGame
  // getFormFields
}
