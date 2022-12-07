require('dotenv').config()
// const mongoose = require('./mongoConnection') // this was not needed because I have mongoose connected in my taskSchema.js
const Task = require('./taskSchema')

// mongoose.connection.on('open', () => { // this was not needed because it was causing issues. It appears that it was trying to connect to mongoose again after connecting on taskSchema.js and was throwing an error

    // seed data to make sure my data is populating to mongodb
    const startingTasks = [
        { date: "Dec 8, 2022", taskName: "clean", taskDetail: "in-laws arriving over the weekend. Must have a clean home.", urgent: true },
        { date: "Dec 10, 2022", taskName: "pick up in-laws from airport", taskDetail: "arriving at 1pm", urgent: true }
    ]

    // to delete all tasks
    Task.deleteMany({}, (err, data) => {
        // be able to create new tasks once old tasks are deleted
        Task.create(startingTasks, (err, data) => {
            // res.send(data)
            console.log(data)
            process.exit()
        })
    })

// }) // closing parentheses for line 5 which is no longer needed