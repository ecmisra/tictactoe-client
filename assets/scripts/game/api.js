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

const playGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json'
  })
}
// console.log(data)

const updateGame = function (id, value) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(
      {
        'game': {
          'cell': {
            'index': id,
            'value': value
          },
          'over': false
        }
      }
    )
  })
}

module.exports = {
  playGame,
  updateGame,
  getGame
}
