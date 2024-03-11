import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
    Id: { type: Number, required: true },
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Organizer: { type: String, required: true },
    Location: { type: String, required: true },
    Date: { type: String, required: true },
    Time: { type: String, required: true },
    Image: { type: String, required: false },
}, {
    collection: "events"
});

const Event = mongoose.model("Event", eventSchema);

export { Event };