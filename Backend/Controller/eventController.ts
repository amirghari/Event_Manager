import { Request, Response, NextFunction } from "express";
import { Event } from "../Models/eventModel";
import { User } from "../Models/userModel";

// Assuming Event and User models are properly typed according to your MongoDB schema

const createEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  console.log(req.body);

  const { Id, Title, Description, Organizer, Location, Date, Time, UserId } = req.body;

  if (!Id || !Title || !Description || !Organizer || !Location || !Date || !Time || !UserId) {
    res.status(400).json({ message: "Please fill in all required fields" });
  }

  try {
    const event = await Event.create({
      Id,
      Title,
      Description,
      Organizer,
      Location,
      Date,
      Time,
      User_id: UserId, // Match the case with your schema
    });

    console.log("Event created", event);

    res.status(201).json({
      message: "Event created successfully",
      event: {
        id: event.Id, // Match the case with your schema
        title: event.Title,
        description: event.Description,
        organizer: event.Organizer,
        location: event.Location,
        date: event.Date,
        time: event.Time,
        user_id: event.User_id, // Match the case with your schema
      }
    });
  } catch (error: any) {
    console.error("Error occurred in adding event data", error);

    // Log validation errors
    if (error.name === "ValidationError") {
      console.error("Validation errors:", error.errors);
    }
    res.status(500).json({ message: "Error occurred in adding event data" });
  }
};



const getAllEvents = async (_req: Request, res: Response): Promise<void> => {
  try {
    const events = await Event.find({});
    console.log("Event data fetched");
    res.status(200).json(events);
  } catch (error) {
    console.error("Error occurred in fetching event data", error);
    res.status(500).json({ message: "Error occurred in fetching event data" });
  }
};

const getEventById = async (req: Request, res: Response): Promise<void> => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }
    console.log("Event data fetched");
    res.status(200).json(event);
  } catch (error) {
    console.error("Error occurred in fetching event data", error);
    res.status(500).json({ message: "Error occurred in fetching event data" });
  }
};

const getEventsByUserId = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const events = await Event.find({ userId: user._id });
    console.log("Event data fetched for user");
    res.status(200).json(events);
  } catch (error) {
    console.error("Error occurred in fetching events for user", error);
    res.status(500).json({ message: "Error occurred in fetching events for user" });
  }
};

const updateEventById = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEvent) {
      res.status(404).json({ message: "Event not found" });
      return;
    }
    console.log("Event data updated");
    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error("Error occurred in updating event data", error);
    res.status(500).json({ message: "Error occurred in updating event data" });
  }
};

const deleteEventById = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      res.status(404).json({ message: "Event not found" });
      return;
    }
    console.log("Event data deleted");
    res.status(200).json(deletedEvent);
  } catch (error) {
    console.error("Error occurred in deleting event data", error);
    res.status(500).json({ message: "Error occurred in deleting event data" });
  }
};

export default {
  createEvent,
  getAllEvents,
  getEventById,
  getEventsByUserId,
  updateEventById,
  deleteEventById,
};
