const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user','admin'],
        required: true
    }
})

// MiddleWare 1
userSchema.pre('save',async function(next){
    
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
    });


// create model using mongoose.model
const User = mongoose.model('User',userSchema);

module.exports = User