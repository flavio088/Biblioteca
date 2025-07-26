const booksModel = require('../models/books-model');

module.exports = {
    //GET /api/books
    index(req, res) {
        const books =  booksModel.getAllBooks()
        res.json(books)
    },

    //GET /api/books/:id
    show: (req, res) => {
        const {id} = req.params;
        const book = booksModel.getBookById(id);
        if (!book) {
            return res.status(404).json({ message: 'Livro não encontrado' });
           
        }
         res.json(book);
    },

    // POST /api/books

    // PUT /api/books/:id

    // DELETE /api/books/:id
}
