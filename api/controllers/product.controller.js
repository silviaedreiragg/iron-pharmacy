const Product = require('../models/product.model')
const createError = require('http-errors')

module.exports.create = (req, res, next) => {
    Product.create(req.body)
        .then((product) => res.status(201).json(product))
        .catch(next)
}

module.exports.list = (req, res, next) => {
    Product.find() //filters
        .populate('comments')
        .then((products) => res.json(products))
        .catch(next)
}

module.exports.update = (req, res, next) => {
    // guarda en el comentario lo que trae en el body el mid
    Object.assign(req.product, req.body);
    req.product.save()
        .then((product) => res.json(product))
        .catch(next)
}


module.exports.detail = (req, res, next) => res.json(req.product)


module.exports.delete = (req, res, next) => {
    Product.deleteOne({_id: req.product.id})
        .then(() => res.status(204).send())
        .catch(next)
}