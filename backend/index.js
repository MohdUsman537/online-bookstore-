const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require("cors")


 
const port = process.env.PORT || 5000;
require('dotenv').config();


app.use(cors({
    origin: ['http://localhost:5173'], // Include Frontend URL
    credentials: true,
}))
app.use(express.json());


//routes
const bookRoutes = require('./src/books/book.route')
app.use("/api/books" , bookRoutes)

async function main() 
{
    await mongoose.connect(process.env.DB_URL);
    app.get('/', (req, res) => 
        {
            res.send('Book Store Running !!')
        }
    );
}  

main().then(()=> console.log("Mongo Server connected Successfully.")).catch(err => console.log(err));


app.listen(port, () => 
    {
  console.log(`Example app listening on port ${port}`)
})