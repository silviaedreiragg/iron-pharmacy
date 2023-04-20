const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI)
    .then(() => console.info(`succesfully logged ${MONGODB_URI}`))
    .catch((error) => console.error('error occurred', error))