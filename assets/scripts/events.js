'use strict'

const api = require('./api')
const ui = require('./ui')

const getAllBooks = function (event) {
  event.preventDefault()
  api.requestAllBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.getBooksFailure)
}

const addHandlers = () => {
  $('#get-books').on('click', getAllBooks)
}

module.exports = {
  addHandlers
}
