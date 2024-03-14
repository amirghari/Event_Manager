import { Request, Response } from 'express';
import eventController from '../Controller/eventController'; // Update the path as needed
import { Event } from '../Models/eventModel';


jest.mock('../Models/eventModel');
jest.mock('../Models/userModel');

describe('Event Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createEvent', () => {
    it('should create a new event', async () => {
      const req: Partial<Request> = {
        body: {
          Id: '123',
          Title: 'Sample Event',
          Description: 'Event description',
          Organizer: 'Organizer Name',
          Location: 'Event Location',
          Date: '2024-03-12',
          Time: '18:00',
          Image: 'sample-image.jpg',
        },
      };
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      (Event.create as jest.Mock).mockResolvedValueOnce({
        _id: '456',
        ...req.body,
      });

      await eventController.createEvent(req as Request, res as Response);

      expect(Event.create).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        _id: '456',
        ...req.body,
      });
    });

    it('should handle validation errors', async () => {
      const req: Partial<Request> = {
        body: {
        },
      };
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await eventController.createEvent(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Please fill in all required fields',
      });
    });

    it('should handle errors during event creation', async () => {
      const req: Partial<Request> = {
        body: {
        },
      };
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      (Event.create as jest.Mock).mockRejectedValueOnce(new Error('Database error'));

      await eventController.createEvent(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Please fill in all required fields',
      });
    });
  });


});
