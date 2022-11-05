const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

const router = express.Router()

router.get('/signup', (req, res) => {
  res.render('user/SignUp.jsx')
})

router.post('/signup', async (req, res) => {
  req.body.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  )
  User.create(req.body)
    .then((user) => {
      res.redirect('/user/login')
    })
    .catch((err) => {
      console.log(err)
      res.json({ err })
    })
})

router.get('/login', (req, res) => {
  res.render('user/Login.jsx')
})

router.post('/login', async (req, res) => {
  User.findOne({ username: req.body.username })
    .then(async (user) => {
      if (user) {
        const result = await bcrypt.compare(req.body.password, user.password)
        if (result) {
          req.session.username = req.body.username
          req.session.loggedIn = true
          res.redirect('/runs')
        } else {
          res.json({ error: 'Incorrect password' })
        }
      } else {
        res.json({ error: 'User not found' })
      }
    })
    .catch((err) => {
      console.log(err)
      res.json({ err })
    })
})

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err)
      res.status(500).json(err)
    } else {
      res.redirect('/user/login')
    }
  })
})

module.exports = router
