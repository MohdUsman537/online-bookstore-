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



//importing routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require('./src/orders/order.route')
const userRoutes = require('./src/users/user.route')
const adminRoutes = require('./src/stats/admin.stats')


app.use("/api/books" , bookRoutes)
app.use("/api/orders" , orderRoutes)
app.use("/api/auth",userRoutes)
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