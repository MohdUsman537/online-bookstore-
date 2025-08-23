const express = require('express');
const User = require('./user.model');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY


router.post("/admin" , async(req,res) => {
    
    // get the username,password from client
    const {username,password} = req.body;


    try{
        // check if present in database based on username
        const data = await User.findOne({username});
        
        
        if(data.role !== "admin")
        {
            return res.status(404).send({message: "Admin not found"});
        }

        const isMatch = await bcrypt.compare(password,data.password);
        if (!isMatch) {
              return res.status(401).json({ message: "Invalid password" });
        }

        // jsonwebtoken generating a token
        const token = jwt.sign(
            {id:data._id , username: data.username,role: data.role},
            JWT_SECRET,
            {expiresIn : "1h"}
        )
        

        return res.status(200).json({
            message: "Authentication Successful",
            token: token,
            user: {
                username: admin.username,
                role: admin.role
            }
        })

    }catch(error){
        console.error("Failed to login as admin",error)  // server side (terminal)
        res.status(401).send({message: "Failed to Login as Admin"})
        // client side
    }
})

module.exports = router