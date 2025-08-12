const mongoose = require('mongoose')

// The code defines a Mongoose schema for a Book, and the attributes you 
// see in the schema represent the properties of each book stored in your MongoDB database.

const bookSchema = new mongoose.Schema({
    title: 
    {
        type : String,
        required : true,
    },
    description: 
    {
        type : String,
        required : true,
    },
    category: 
    {
        type : String,
        required : true,
    },
    trending: 
    {
        type : Boolean,
        required : true,
    },
    coverImage: 
    {
        type : String,
        required : true,
    },
    oldPrice: {
        type : Number,
        required : true
    },
    NewPrice: {
        type : Number,
        required : true
    },
    createdAt: {
        type:Date,
        default: Date.now,
    }
},

//timestamps adds time field automatically.
  {
     timestamps : true,
  }
);

const Book = mongoose.model('Book',bookSchema);
module.exports = Book;




