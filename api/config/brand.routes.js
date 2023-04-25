const express = require('express')
const routerBrand = express.Router()
const brands = require('../controllers/brand.controller')
const brandMid = require('../middlewares/brand.mid')

routerBrand.post('/brands', brands.create)
routerBrand.get('/brands', brands.list)
routerBrand.patch('/brands/:id', brandMid.exists, brands.update)
routerBrand.get('/brands/:id', brandMid.exists, brands.detail)
routerBrand.delete('/brands/:id', brandMid.exists, brands.delete)

module.exports = routerBrand