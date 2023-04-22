const express = require('express')
const routerBrand = express.Router()
const brands = require('../controllers/brand.controller')

routerBrand.get('/brands', brands.list)
routerBrand.get('/brands/:id', brands.detail)
routerBrand.post('/brands', brands.create)
routerBrand.patch('/brands/:id', brands.update)
routerBrand.delete('/brands/:id', brands.delete)

module.exports = routerBrand