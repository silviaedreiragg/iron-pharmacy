const express = require('express')
const routerComment = express.Router()
const comments = require('../controllers/comment.controller')
const userMid = require('../middlewares/user.mid')
const commentMid = require('../middlewares/comment.mid')

routerComment.post('/products/:id/comment', 
userMid.exists, 
commentMid.exists,
comments.create)

routerComment.patch('/products/:id/comment/:commentId', 
userMid.exists, 
commentMid.exists,
comments.update)

routerComment.delete('/products/:id/comment/:commentId', 
userMid.exists, 
commentMid.exists,
comments.delete)

module.exports = routerComment