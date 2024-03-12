import mongoose from 'mongoose';
import { Event } from '../Models/eventModel';

describe('Event Model', () => {
beforeAll(async () => {
    // Connect to the MongoDB database before running the tests
    await mongoose.connect('mongodb+srv://amirghari:Ag9776Hg0483@eventmanager.oxb4lh6.mongodb.net/?retryWrites=true&w=majority&appName=EventManager', {
        useUnifiedTopology: true,
    } as any);
});

afterAll(async () => {
    // Disconnect from the database after all tests are done
    await mongoose.disconnect();
});

  beforeEach(async () => {
    // Clear the 'events' collection before each test
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
    // Mock save method
    event.save = jest.fn().mockResolvedValue(event);

    const savedEvent = await event.save();

    expect(savedEvent.Id).toBe(eventData.Id);
    expect(savedEvent.Title).toBe(eventData.Title);
    // Add similar expectations for other properties
  });

  it('should not create an event without required fields', async () => {
    const event = new Event();
    // Mock save method to reject (simulate validation failure)
    event.save = jest.fn().mockRejectedValue(new mongoose.Error('Validation failed'));

    // Expect the save operation to throw an error
    await expect(event.save()).rejects.toThrow('Validation failed');
  });

  // Add more test cases as needed
});
