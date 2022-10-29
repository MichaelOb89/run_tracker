const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    title: {type: String, required: true},
    date: {type: Date},
    distance: {type: Number},
    minutesPace: {type: Number},
    secondsPace: {type: Number},
    mapLink: {type: String}
})

const Activity = mongoose.model('Activity', activitySchema)

module.exports = Activity