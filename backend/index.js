import express from "express";
import { PORT, MongoDB_URL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Method 1
app.use(cors());

// Method 2
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));
app.get('/', (req, res) => {
    console.log(req);
    res.status(200).send("Hello World");
});

app.use('/books', booksRoute);

mongoose
    .connect(MongoDB_URL)
    .then(() => {
        console.log("App is connected to MongoDB");
    })
    .catch((error) => {
        console.error(error);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
