const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        Type: String,
        Require: 'User name is required',
        Minlength: [5, 'User name needs at least 5 characters']
    },
    imageUrl: {
        type: String
    },
    admin: {
        Type: Boolean,
        default: false
    },
    email: {
        Type: String,
        Require: 'User email is required'
    },
    password: {
        
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User