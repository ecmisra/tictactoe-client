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
  const data = $(event.target).data()
  const id = data.cellIndex
  const player = store.player
  store.cells[id] = player
  console.log(store)
  api.updateGame(id, player)
    .then()
    .catch()
  gameLogic.switchPlayer(player)
  console.log(store.cells)
  gameLogic.winningPlays(store.cells)
}

// let whichTurn = (0)
//
// const whosTurnIsIt = function (aTurn) {
//   let chance = ('x')
//   if (aTurn % 2 === 0) {
//     chance = 'x'
//   } else {
//     chance = 'o'
//   }
//   return chance
// }
//
// for (let i = 0; i < 9; i++) {
//   const whosTurn = whosTurnIsIt(whichTurn)
//   // console.log('whichTurn', whichTurn)
//   whichTurn++
//   // console.log('whosTurn', whosTurn)
//   whosTurnIsIt(0, 'x')
// }

module.exports = {
  addHandlers,
  onPlayGame,
  onUpdateGame
  // getFormFields
}
