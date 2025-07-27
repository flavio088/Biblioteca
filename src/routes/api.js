const express = require('express')
const bookController = require('../controllers/book-controller')
const loansController = require('../controllers/loans-controller')
const apiRouter = express.Router()


apiRouter.get('/books', bookController.index)
apiRouter.get('/books/:id', bookController.show)

apiRouter.post('/books', bookController.save)
apiRouter.put('/books/:id', bookController.update)
apiRouter.delete('/books/:id', bookController.delete)

apiRouter.get('/loans', loansController.index)
apiRouter.get('/loans/:id', loansController.show)
apiRouter.post('/loans', ensureAuth, loansController.save)
apiRouter.post('/loans/:id/return', loansController.return)

module.exports = apiRouter