const mongoose = require('mongoose')
const { isValidUrl } = require('../utils/validations')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: 'Product name is required'
    },
    expiration_date: {
        type: Date,
        required: 'Expiration date is required'
    },
    type: {
        type: String,
        required: 'Type is required'
    },
    description: {
        type: String,
        required: 'Description iss required',
        minlength: [20, 'Producto description needs at least 20 characters']
    },
    stock: {
        type: Number,
        required: 'Stock is required'
    },
    brand: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    }],
    brandName: {
        type: String,
        required: 'Type is required'
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
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            delete ret.__v;
            ret.id = ret._id;
            delete ret._id
            return ret
        }
    }
})

productSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'product',
    justOne: false,
})


const Product = mongoose.model('Product', productSchema)

module.exports = Product