const express = require('express')
const bookController = require('../controllers/book-controller')
const apiRouter = express.Router()


apiRouter.get('/books', bookController.index)
apiRouter.get('/books/:id', bookController.show)

module.exports = apiRouter