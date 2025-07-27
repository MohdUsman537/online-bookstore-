/* Creating API's for Books*/

const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteBook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();


//Frontend => Backend server => request from controller => bookSchema => database => send data to server => back to frontend
// post = when submit something from frontend to db.
// get =  when get something from db.
// put/patch = when edit or update something.
//delete = when delete something from Database.


// post a book.
router.post("/create-book",verifyAdminToken,postABook)
// verifyAdminToken to make sure only admin can post books.


// Get All Books
router.get("/",getAllBooks)

// single book endpoint
router.get("/:id",getSingleBook)


// update a book
router.put("/edit/:id",verifyAdminToken,UpdateBook)

// Delete a book
router.delete("/:id",verifyAdminToken,deleteBook)


module.exports = router;