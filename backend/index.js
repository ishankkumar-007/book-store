import express, { response } from "express";
import { port, mongoDBURL } from "./configs.js";
import mongoose, { mongo } from "mongoose";
import { Book } from './models/bookModel.js';

const app = express();

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome to THE STORE')
});



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