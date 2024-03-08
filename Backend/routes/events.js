const express = require('express')
const {
  getEvents, 
  getEvent, 
  createEvent, 
  deleteEvent, 
  updateEvent
} = require('../controllers/eventController')

const router = express.Router()

// GET all events
router.get('/', getEvents)

// GET a single event
router.get('/:id', getEvent)

// POST a new event
router.post('/', createEvent)

// DELETE an event
router.delete('/:id', deleteEvent)

// UPDATE an event
router.patch('/:id', updateEvent)

module.exports = router