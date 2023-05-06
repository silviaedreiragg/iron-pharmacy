const express = require('express')
const routerUser = express.Router()
const users = require('../controllers/user.controller')
const userMid = require('../middlewares/user.mid')
const secure = require("../middlewares/secure.mid")

routerUser.post('/users', users.create)
routerUser.get('/users', users.list)

routerUser.post("/login", users.login)
routerUser.get('/users/:id', secure.auth ,userMid.exists, users.detail)
routerUser.patch('/users/:id', secure.auth, users.update)
routerUser.delete('/users/:id', secure.auth, users.delete)


module.exports = routerUser
