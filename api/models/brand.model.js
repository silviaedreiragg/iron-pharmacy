const mongoose = require('mongoose');
const { isValidUrl } = require('../utils/validations')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        require: 'Product name is required'
    },
    logo: {
        type: Image,
        require: 'logo image is required'
    },
    description: {
        type: String,
        require: 'description is required'
    },
    oficial_web: {
        type: String,
        validate: {
            validator: isValidUrl,
            message: 'Not a valid url'
        }

    }
})



const Brand = mongoose.model('Brand', brandSchema)

module.exports = Brand