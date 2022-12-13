// this page was created for authentication

const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

const router = express.Router()

// the below are the signup routes (get => form, post => submit form)
router.get('/signup', (req, res) => {
    res.render('user/signup.ejs')
})

router.post('/signup', async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))

    User.create(req.body, (err, user) => {
        res.redirect('/user/login')
    })
})

// the below are the login routes (get => form, post => submit form)
router.get('/', (req, res) => {
    res.render('user/login.ejs')
})

router.post('/login', (req, res) => {
    if(!user){
        res.send("user doesn't exist")
    } else {
        const result = bcrypt.compareSync(password, user.password)
        if(result) {
            req.session.username = username
            req.session.loggedIn = true
            res.redirect('/planner')
        } else {
            res.send('wrong password')
        }
    }
})

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        res.redirect('/')
    })
})

module.exports = router