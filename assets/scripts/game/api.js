'use strict'

const store = require('../store.js')
const config = require('../config.js')

const getGame = (data) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(data)
  })
}

const playGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(data)
  })
}
// console.log(data)

const updateGame = function (id, value) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game.id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: {
      'game': {
        'cell': {
          'index': id,
          'value': value
        },
        'over': false
      }
    }
  })
}

module.exports = {
  playGame,
  updateGame,
  getGame
}
