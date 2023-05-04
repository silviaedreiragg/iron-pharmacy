require('dotenv').config()
const mongoose = require("mongoose")

function connectToTheDatabase() {
    console.info('1')
    mongoose.set('debug', true);
    console.info('2')

    const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/iron-pharmacy"
    console.info('3')
    console.info(MONGODB_URI)
    console.info('connecting to the database...')

    return mongoose.connect(MONGODB_URI)
        .then(() => console.info(`succesfully logged ${MONGODB_URI}`))
        .catch((error) => console.error('error occurred', error))

}


module.exports = {
    mongoose,
    connectToTheDatabase,
}