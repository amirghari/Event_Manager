const mongoose = require('mongoose');
const config = require('../utils/config');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log(`Connected to the database`);
};

module.exports = connectDB;