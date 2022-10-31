const Event = require('../models/event')

const eventController = {
    index(req, res, next) {
        Event.find({}, (err, foundEvents) => {
            if(err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.events = foundEvents
                next()
            }
        })
    },
    delete(req, res, next) {
        Event.findByIdAndDelete(req.params.id, (err, deletedEvent) => {
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
        Event.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedEvent) => {
            if(err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.event = updatedEvent
                next()
            }
        })
    },
    create (req, res, next) {
        Event.create(req.body, (err, createdEvent) => {
            if(err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.event = createdEvent
                next()
            }
        })
    },
    show (req, res, next) {
        Event.findById(req.params.id, (err, foundEvent) => {
            if(err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.event = foundEvent
                next()
            }
        })
    }
}

module.exports = eventController