import express, { response } from "express";
import { port } from "./config.js"

const app = express();

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome to THE STORE')
});

app.listen(port, () => {
    console.log(`App is listening to port: ${port}`)
});