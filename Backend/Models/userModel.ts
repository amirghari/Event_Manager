import mongoose, { Schema, Document } from "mongoose";

// Event interface as provided
interface Event {
  Id: number;
  Title: string;
  Description: string;
  Organizer: string;
  Location: string;
  Date: string;
  Time: string;
  Image: string;
}

// Updated IUser interface to extend mongoose.Document for type safety
interface IUser extends Document {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  events: Event[]; // Defines an array of Event objects
}

// Define the User schema
const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true }, // Ensure usernames are unique
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Ensure emails are unique
  events: [{
    Id: { type: Number, required: true },
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Organizer: { type: String, required: true },
    Location: { type: String, required: true },
    Date: { type: String, required: true },
    Time: { type: String, required: true },
    Image: { type: String, required: true }
  }]
}, {
  timestamps: true, // Optionally add timestamps for created and updated
  collection: "users" // Explicitly specify the collection name
});

// Create the model from the schema and export it
const User = mongoose.model<IUser>('User', UserSchema);

export { User };
