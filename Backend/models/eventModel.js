const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventType: {
        type: String,
        required: true,
    },
    participant: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Event", eventSchema);