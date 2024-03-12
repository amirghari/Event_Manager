import request from 'supertest';
import express, { Express } from 'express';
import userRouter from '../Routes/userRoute'; // Adjust the import path
import userController from '../Controller/userController'; // Adjust the import path
import { protect } from '../Middleware/authMiddleware'; // Adjust the import path

// Mock the userController and authMiddleware
jest.mock('../Controller/userController', () => ({
  createUser: jest.fn().mockImplementation((req, res) => res.sendStatus(201)),
  loginUser: jest.fn().mockImplementation((req, res) => res.sendStatus(200)),
  addEventToUser: jest.fn().mockImplementation((req, res) => res.sendStatus(200)),
  isEventJoined: jest.fn().mockImplementation((req, res) => res.sendStatus(200)),
  getUsersEventsByName: jest.fn().mockImplementation((req, res) => res.sendStatus(200)),
  getAllUsers: jest.fn().mockImplementation((req, res) => res.sendStatus(200)),
  getUserById: jest.fn().mockImplementation((req, res) => res.sendStatus(200)),
  updateUserById: jest.fn().mockImplementation((req, res) => res.sendStatus(200)),
  deleteUserById: jest.fn().mockImplementation((req, res) => res.sendStatus(204)),
}));

describe('User Router', () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use(userRouter);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('POST /api/createUser calls createUser', async () => {
    await request(app)
      .post('/api/createUser')
      .send({ username: 'testUser', password: 'testPass' });
    expect(userController.createUser).toHaveBeenCalled();
  });

  test('POST /api/loginUser calls loginUser', async () => {
    await request(app)
      .post('/api/loginUser')
      .send({ username: 'testUser', password: 'testPass' });
    expect(userController.loginUser).toHaveBeenCalled();
  });

  test('POST /api/:userName/addEventToUser calls addEventToUser', async () => {
    await request(app)
      .post('/api/testUser/addEventToUser')
      .send({ eventId: '123' });
    expect(userController.addEventToUser).toHaveBeenCalled();
  });

  test('GET /api/:userName/isEventJoined/:eventId calls isEventJoined', async () => {
    await request(app)
      .get('/api/testUser/isEventJoined/123');
    expect(userController.isEventJoined).toHaveBeenCalled();
  });

  test('GET /api/:userName/events calls getUsersEventsByName', async () => {
    await request(app)
      .get('/api/testUser/events');
    expect(userController.getUsersEventsByName).toHaveBeenCalled();
  });

  test('GET /api/getAllUsers calls getAllUsers', async () => {
    await request(app)
      .get('/api/getAllUsers');
    expect(userController.getAllUsers).toHaveBeenCalled();
  });
});