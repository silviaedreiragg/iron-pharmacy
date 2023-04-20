const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: {
        type: String,
        require: 'comment is required'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
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

const comment = mongoose.model('Comment', commentSchema)

module.exports = Comment