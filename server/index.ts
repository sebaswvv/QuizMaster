import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import http from 'http';
import { Socket } from 'socket.io';
const cors = require('cors');
import {encode} from 'html-entities';

const QuizRouter = require('./routes/quizroute');
const UserRouter = require('./routes/userroute');

dotenv.config();

const app: Express = express();
const port = 3000;

// set max limit to 1.1mb
app.use(bodyParser.json({ limit: '2mb' }));

// middleware to sanitize user input
app.use((req, res, next) => {
    if (req.body) {
        for (const [key, value] of Object.entries(req.body)) {
          if (typeof value === 'string') {
            req.body[key] = value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
          }
        }
      }
      next();
});


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
io.on('connection', (socket: Socket) => {
    // join/create a room
    socket.on('join', ({roomId, username}) => { 
        //if username is not equal to master, check if the room exists
        if (username !== 'master') {
            const room = io.sockets.adapter.rooms.get(roomId);
            if (room === undefined) {
                socket.emit('error', 'Room does not exist');
                return;
            }
        }
                
        socket.join(roomId);
        socket.to(roomId).emit('joined', username);
    });

    // master sends game start to all clients
    socket.on('start', ({roomId, quizName}) => {
        socket.to(roomId).emit('started', quizName);
    });

    // master sends question to all clients
    socket.on('newQuestion', ({roomId, question}) => {
        socket.to(roomId).emit('newQuestion', question);
    });

    // client sends answer to master
    socket.on('newAnswer', ({roomId, answer}) => {
        socket.to(roomId).emit('newAnswer', answer);
    });

    // master sends answer to all clients
    socket.on('answer', ({roomId, username, answer}) => {
        socket.to(roomId).emit('answer', {username, answer});
    });

    socket.on('end', ({roomId}) => {
        socket.to(roomId).emit('end');
    });
});
  

// start server
server.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
