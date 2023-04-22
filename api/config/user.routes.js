const express = require('express')
const routerUser = express.Router()
const users = require('../controllers/user.controller')

routerUser.post('/users', users.signup)
routerUser.get('/users', users.list)
routerUser.get('/users/:id', users.detail)
// routerUser.get('/users/:id/confirm', users.confirm)
routerUser.patch('/users/:id', users.update)
routerUser.delete('/users/:id', users.delete)

module.exports = routerUser
