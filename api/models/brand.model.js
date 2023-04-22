const mongoose = require('mongoose');
const { isValidUrl } = require('../utils/validations')
const Schema = mongoose.Schema

const brandSchema = new Schema({
  name: {
    type: String,
    required: 'Product name is required'
  },
  logo: {
    type: String,
    required: 'logo image is required'
  },
  description: {
    type: String,
    required: 'description is required'
  },
  oficial_web: {
    type: String,
    validate: {
      validator: isValidUrl,
      message: 'Not a valid url'
    },
  }

},
  {
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id
        return ret
      }
    }
  }
)

brandSchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'brand',
  justOne: false
})

const Brand = mongoose.model('Brand', brandSchema)

module.exports = Brand