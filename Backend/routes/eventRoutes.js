const express = require('express');
const router = express.Router();

const {
    getEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
} = require('../controllers/eventController');

router.get('/', getEvents);

router.get('/:id', getEventById);

router.post('/create', createEvent);

router.put('/update/:id', updateEvent);

router.delete('/delete/:id', deleteEvent);

module.exports = router;