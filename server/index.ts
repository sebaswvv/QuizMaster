import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const cors = require('cors');

const QuizRouter = require('./routes/quizroute');
const UserRouter = require('./routes/userroute');

dotenv.config();

const app: Express = express();
const port = 3000;

// use JSON
app.use(express.json());

// use cors
app.use(cors());

// set routes
app.use('/api/users', UserRouter);
app.use('/api/quizzes', QuizRouter);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    //console.log(encryptPassword("admin"));
});
