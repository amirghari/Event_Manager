const event = require('../models/eventModel')
const mongoose = require('mongoose')

// get all events
const getEvents = async (req, res) => {
  try {
    const events = await event.find({}).sort({createdAt: -1})
    res.status(200).json(events)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// get a single event
const getEvent = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such event'})
  }
  try {
    const getEvent = await event.findById(id)
    if (!getEvent) {
      return res.status(404).json({error: 'No such event'})
    }
    res.status(200).json(getEvent)
  } catch (error) {
    res.status(400).json({error: error.message})
  }

}
// create a new event

const createEvent = async (req, res) => {
  const {type, description, organizer, location, date} = req.body

  // add to the database
  try {
    const eventToBeAdded = await event.create({ type, description, organizer, location, date })
    res.status(201).json(eventToBeAdded)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// delete event
const deleteEvent = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such event'})
  }
  try {
    const eventToBeAdded = await event.findOneAndDelete({_id: id})

  if(!eventToBeAdded) {
    return res.status(400).json({error: 'No such event'})
  }

  res.status(200).json(eventToBeAdded)
} catch (error) {
  res.status(400).json({error: error.message})
} 
}

// update a event
const updateEvent = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such event'})
  }
  try {
    const eventToUpdate = await event.findByIdAndUpdate({_id: id}, {...req.body}, {new: true})
      if (!eventToUpdate) {
        return res.status(400).json({error: 'No such event'})
      }
      res.status(200).json(eventToUpdate)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

module.exports = {
  getEvents,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent
}