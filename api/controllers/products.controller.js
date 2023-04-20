const Product = require('../models/product.model')

module.exports.list = (req, res, next) => {
    Product.find()
        .then((products) => res.json(products))
        .catch(next)
}

module.exports.create = (req, res, next) => {
    console.log(req.body)
    Product.create(req.body)
        .then((product) => res.status(201).json(product))
        .catch(next)
}