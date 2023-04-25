const express = require('express')
const routerProducts = express.Router()
const products = require('../controllers/product.controller');

const middleware = require('../middlewares/product.mid')

routerProducts.post('/products', products.create)
routerProducts.get('/products', products.list)
routerProducts.patch('/products/:id', middleware.exists, products.update)
routerProducts.get('/products/:id', middleware.exists, products.detail)
routerProducts.delete('/products/:id', middleware.exists, products.delete)


module.exports = routerProducts