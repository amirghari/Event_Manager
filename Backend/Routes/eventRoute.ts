import express from "express";
import eventController from "../Controller/eventController";
import { protect } from "../Middleware/authMiddleware";

const eventRouter = express.Router();

eventRouter.post("/api/createEvent", protect, eventController.createEvent);
eventRouter.get("/api/getAllEvents", protect, eventController.getAllEvents);
eventRouter.get("/api/getEventById/:id", protect, eventController.getEventById);
eventRouter.put(
  "/api/updateEventById/:id",
  protect,
  eventController.updateEventById
);
eventRouter.delete(
  "/api/deleteEventById/:id",
  protect,
  eventController.deleteEventById
);

export default eventRouter;
