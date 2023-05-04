const Brand = require('../models/brand.model')
const createError = require('http-errors')

module.exports.create = (req, res, next) => {
    Brand.create(req.body)
        .then((brand) => res.status(201).json(brand))
        .catch(next)
}

module.exports.list = (req, res, next) => {
    Brand.find() //filters
        .then((brands) => { 
            console.log(brands)
            res.json(brands) })
        .catch(next)
}

module.exports.update = (req, res, next) => {
    Object.assign(req.brand, req.body)

    req.brand.save()
        .then((brand) => res.json(brand))
        .catch(next)
}

module.exports.detail = (req, res, next) => res.json(req.brand)

module.exports.delete = (req, res, next) => {
    Brand.deleteOne({ _id: req.brand.id })
        .then(() => res.status(204).send())
        .catch(next)
}



