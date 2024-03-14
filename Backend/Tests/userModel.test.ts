import mongoose from 'mongoose';
import { User } from '../Models/userModel';

declare module 'mongoose' {
  interface ConnectOptions {
    useUnifiedTopology?: boolean;
  }
}

describe('User Model', () => {
  beforeAll(async () => {
   
    await mongoose.connect('mongodb+srv://wondomen2:test123456@cluster0.cdwpqvf.mongodb.net/?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
   
    await mongoose.disconnect();
  });

  beforeEach(async () => {
   
    await User.deleteMany({});
  });

  it('should create a new user', async () => {
    const userData = {
      username: 'testuser',
      password: 'testpassword',
      firstname: 'John',
      lastname: 'Doe',
      email: 'test@example.com',
      events: [
        {
          Id: 1,
          Title: 'Test Event',
          Description: 'Description of the test event',
          Organizer: 'Test Organizer',
          Location: 'Test Location',
          Date: '2024-01-01',
          Time: '12:00 PM',
          Image: 'event.jpg',
        },
      ],
    };

    const user = new User(userData);
    await user.save();

    const savedUser = await User.findOne({ username: 'testuser' });
    expect(savedUser).toBeDefined();
    expect(savedUser!.username).toBe('testuser');
    expect(savedUser!.events).toHaveLength(1);
    expect(savedUser!.events[0].Title).toBe('Test Event');
  });

 
});
