import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const ProductRouter = require('./routes/testroute');

dotenv.config();

const app: Express = express();
const port = 3000;

// use JSON
app.use(express.json());

// set routes
app.use('/api/tests', ProductRouter);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});