require('dotenv').config()
const Task = require('./taskSchema')

    // seed data to make sure my data is populating to mongodb
    const startingTasks = [
        { date: "Dec 8, 2022", taskName: "clean", taskDetail: "in-laws arriving over the weekend. Must have a clean home.", urgent: true },
        { date: "Dec 10, 2022", taskName: "pick up in-laws from airport", taskDetail: "arriving at 1pm", urgent: true }
    ]

    // to delete all tasks
    Task.deleteMany({}, (err, data) => {
        // be able to create new tasks once old tasks are deleted
        Task.create(startingTasks, (err, data) => {
            console.log(data)
            // ends the connection with mongodb
            process.exit()
        })
    })
