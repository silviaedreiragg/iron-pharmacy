const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: 'User name is required',
        minlength: [5, 'User name needs at least 5 characters']
    },
    imageUrl: {
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        require: 'User email is required'
    },
    password: {
        
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User