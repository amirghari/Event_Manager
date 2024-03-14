import request from 'supertest';
import express, { Express } from 'express';
import eventRouter from '../Routes/eventRoute';
import eventController from '../Controller/eventController';


jest.mock('../Controller/eventController', () => ({
  createEvent: jest.fn((req, res) => res.sendStatus(201)),
  getAllEvents: jest.fn((req, res) => res.sendStatus(200)),
  getEventById: jest.fn((req, res) => res.sendStatus(200)),
  updateEventById: jest.fn((req, res) => res.sendStatus(200)),
  deleteEventById: jest.fn((req, res) => res.sendStatus(204)),
}));

describe('Event Router', () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use(eventRouter);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('POST /api/createEvent calls createEvent with request body', async () => {
    const eventData = { name: 'New Event', date: '2023-01-01' };
    await request(app)
      .post('/api/createEvent')
      .send(eventData);
    expect(eventController.createEvent).toHaveBeenCalled();
  });

  test('GET /api/getAllEvents calls getAllEvents', async () => {
    await request(app).get('/api/getAllEvents');
    expect(eventController.getAllEvents).toHaveBeenCalled();
  });

  test('GET /api/getEventById/:id calls getEventById with correct id', async () => {
    const testId = '123';
    await request(app).get(`/api/getEventById/${testId}`);
    expect(eventController.getEventById).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.anything());
  });

  test('PUT /api/updateEventById/:id calls updateEventById with correct id and body', async () => {
    const testId = '123';
    const updateData = { name: 'Updated Event', date: '2023-01-02' };
    await request(app)
      .put(`/api/updateEventById/${testId}`)
      .send(updateData);
    expect(eventController.updateEventById).toHaveBeenCalled();
  });

  test('DELETE /api/deleteEventById/:id calls deleteEventById with correct id', async () => {
    const testId = '123';
    await request(app).delete(`/api/deleteEventById/${testId}`);
    expect(eventController.deleteEventById).toHaveBeenCalled();
  });
});