import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import UserController from '../Controller/userController';
import { User } from '../Models/userModel';

// Mocking external dependencies
jest.mock('../Models/userModel');

// Mock jwt.sign
jest.mock('jsonwebtoken', () => ({
  sign: jest.fn((payload: any, secretOrPrivateKey: any, options: any) => {
    return 'mockToken'; // Replace with your desired mock token
  }),
}));

describe('UserController', () => {
  let req: Request;
  let res: Response;

  beforeEach(() => {
    req = {} as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  

  describe('createUser', () => {
    it('should create a new user', async () => {
      req.body = {
        username: 'testuser',
        password: 'testpassword',
        firstname: 'John',
        lastname: 'Doe',
        email: 'test@example.com',
      };

      const mockUser = {
        _id: 'mockUserId',
        username: 'testuser',
        firstname: 'John',
      };

      // Provide type annotations for mocks
      (User.findOne as jest.Mock).mockResolvedValue(null);
      (User.create as jest.Mock).mockResolvedValue(mockUser);
      (jwt.sign as jest.Mock).mockReturnValue('mockToken');

      await UserController.createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        _id: 'mockUserId',
        username: 'testuser',
        firstname: 'John',
        token: 'mockToken',
      });
    });

    it('should handle error during user creation', async () => {
      req.body = {
        username: 'testuser',
        password: 'testpassword',
        firstname: 'John',
        lastname: 'Doe',
        email: 'test@example.com',
      };

      // Provide type annotations for mocks
      (User.findOne as jest.Mock).mockResolvedValue(null);
      (User.create as jest.Mock).mockRejectedValue(new Error('Mock error'));

      await UserController.createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Error occurred in adding user data',
      });
    });

    it('should handle existing email during user creation', async () => {
      req.body = {
        username: 'testuser',
        password: 'testpassword',
        firstname: 'John',
        lastname: 'Doe',
        email: 'test@example.com',
      };

      // Provide type annotations for mocks
      (User.findOne as jest.Mock).mockResolvedValue({ email: 'test@example.com' });

      await UserController.createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Email already exists',
      });
    });
  });

  // ... (other tests)
});
