const playGameSuccess = function (playGameResponse) {
  $('#message').html('Let the game begin!.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

module.exports = {
  playGameSuccess
}
