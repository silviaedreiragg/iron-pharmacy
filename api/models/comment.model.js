const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: {
        type: String,
        required: 'comment is required'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
{
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            delete ret._v;
            ret.id = ret._id;
            delete ret._id
            return ret
        }
    }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment