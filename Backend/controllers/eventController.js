const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Event = require('../models/eventModel');
const { ConnectionStates } = require('mongoose');

const createToken = (id, res) => {
    const token = jwt.sign({ eventId: id }, process.env.SECRETKEY);
    if (res) {
        res.cookie('Authorization', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 3600000),
        });
        return token;
    }
}

const getEventId = (req) => {
    return new Promise((resolve, reject) => {
        try {
            // Check if the 'Authorization' header is present in the request
            if (!req.headers || !req.headers.authorization) {
                throw new Error('Authorization header is missing');
            }
            // Decode the JWT token from the 'Authorization' header
            const event = jwt.decode(req.headers.authorization, process.env.SECRETKEY);
            // Check if the decoded token contains the event ID
            if (!event || !event.eventId) {
                throw new Error('Event ID not found in token');
            }
            // Resolve with the event ID
            resolve(event.eventId);
        } catch (error) {
            // Reject with the error
            reject(error);
        }
    });
};



// @desc Post a new event : @route POST /api/events/create : @access  Private
const createEvent = async (req, res, next) => {
    console.log(req.body);

    const { eventName, eventType, participant, startDate, endDate, location } = req.body;
    if (!eventName || !eventType || !participant || !startDate || !endDate || !location) {
        return res
            .status(400)
            .json({ message: 'Please provide all the required fields' });
    }
    try {
        const event = await Event.create({
            eventName,
            eventType,
            participant,
            startDate,
            endDate,
            location,
        });
        const token = createToken(event.id, res);
        console.log(token);
        res.status(201).json({
            message: 'Event added succesfully',
            event: {
                id: event.id,
                eventName: event.eventName,
                eventType: event.eventType,
                participant: event.participant,
                startDate: event.startDate,
                endDate: event.endDate,
                location: event.location,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
}

// @desc Get all events : @route GET /api/events : @access  Private
const getEvents = async (req, res, next) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

// @desc Get a single event : @route GET /api/events/:id : @access  Private
const getEventById = async (req, res, next) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

// @desc Update an event : @route PUT /api/events/update/:id : @access  Private
const updateEvent = async (req, res, next) => {
    try {
        const eventid = getEventId(req);
        if (!eventid) {
            return res.status(401).json({ message: 'Authentication required. Missing token.' });
        }
        const event = await Event.findByIdAndUpdate
            (eventid, req.body, {
                new: true,
                runValidators: true,
            });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
}

// @desc Delete an event : @route DELETE /api/events/delete/:id : @access  Private
const deleteEvent = async (req, res, next) => {
    try {
        const eventid = getEventId(req);
        const event = await Event.findByIdAndDelete(eventid);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted succesfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent,
};