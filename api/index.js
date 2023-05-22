import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import users from './routes/users.js';
import auth from './routes/auth.js';
import rooms from './routes/rooms.js';
import hotels from './routes/hotels.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
dotenv.config();

const connect = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to mongoDB')
    }catch(e) {
        throw e;
    }
};

mongoose.connection.on('disconnect', () => {
    console.log('mongoose disconnected!');
});

mongoose.connection.on('connect', () => {
    console.log('mongoose connected!');
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', auth);
app.use('/api/hotels', hotels);
app.use('/api/rooms', rooms);
app.use('/api/users', users);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});


app.listen(3333, () => {
  connect();
  console.log("running server on port 3333");
});
