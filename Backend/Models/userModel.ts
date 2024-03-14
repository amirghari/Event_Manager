import mongoose, { Schema, Document } from "mongoose";

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

interface IUser extends Document {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  events: Event[]; 
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true }, 
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true }, 
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
  timestamps: true,
  collection: "users" 
});

const User = mongoose.model<IUser>('User', UserSchema);

export { User };
