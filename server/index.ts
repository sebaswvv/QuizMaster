import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import http from 'http';
import { Socket } from 'socket.io';
const cors = require('cors');

const QuizRouter = require('./routes/quizroute');
const UserRouter = require('./routes/userroute');

dotenv.config();

const app: Express = express();
const port = 3000;

// set max limit to 1.1mb
app.use(bodyParser.json({ limit: '2mb' }));

// use JSON
app.use(express.json());

// use cors
app.use(cors());

// set routes
app.use('/api/users', UserRouter);
app.use('/api/quizzes', QuizRouter);

// create http server
const server = http.createServer(app);

// initialize socket.io
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    },
});

// handle socket connections
// io.on('connection', (socket: Socket) => {
//     console.log(`A new socket connection has been established with id: ${socket.id}`);
  
//     socket.on('join', (roomId: string) => {
//       socket.join(roomId);
//       console.log(`User with socket id ${socket.id} joined room ${roomId}`);
//     });
  
//     socket.on('answer', (roomId: string, answer: string) => {
//       console.log(`submitted answer ${answer} in room ${roomId}`);
//     });
//   });
  

// start server
server.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
