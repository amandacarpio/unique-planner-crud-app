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
    res.render('monIndex.ejs')
})

// tuesday index route
router.get('/tuesday', (req, res) => {
    res.render('tuesIndex.ejs')
})

// wednesday index route
router.get('/wednesday', (req, res) => {
    res.render('wedIndex.ejs')
})

// thursday index route
router.get('/thursday', (req, res) => {
    res.render('thursIndex.ejs')
})

// friday index route
router.get('/friday', (req, res) => {
    res.render('friIndex.ejs')
})

// sat&sun index route
router.get('/saturday/sunday', (req, res) => {
    res.render('satSunIndex.ejs')
})

// new & create tasks

router.get('/monday/new', (req, res) => {
    res.render('monNewTask.ejs', { day:daysOfWeek })
})

router.post('/monday', (req,res) => {
    Task.create(req.body, (err, createdTask) => {
        res.redirect('/planner/monday')
    })
})

module.exports = router