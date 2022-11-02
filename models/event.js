const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date },
  distance: { type: Number }
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event
