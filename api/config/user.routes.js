const express = require('express')
const routerUser = express.Router()
const users = require('../controllers/user.controller')
const userMid = require('../middlewares/user.mid')

routerUser.post('/users', users.signup)
routerUser.get('/users', users.list)
routerUser.get('/users/:id', userMid.exists, users.detail)
// routerUser.get('/users/:id/confirm', users.confirm)
routerUser.patch('/users/:id', userMid.exists, users.update)
routerUser.delete('/users/:id', userMid.exists, users.delete)


module.exports = routerUser
