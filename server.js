require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
// const MongoStore = require('connect-mongo') // for authentication purposes - will activate once I reach that step
const mongoFile = require('./models/mongoConnection')
const PORT = process.env.PORT || 4001

const app = express() // this is for our middlewares which are the next few lines

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/planner', (req,res) => {
    res.render('index.ejs')
})

app.listen(PORT, () => console.log(`Running on port ${PORT}`))