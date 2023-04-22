const User = require('../models/user.model')
const createError = require('http-errors')

module.exports.signup = (req, res, next) => {
  User.create(req.body)
  .then((user) => res.json(user))
  .catch(next)
}

module.exports.list = (req, res, next) => {
  User.find()
  .then((users) => res.json(users))
  .catch(next)
}

module.exports.detail = (req, res, next) => {
  User.findById(req.params.id)
  .then((user) => {
    if (!user) {
      next(createError(404, 'User not found'))
     } else {
      res.json(user)
     }
  })
  .catch(next)
}

module.exports.update = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
  .then((user) => res.json(user))
  .catch(next)
}

module.exports.delete = (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
  .then((user) => res.status(204).json())
  .catch(next)
}