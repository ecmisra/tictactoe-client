'use strict'

const store = require('../store.js')

const switchPlayer = function (playerId) {
  if (store.misclick === 'misclick') {
    return
  }
  if (store.misclick === 'click') {
    const player = playerId === 'x' ? 'o' : 'x'
    store.player = player
    $('#message').html(`Player: ${store.player}'s Turn`)
    return player
  }
}

const rules = function (id, value, over) {
  if (over === true) {
    return
  }
  if (store.cells[id] === '') {
    store.cells[id] = value
    // console.log('niiiiice')
    store.misclick = 'click'
  } else if (store.cells[id] === 'x' || 'o') {
    $('#message').html('Cannot click here')
    // console.log('already played here, try somewhere else')
    store.misclick = 'misclick'
  }
}

const winningPlays = function (gameboard) {
  if ((gameboard[0] === 'x' && gameboard[1] === 'x' && gameboard[2] === 'x') ||
(gameboard[3] === 'x' && gameboard[4] === 'x' && gameboard[5] === 'x') ||
(gameboard[6] === 'x' && gameboard[7] === 'x' && gameboard[8] === 'x') ||
(gameboard[0] === 'x' && gameboard[3] === 'x' && gameboard[6] === 'x') ||
(gameboard[1] === 'x' && gameboard[4] === 'x' && gameboard[7] === 'x') ||
(gameboard[2] === 'x' && gameboard[5] === 'x' && gameboard[8] === 'x') ||
(gameboard[0] === 'x' && gameboard[4] === 'x' && gameboard[8] === 'x') ||
(gameboard[2] === 'x' && gameboard[4] === 'x' && gameboard[6] === 'x')) {
    // console.log('x wins')
    store.winner = 'x'
    store.player = 'x'
    store.over = true
    $('#message').html('x is winner!')
  } else if ((gameboard[0] === 'o' && gameboard[1] === 'o' && gameboard[2] === 'o') ||
(gameboard[3] === 'o' && gameboard[4] === 'o' && gameboard[5] === 'o') ||
(gameboard[6] === 'o' && gameboard[7] === 'o' && gameboard[8] === 'o') ||
(gameboard[0] === 'o' && gameboard[3] === 'o' && gameboard[6] === 'o') ||
(gameboard[1] === 'o' && gameboard[4] === 'o' && gameboard[7] === 'o') ||
(gameboard[2] === 'o' && gameboard[5] === 'o' && gameboard[8] === 'o') ||
(gameboard[0] === 'o' && gameboard[4] === 'o' && gameboard[8] === 'o') ||
(gameboard[2] === 'o' && gameboard[4] === 'o' && gameboard[6] === 'o')) {
    // console.log('o wins')
    store.player = 'x'
    store.winner = 'o'
    store.over = true
    $('#message').html('o is winner!')
  } else if (gameboard[0] !== '' && gameboard[1] !== '' && gameboard[2] !== '' &&
 gameboard[3] !== '' && gameboard[4] !== '' && gameboard[5] !== '' &&
 gameboard[6] !== '' && gameboard[7] !== '' && gameboard[8] !== '') {
    // console.log('Tie game')
    store.winner = 'draw'
    store.player = 'x'
    store.over = true
    $('#message').html('everyone lost!')
  }
}

module.exports = {
  switchPlayer,
  winningPlays,
  rules
}
