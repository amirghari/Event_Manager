require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
//const swaggerUi = require('swagger-ui-express');
//const swaggerSpec = require('./config/swaggerConfig.js');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const customMiddleware = require('./middleware/customMiddleware');

const port = process.env.PORT || 5001;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(customMiddleware.reqLogger);

app.use('/api/events', eventRoutes);

//app.use('/images', express.static('images'));

app.use('/api/users', userRoutes);

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(customMiddleware.unknownEndpoint);

app.use(customMiddleware.errorHandler);

module.exports = app;