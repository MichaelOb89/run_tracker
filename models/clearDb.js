require('dotenv').config()

const db = require('./db')
const Activity = require('./activity')
const Event = require('./event')


Activity.deleteMany({})
  .then(() => {
    db.close()
  })
  .catch(err => {
    console.log(err)
    db.close()
  })

Event.deleteMany({})
  .then(() => {
    db.close()
  })
  .catch(err => {
    console.log(err)
    db.close()
  })