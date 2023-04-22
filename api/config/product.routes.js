const express = require('express')
const routerProducts = express.Router()
const products = require('../controllers/products.controller');

routerProducts.get('/products', products.list)
routerProducts.post('/products', products.create)

routerProducts.get('/products/:id', products.detail)
routerProducts.post('/products/:id/comments', products.createComment)
routerProducts.patch('/products/:id', products.update)
routerProducts.delete('/products/:id', products.delete)



module.exports = routerProducts