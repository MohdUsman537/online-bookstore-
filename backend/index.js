// Main File for the Backend Server of the Bookstore Application
// This file sets up the Express server, connects to MongoDB, and defines the API routes

const express = require('express')
const mongoose = require('mongoose') // Used to intert with MongoDB
const app = express()
const cors = require("cors")


 
const port = process.env.PORT || 5000; 
require('dotenv').config();


app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'], // Include Frontend URL
    credentials: true,
}))



//importing routes from their respective route files.
const bookRoutes = require('./src/books/book.route');
app.use("/api/books" , bookRoutes) // storing all book related routes under /api/books

const orderRoutes = require('./src/orders/order.route')
app.use("/api/orders" , orderRoutes)

const userRoutes = require('./src/users/user.route')
app.use("/api/auth",userRoutes)

const adminRoutes = require('./src/stats/admin.stats')
app.use("/api/admin",adminRoutes)



// Connecting Backend Server to MongoDB Database.
async function main() 
{
    
    await mongoose.connect(process.env.DB_URL);
    
    // req -> object  client sends
    // res -> object server sends back
    // Confirmation Message 
    app.get('/', (req, res) => 
        {
            res.send('Book Store Server Running !!')
        }
    );
}  

//calling main function in async immediately.
(async () => {
    try{
        await main();
        console.log("MongoDB Server Connected Successfully.")
    }
    catch(err){
        console.log(err);
    }
})();



// listen function to start server at port from backend
app.listen(port, () => {
  console.log(`Bookstore App listening on port ${port}`)
})