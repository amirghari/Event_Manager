import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface DecodedUser {
  id: string;
  // Include other properties decoded from the token as necessary
}

// Extending Express's Request type to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: DecodedUser;
    }
  }
}

const protect = async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization === undefined) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedUser;
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export { protect };
