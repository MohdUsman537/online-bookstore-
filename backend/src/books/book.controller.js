const Book = require("./book.model");

const postABook = async(req,res) =>{
    try{
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message: "book posted successfully",book:newBook})

    }catch(error)
    {
        console.error("Error Creating Book",error);
        res.status(500).send({message : "Failed to create book"});
    }   
}

// get all books
const getAllBooks = async(req,res) => 
{
    try{
        const books = await Book.find().sort({ createdAt : -1});
        res.status(200).send(books)
        
    } catch(error)
    {
        console.error("Error Fetching Books",error);
        res.status(500).send({message : "Failed to fetch books"});
    }

}

const getSingleBook = async(req,res) =>
{
    try{
        const {id} = req.params
        const book = await Book.findById(id)
        if(!book) return res.status(404).send("book not found")
        res.status(200).send(book)
    
    }catch(error)
    {
        console.error("Error Fetching Book",error);
        res.status(500).send({message : "Failed to fetch book"});
    }
}

// Update book Data
const UpdateBook = async(req,res) =>
{
    try{
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id,req.body,{new : true});
        if(!updatedBook)
        {
            return res.status(404).send("book not found")
        }
        res.status(200).send({
            message : "Book Updated Successfully!",
            book : updatedBook
        })
    }catch(error)
    {
        console.error("Error Updating a Book",error);
        res.status(500).send({message : "Failed to update a  book"});   
    }
}


const deleteBook = async(req,res) =>
    {
        try{
            const {id} = req.params;
            const deletedBook = await Book.findByIdAndDelete(id);
            if(!deletedBook)
            {
                return res.status(404).send("book not found")
            }
            res.status(200).send({
                message : "Book Deleted Successfully!",
                book : deletedBook
            })
        }catch(error)
        {
            console.error("Error Deleting a Book",error);
            res.status(500).send({message : "Failed to delete a  book"});   
        }
    }
    

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    UpdateBook,
    deleteBook
}