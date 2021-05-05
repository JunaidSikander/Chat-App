import express from 'express';
import { createServer } from 'http'
import { Server } from 'socket.io'
import { addUser, removeUser, getUser, getUsersInRoom } from './utils/users.js'

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});
const port = process.env.PORT || 3131;

//Root Route
app.get('/', (req, res) => res.send('Server Chat Api').status(200));

//Initialize Socket Connection
io.on('connect', ((socket) => {
    console.log('Connection Established');

    //Receive an event
    socket.on('join', ({ name, room }, callback) => {
        //Adding User
        const { error, user } = addUser({id: socket.id, name, room})

        //Return Callback with an error if occurs
        if(error) return callback(error);

        //User Joining Room
        socket.join(user.room);

        //Welcome new enrolled user
        socket.emit('message',
            {user: 'admin', text: `${user.name}, welcome to room ${user.room}`});

        //Send Message Trigger to every one except new user who had joined
         socket.broadcast.to(user.room).emit('message',
             {user: 'admin', text: `${user.name} has joined!`});


        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    });

    // Listen sentMessage Event from frontend
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        console.log(user, 'SERVER');

        //send event message to a particular room
        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    });

    // When User Disconnect from Socket
    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if(user) {
            io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
        }
    });
}))

httpServer .listen(port, () => console.log(`Server is up on PORT ${port}`))