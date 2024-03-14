import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { connectToMongoDB } from './Config/db';
import { PORT } from './Utils/config';

import userRoute from './Routes/userRoute';
import eventRoute from './Routes/eventRoute';

const app: Express = express();

app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: false }));

connectToMongoDB();

app.get("/", (req: Request, res: Response): void => {
  res.send("API is running...");
});

app.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`);
});

app.use('/', eventRoute);
app.use('/', userRoute);
