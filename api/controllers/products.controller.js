const Product = require('../models/product.model')
const Comment = require('../models/comment.model')
const createError = require('http-errors')


module.exports.list = (req, res, next) => {
    Product.find()
        .then((products) => res.json(products))
        .catch(next)
}

module.exports.create = (req, res, next) => {
    Product.create(req.body)
        .then((product) => res.status(201).json(product))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    Product.findById(req.params.id)
    .then((product) => {
        if (!product) {
            next(createError(404, 'Product not found'))
        } else {
            res.json(product)
        }
    })
    .catch(next)
}

module.exports.createComment = (req, res, next) => {
    Comment.create(req.body)
    .then((comment) => res.json(comment))
    .catch(next)
}

module.exports.update = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidartors:true})
    .then((product) => res.json(product))
    .catch(next)
}

module.exports.delete = (req, res, next) => {
    Product.findByIdAndDelete(req.params.id)
    .then(product => res.status(204).json())
    .catch(next)
}