const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title: {type: String, required: true},
    distance: {type: Number},
    minutesPace: {type: Number},
    secondsPace: {type: Number}
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event