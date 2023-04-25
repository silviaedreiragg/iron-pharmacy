const User = require("../models/user.model")
const createError = require('http-errors')


module.exports.exists = (req, res, next) => {
  User.findById(req.params.id)
  .then((user) => {
    if (user) {
      req.user = user
      next()
    } else {
      next(createError(404, 'Product not found'))
    }
  })
  .catch(next)
}