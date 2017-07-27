'use strict'

const showBooksTemplate = require('../templates/populate-books.handlebars')

const getBooksSuccess = (data) => {
  console.log(data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.data').append(showBooksHtml)
}

const getBooksFailure = function () {
  console.log('There are no books')
  $('.data').append("Where's the books?")
}

module.exports = {
  getBooksSuccess,
  getBooksFailure
}
