const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  organizer: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
  }
})

module.exports = mongoose.model('Event', eventSchema)
