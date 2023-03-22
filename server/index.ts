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
//     // master creates roomId client side and joins the room. other clients follow and join the room
//     socket.on('join', (data) => {
//         const [room, userName] = data.split(',');
//         socket.join(room);
//         socket.to(room).emit('joined', userName);
//     })

//     // master sends game start to all clients
//     socket.on('game-start', (data: any) => {
//         const [room] = data.split(',');
//         socket.to(room).emit('game-start', 'Game has started');
//     });

//     // master sends question to all clients
//     socket.on('question', (data: any) => {
//         const [room, question] = data.split(',');
//         socket.to(room).emit('question', question);
//     });

//     // master sends answer to all clients
//     socket.on('answer', (data: any) => {
//         const [room, answer] = data.split(',');
//         socket.to(room).emit('answer', answer);
//     });
// });
  

// start server
server.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
