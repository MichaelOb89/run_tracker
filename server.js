require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')
const cors = require('cors')
const session = require('express-session')
const MongoStore  =require('connect-mongo')
const PORT = process.env.PORT || 8000

const app = express()

//= ==========Configure the app===========

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
db.once('open', () => {
  console.log('Connected to MongoDB')
})

//= ==========Middleware===========

app.use(methodOverride('_method'))
app.use(express.static('public'))

app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
    saveUninitialized: true,
    resave: false
  })
)

app.use('/', require('./controllers/routeController'))
app.use('/user', require('./controllers/authController'))

app.listen(PORT)
