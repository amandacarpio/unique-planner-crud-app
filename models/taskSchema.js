require('dotenv').config()
const mongoose = require('./mongoConnection')

const { Schema, model } = mongoose

const tasksSchema = new Schema ({
    date: String,
    taskName: String,
    taskDetail: String,
    urgent: Boolean,
})

const Task = model('task', tasksSchema)

module.exports = Task