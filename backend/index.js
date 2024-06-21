import express, { response } from "express";
import { port, mongoDBURL } from "./configs.js";
import mongoose, { mongo } from "mongoose";
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing req body
app.use(express.json());

// Middleware for handling CORS POLICY
// // Option 1: Allow All Origins wiht defautl of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins   
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-type'],
//     })
// );

// app.get('/', (req, res) => {
//     console.log(req)
//     return res.status(234).send('Welcome to THE STORE')
// });

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(port, () => {
            console.log(`App is listening to port: ${port}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });