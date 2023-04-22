const Brand = require('../models/brand.model')
const createError = require('http-errors')

module.exports.list = (req, res, next) => {
    Brand.find()
    .then((brands) => res.json(brands))
    .catch(next)
}

module.exports.detail = (req, res, next) => {
    Brand.findById(req.params.id)
        .populate('products')
        .then((brand) => {
            if (!brand) {
                next(createError(404, 'Brand not found'))
            } else {
                res.json(brand)
            }
        })
        .catch(next)
}  

module.exports.create = (req, res, next) => {
    Brand.create(req.body)
        .then((brand) => res.json(brand))
        .catch(next)
}

module.exports.update = (req, res, next) => {
    Brand.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators:true})
    .then((brand) => res.json(brand))
    .catch(next)
}

module.exports.delete = (req, res, next) => {
    Brand.findByIdAndDelete(req.params.id)
    .then((brand) => res.status(204).json())
    .catch(next)
}


