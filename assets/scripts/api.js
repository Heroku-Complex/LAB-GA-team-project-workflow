'use strict'

const config = require('./config')

const requestAllBooks = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/books'
  })
}

module.exports = requestAllBooks
