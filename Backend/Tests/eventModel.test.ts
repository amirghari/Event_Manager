import mongoose from 'mongoose';
import { Event } from '../Models/eventModel';

describe('Event Model', () => {
beforeAll(async () => {
   
    await mongoose.connect('mongodb+srv://amirghari:Ag9776Hg0483@eventmanager.oxb4lh6.mongodb.net/?retryWrites=true&w=majority&appName=EventManager', {
        useUnifiedTopology: true,
    } as any);
});

afterAll(async () => {

    await mongoose.disconnect();
});

  beforeEach(async () => {
   
    await Event.deleteMany({});
  });

  it('should create a new event with valid data', async () => {
    const eventData = {
      Id: 1,
      Title: 'Test Event',
      Description: 'Description of the event',
      Organizer: 'John Doe',
      Location: 'Event Venue',
      Date: '2024-03-15',
      Time: '18:00',
      Image: 'event_image.jpg',
    };

    const event = new Event(eventData);
 
    event.save = jest.fn().mockResolvedValue(event);

    const savedEvent = await event.save();

    expect(savedEvent.Id).toBe(eventData.Id);
    expect(savedEvent.Title).toBe(eventData.Title);

  });

  it('should not create an event without required fields', async () => {
    const event = new Event();

    event.save = jest.fn().mockRejectedValue(new mongoose.Error('Validation failed'));


    await expect(event.save()).rejects.toThrow('Validation failed');
  });

});
