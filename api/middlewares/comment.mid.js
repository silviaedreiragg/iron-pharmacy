const Comemnt = require("../models/comment.model")
const createError = require('http-errors')


module.exports.exists = (req, res, next) => {
  const commentId = req.params.commetnId || re.params.id 

  Comment.findById(commentId)
  .then((comment) => {
    if (comment) {
      req.comment = comment
      next()
    } else {
      next(createError(404, 'Product not found'))
    }
  })
  .catch(next)
}