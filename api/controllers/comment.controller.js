const Comment = require('../models/comment.model')
const createError = require('http-errors')


module.exports.create = (req, res, next) => {
  Comment.create({
    text: req.body.text,
    product: req.params.id,
    author: req.user.id

  })
  .then((comment) => res.json(comment))
  .catch(next)
}

module.exports.update = (req, res, next) => {
  Object.assign(req.comment, req.body)

  req.comment.save()
  .then((comment) => res.json(comment))
  .catch(next)
}

module.exports.delete = (req, res, next) => {
  Comment.deleteOne({_id: req.comment.id})
  .then(() => res.status(204).send())
  .catch(next)
}