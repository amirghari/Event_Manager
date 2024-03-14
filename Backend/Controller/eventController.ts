import { Request, Response } from "express";
import { Event } from "../Models/eventModel";
import { User } from "../Models/userModel";


const createEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { Id, Title, Description, Organizer, Location, Date, Time, Image } = req.body;

    if (!Id || !Title || !Description || !Organizer || !Location || !Date || !Time) {
      res.status(400).json({ message: "Please fill in all required fields" });
      return;
    }

    const event = await Event.create({
      Id,
      Title,
      Description,
      Organizer,
      Location,
      Date,
      Time,
      Image, 
    });

    console.log("Event data added");
    res.status(201).json(event);
  } catch (error) {
    console.error("Error occurred in adding event data", error);
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
