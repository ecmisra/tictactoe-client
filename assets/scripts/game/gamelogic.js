'use strict'

const store = require('../store.js')

const switchPlayer = function (playerId) {
  const player = playerId === 'x' ? 'o' : 'x'
  store.player = player
  return store.player
}

const winningPlays = function (gameboard) {
  if ((gameboard[0] === 'X' && gameboard[1] === 'X' && gameboard[2] === 'X') ||
(gameboard[3] === 'X' && gameboard[4] === 'X' && gameboard[5] === 'X') ||
(gameboard[6] === 'X' && gameboard[7] === 'X' && gameboard[8] === 'X') ||
(gameboard[0] === 'X' && gameboard[3] === 'X' && gameboard[6] === 'X') ||
(gameboard[1] === 'X' && gameboard[4] === 'X' && gameboard[7] === 'X') ||
(gameboard[2] === 'X' && gameboard[5] === 'X' && gameboard[8] === 'X') ||
(gameboard[0] === 'X' && gameboard[4] === 'X' && gameboard[8] === 'X') ||
(gameboard[2] === 'X' && gameboard[4] === 'X' && gameboard[6] === 'X')) {
    console.log('X wins')
  } else if ((gameboard[0] === 'O' && gameboard[1] === 'O' && gameboard[2] === 'O') ||
(gameboard[3] === 'O' && gameboard[4] === 'O' && gameboard[5] === 'O') ||
(gameboard[6] === 'O' && gameboard[7] === 'O' && gameboard[8] === 'O') ||
(gameboard[0] === 'O' && gameboard[3] === 'O' && gameboard[6] === 'O') ||
(gameboard[1] === 'O' && gameboard[4] === 'O' && gameboard[7] === 'O') ||
(gameboard[2] === 'O' && gameboard[5] === 'O' && gameboard[8] === 'O') ||
(gameboard[0] === 'O' && gameboard[4] === 'O' && gameboard[8] === 'O') ||
(gameboard[2] === 'O' && gameboard[4] === 'O' && gameboard[6] === 'O')) {
    console.log('O wins')
  } else if (gameboard[0] !== '' && gameboard[1] !== '' && gameboard[2] !== '' &&
 gameboard[3] !== '' && gameboard[4] !== '' && gameboard[5] !== '' &&
 gameboard[6] !== '' && gameboard[7] !== '' && gameboard[8] !== '') {
    console.log('Tie game')
  }
}

module.exports = {
  switchPlayer,
  winningPlays
}
