const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
        type: String,
        required: 'User name is required',
        minlength: [5, 'User name needs at least 5 characters']
    },
    username: {
        type: String,
        required: "User username is required",
        minlength: [5, "Username needs at least 5 characters"],
        match: [/^[a-z0-9]+$/, "Username must be lowercase without spaces"],
        lowecase: true,
        // unique: true
    },
    password: {
        type: String,
        required: "User password is required",
        minlength: [10, "User password needs at least 10 characters"]
    },
    imageUrl: {
        type: String,
        required: "User image is required",
        match: [/^https?:\/\/.+\.(jpg|jpeg|png)$/, "image url must be valid"]
    },
    admin: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: 'User email is required'
    },
},
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: function (doc, ret) {
                delete ret.__v;
                ret.id = ret._id;
                delete ret._id;
                delete ret.password;
                return ret;
            }
        }
    })

userSchema.pre("save", function (next) {
    const user = this;

    if (user.isModified("password")) {
        bcrypt
            .genSalt(10)
            .then((salt) => {
                return bcrypt.hash(user.password, salt)
                    .then(hash => {
                        user.password = hash;
                        next()
                    })
            })
            .catch(error => next(error));
    } else {
        next();
    }
});

const User = mongoose.model('User', userSchema)

module.exports = User