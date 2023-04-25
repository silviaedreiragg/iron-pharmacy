require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')

const createError = require('http-errors')
require('./config/db.config')

const app = express()

const cors = require("./config/cors.config")
app.use(cors)
app.use(helmet())
app.use(express.json())
app.use(logger('dev'))
const secure = require('./middlewares/secure.mid')

app.use(secure.cleanBody)

app.use('/api/v1', require("./config/user.routes"))
app.use('/api/v1', require("./config/brand.routes"))
app.use('/api/v1', require("./config/product.routes"))
app.use('/api/v1', require("./config/comment.routes"))

// Módulo errores
app.use((req, res, next) => { next(createError(404, 'route not found')) })

app.use((error, req, res, next) => {
    if (error instanceof mongoose.Error.ValidationError) {
        error = createError(400, error)
    } else if (error instanceof mongoose.Error.CastError && error.path == '_id') {
        const resourceName = error.model().constructor.modelName
        error = createError(404, `${resourceName} not found`)
    } else if (error.message.includes('E11000')) {
        error = createError(409, 'Duplicated')
    } else if (!error.status) {
        error = createError(500, error)
    }

    console.log(error)

    const data = {
        message: error.message
    }

    if (error.errors) {
        const errors = Object.keys(error.errors)
            .reduce((errors, errorKey) => {
                errors[errorKey] = error.errors[errorKey].message
                return errors
            }, {})
        data.errors = errors
    }
    res.status(error.status).
        json(data)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () =>
    console.info(`app running on port ${PORT}`))