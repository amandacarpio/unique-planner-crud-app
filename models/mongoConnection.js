require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(MONGO_URL, CONFIG)

mongoose.connection
    .on('open', () => console.log('Yay! Connected to Mongoose.'))
    .on('close', () => console.log("Oh no! You've disconnected from Mongoose"))
    .on('error', (error) => console.log("Oh no! There's an error", error))

module.exports = mongoose