/* Creating API's for Books*/

const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteBook } = require('./book.controller');
const router = express.Router();


//Frontend => Backend server => request from controller => bookSchema => database => send data to server => back to frontend
// post = when submit something from frontend to db.
// get =  when get something from db.
// put/patch = when edit or update something.
//delete = when delete something.


// post a book.
router.post("/create-book",postABook)


// Get All Books
router.get("/",getAllBooks)

// single book endpoint
router.get("/:id",getSingleBook)


// update a book
router.put("/edit/:id",UpdateBook)

router.delete("/:id",deleteBook)


module.exports = router;