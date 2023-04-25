const Brand = require("../models/brand.model")
const createError = require('http-errors')



module.exports.exists = (req, res, next) => {
  Brand.findById(req.params.id)
  .then((brand) => {
    if (brand) {
      req.brand = brand
      next()
    } else {
      next(createError(404, 'Product not found'))
    }
  })
  .catch(next)
}