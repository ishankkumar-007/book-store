import express, { response } from "express";
import { port, mongoDBURL } from "./configs.js";
import mongoose, { mongo } from "mongoose";
import { Book } from './models/bookModel.js';

const app = express();

// Middleware for parsing req body
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome to THE STORE')
});

// route to save a new book
app.post('/books', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };

        const book = await Book.create(newBook);

        return res.status(201).send(book);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
});

// route to get all books from database
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
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