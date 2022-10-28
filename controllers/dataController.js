const Activity = require('../models/activity')
const Event = require('../models/event')


const dataController = {
    index(req, res, next) {
        Activity.find({}, (err, foundActivities) => {
            if(err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.activities = foundActivities
                next()
            }
        })
    },
    delete(req, res, next) {
        Activity.findByIdAndDelete(req.params.id, (err, deletedActivity) => {
            if(err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                next()
            }
        })
    },
    update(req, res, next) {
        Activity.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedActivity) => {
            if(err) {
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
        Activity.create(req.body, (err, createdActivity) => {
            if(err) {
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
            if(err) {
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

module.exports = dataController