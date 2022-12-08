const express = require('express')
const Task = require('../models/taskSchema') // grabs our actual schema formula/data/connections/etc
const daysOfWeek = require('../models/days')

// create router
const router = express.Router()

// index route
router.get('/', (req, res) => {
    res.render('index.ejs', { day:daysOfWeek })
})

// monday index route
router.get('/monday', (req, res) => {
    Task.find({ day: "monday" })
    .then((tasks) => {
    res.render('monIndex.ejs', { tasks })
})
.catch(err => console.log(err))
})

// tuesday index route
router.get('/tuesday', (req, res) => {
    Task.find({ day: "tuesday" })
    .then((tasks) => {
    res.render('tuesIndex.ejs', { tasks })
})
.catch(err => console.log(err))
})

// wednesday index route
router.get('/wednesday', (req, res) => {
    Task.find({ day: "wednesday" })
    .then((tasks) => {
    res.render('wedIndex.ejs', { tasks })
})
.catch(err => console.log(err))
})

// thursday index route
router.get('/thursday', (req, res) => {
    Task.find({ day: "thursday" })
    .then((tasks) => {
    res.render('thursIndex.ejs', { tasks })
})
.catch(err => console.log(err))
})

// friday index route
router.get('/friday', (req, res) => {
    Task.find({ day: "friday" })
    .then((tasks) => {
    res.render('friIndex.ejs', { tasks })
})
.catch(err => console.log(err))
})

// sat&sun index route
router.get('/saturday/sunday', (req, res) => {
    Task.find({ day: "satSun" })
    .then((tasks) => {
    res.render('satSunIndex.ejs', { tasks })
})
.catch(err => console.log(err))
})

// monday new & create tasks

router.get('/monday/new', (req, res) => {
    // req.body.urgent = req.body.urgent === 'on' ? true : false
    res.render('monNew.ejs')
})

router.post('/monday', (req,res) => {
    req.body.urgent = req.body.urgent === 'on' ? true : false
    Task.create(req.body, (err, createdTask) => {
        res.redirect('/planner/monday')
    })
})

// tuesday new & create tasks
router.get('/tuesday/new', (req, res) => {
    res.render('tuesNew.ejs')
})

router.post('/tuesday', (req,res) => {
    req.body.urgent = req.body.urgent === 'on' ? true : false
    Task.create(req.body, (err, createdTask) => {
        res.redirect('/planner/tuesday')
    })
})

// wednesday new & create tasks
router.get('/wednesday/new', (req, res) => {
    res.render('wedNew.ejs')
})

router.post('/wednesday', (req,res) => {
    req.body.urgent = req.body.urgent === 'on' ? true : false
    Task.create(req.body, (err, createdTask) => {
        res.redirect('/planner/wednesday')
    })
})

// thursday new & create tasks
router.get('/thursday/new', (req, res) => {
    res.render('thursNew.ejs')
})

router.post('/thursday', (req,res) => {
    req.body.urgent = req.body.urgent === 'on' ? true : false
    Task.create(req.body, (err, createdTask) => {
        res.redirect('/planner/thursday')
    })
})

// friday new & create tasks
router.get('/friday/new', (req, res) => {
    res.render('friNew.ejs')
})

router.post('/friday', (req,res) => {
    req.body.urgent = req.body.urgent === 'on' ? true : false
    Task.create(req.body, (err, createdTask) => {
        res.redirect('/planner/friday')
    })
})

// sat/sun new & create tasks
router.get('/saturday/sunday/new', (req, res) => {
    res.render('satSunNew.ejs')
})

router.post('/saturday/sunday', (req,res) => {
    req.body.urgent = req.body.urgent === 'on' ? true : false
    Task.create(req.body, (err, createdTask) => {
        res.redirect('/planner/saturday/sunday')
    })
})

// monday edit and update
router.get('/monday/:id/edit', (req, res) => {
    const id = req.params.id
    Task.findById(id)
    .then((task) => {
        res.render('monEdit.ejs', { task })
    })
})

router.put('/monday/:id', (req, res) => {
    req.body.urgent = req.body.urgent === 'on' ? true : false
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTask) => {
        res.redirect(`/planner/monday/${req.params.id}`)
    })
})


