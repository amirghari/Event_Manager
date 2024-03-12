import express from "express";
import eventController from "../Controller/eventController";
//import { protect } from "../Middleware/authMiddleware";

const eventRouter = express.Router();

eventRouter.post("/api/createEvent", eventController.createEvent);
eventRouter.get("/api/getAllEvents", eventController.getAllEvents);
eventRouter.get("/api/getEventById/:id",eventController.getEventById);
eventRouter.put(
  "/api/updateEventById/:id",
  // protect,
  eventController.updateEventById
);
eventRouter.delete(
  "/api/deleteEventById/:id",
  // protect,
  eventController.deleteEventById
);

export default eventRouter;
