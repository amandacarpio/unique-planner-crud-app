require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
// const MongoStore = require('connect-mongo') // for authentication purposes - will activate once I reach that step
const mongoFile = require('./models/mongoConnection')
const TasksRouter = require('./controller/tasks')
const PORT = process.env.PORT || 4001

const app = express() // this is for our middlewares which are the next few lines

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static('public')) // so i can use files in my partials folder
app.use('/planner', TasksRouter) // if we have this, no need for app.get

app.listen(PORT, () => console.log(`Running on port ${PORT}`))