// tuesday edit and update
router.get('/tuesday/:id/edit', (req, res) => {
    const id = req.params.id
    Task.findById(id)
    .then((task) => {
        res.render('tuesEdit.ejs', { task })
    })
})

router.put('/tuesday/:id', (req, res) => {
    req.body.urgent = req.body.urgent === 'on' ? true : false
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTask) => {
        res.redirect(`/planner/tuesday/${req.params.id}`)
    })
})

// wednesday edit and update
router.get('/wednesday/:id/edit', (req, res) => {
    const id = req.params.id
    Task.findById(id)
    .then((task) => {
        res.render('wedEdit.ejs', { task })
    })
})

router.put('/wednesday/:id', (req, res) => {
    req.body.urgent = req.body.urgent === 'on' ? true : false
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTask) => {
        res.redirect(`/planner/wednesday/${req.params.id}`)
    })
})

// thursday edit and update
router.get('/thursday/:id/edit', (req, res) => {
    const id = req.params.id
    Task.findById(id)
    .then((task) => {
        res.render('thursEdit.ejs', { task })
    })
})

router.put('/thursday/:id', (req, res) => {
    req.body.urgent = req.body.urgent === 'on' ? true : false
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTask) => {
        res.redirect(`/planner/thursday/${req.params.id}`)
    })
})

// friday edit and update
router.get('/friday/:id/edit', (req, res) => {
    const id = req.params.id
    Task.findById(id)
    .then((task) => {
        res.render('friEdit.ejs', { task })
    })
})

router.put('/friday/:id', (req, res) => {
    req.body.urgent = req.body.urgent === 'on' ? true : false
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTask) => {
        res.redirect(`/planner/friday/${req.params.id}`)
    })
})

// sat/sun edit and update
router.get('/saturday/sunday/:id/edit', (req, res) => {
    const id = req.params.id
    Task.findById(id)
    .then((task) => {
        res.render('satSunEdit.ejs', { task })
    })
})

router.put('/saturday/sunday/:id', (req, res) => {
    req.body.urgent = req.body.urgent === 'on' ? true : false
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTask) => {
        res.redirect(`/planner/saturday/sunday/${req.params.id}`)
    })
})

// monday show
router.get('/monday/:id', (req, res) => {
    const id = req.params.id
    Task.findById(id)
    .then((task) => {
        res.render('monShow.ejs', { task })
    })
})


// tuesday show
router.get('/tuesday/:id', (req, res) => {
    const id = req.params.id
    Task.findById(id)
    .then((task) => {
        res.render('tuesShow.ejs', { task })
    })
})

// wednesday show
router.get('/wednesday/:id', (req, res) => {
    const id = req.params.id
    Task.findById(id)
    .then((task) => {
        res.render('wedShow.ejs', { task })
    })
})

// thursday show
router.get('/thursday/:id', (req, res) => {
    const id = req.params.id
    Task.findById(id)
    .then((task) => {
        res.render('thursShow.ejs', { task })
    })
})

// friday show
router.get('/friday/:id', (req, res) => {
    const id = req.params.id
    Task.findById(id)
    .then((task) => {
        res.render('friShow.ejs', { task })
    })
})

// sat/sun show
router.get('/saturday/sunday/:id', (req, res) => {
    const id = req.params.id
    Task.findById(id)
    .then((task) => {
        res.render('satSunShow.ejs', { task })
    })
})

// monday delete
router.delete('/monday/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err, deletedTask) => {
        console.log(deletedTask)
        res.redirect('/planner/monday')
    })
})

// tuesday delete
router.delete('/tuesday/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err, deletedTask) => {
        console.log(deletedTask)
        res.redirect('/planner/tuesday')
    })
})

// wednesday delete
router.delete('/wednesday/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err, deletedTask) => {
        console.log(deletedTask)
        res.redirect('/planner/wednesday')
    })
})

// thursday delete
router.delete('/thursday/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err, deletedTask) => {
        console.log(deletedTask)
        res.redirect('/planner/thursday')
    })
})

// friday delete
router.delete('/friday/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err, deletedTask) => {
        console.log(deletedTask)
        res.redirect('/planner/friday')
    })
})

// sat/sun delete
router.delete('/saturday/sunday/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err, deletedTask) => {
        console.log(deletedTask)
        res.redirect('/planner/saturday/sunday')
    })
})

module.exports = router