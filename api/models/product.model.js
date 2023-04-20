const mongoose = require('mongoose')
const { isValidUrl } = require('../utils/validations')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        require: 'Product name is required'
    },
    expiration_date: {
        type: Date,
        require: 'Expiration date is required'

    },
    type: {
        type: String,
        require: 'Type is required'
    },
    description: {
        type: String,
        require: 'Description iss required',
        minlength: [20, 'Producto description needs at least 10 characters']
    },
    stock: {
        type: Number,
        require: 'Stock is required'
    },
    brand: {
        type: String,
        validate: {
            validator: isValidUrl,
            message: 'Not a valid url'
        }
    },
    imageUrl: {
        type: String,
        validate: {
            validator: isValidUrl,
            message: 'Not a valid url'
        }
    }
},
{
    tipestamps: true,
    toJSON: {
        vituals: true,
        transform: function (doc, ret) {
            delete ret._v;
            ret.id = ret._id;
            delete ret._id
            return ret
        }
    }
})

productSchema.virtual('comments'), {
    ref: 'comments',
    localField: '_id',
    foreignFIeld: 'product',
    justOne: false,
}

const Product = mongoose.model('Product', productSchema)

module.exports = Product