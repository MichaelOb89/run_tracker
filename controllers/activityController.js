const Activity = require('../models/activity')
const Event = require('../models/event')

const activityController = {
  index (req, res, next) {
    Event.find({ username: req.session.username }, (err, foundEvents) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        foundEvents.sort((a, b) => a.date - b.date)
        res.locals.data.events = foundEvents
      }
    })
    Activity.find({ username: req.session.username }, (err, foundActivities) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.activities = foundActivities
        next()
      }
    })
  },
  delete (req, res, next) {
    Activity.findByIdAndDelete(req.params.id, (err, deletedActivity) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        next()
      }
    })
  },
  update (req, res, next) {
    Activity.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedActivity) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.activity = updatedActivity
        next()
      }
    })
  },
  create (req, res, next) {
    req.body.username = req.session.username
    Activity.create(req.body, (err, createdActivity) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.activity = createdActivity
        next()
      }
    })
  },
  show (req, res, next) {
    Activity.findById(req.params.id, (err, foundActivity) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.activity = foundActivity
        next()
      }
    })
  }
}

module.exports = activityController
