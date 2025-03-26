const mongoose = require('mongoose')
/* Creating Book Models*/

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
        reuired : true
    },
    NewPrice: {
        type : Number,
        reuired : true
    },
    createdAt: {
        type:Date,
        default: Date.now,
    }
},
  {
     timestamps : true,
  }
);

const Book = mongoose.model('Book',bookSchema);
module.exports = Book;




