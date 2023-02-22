import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const ProductRouter = require('./routes/testroute');
const UserRouter = require('./routes/userroute');

dotenv.config();

const app: Express = express();
const port = 3000;

// use JSON
app.use(express.json());

// set routes
app.use('/api/users', UserRouter);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    //console.log(encryptPassword("admin"));
});

// const bcrypt = require('bcrypt');
// const salt = process.env.SALT;

// function encryptPassword(password: string) {
//     const hash = bcrypt.hashSync(password, salt);

//     return hash;
// }