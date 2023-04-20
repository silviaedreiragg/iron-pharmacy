require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')

const createError = require('http-errors')
require('./config/db.config')

const app = express()

app.use(helmet())
app.use(express.json())
app.use(logger('dev'))

//traemos controladores y rutas
const api = require('./config/routes.config')
app.use('/api/v1', api)

// Módulo errores
app.use((req, res, next) => { next(createError(404, 'route not found')) })

app.use((error, req, res, next) => {
    if (!error.status) {
        error = createError(500, error);
    }

    console.log(error)

    const data = {
        message: error.message
    }
    res.status(error.status).json(data)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () =>
    console.info(`app running on port ${PORT}`))