import React, {useEffect, useState} from "react";
import io from 'socket.io-client'
import queryString from "query-string";

let socket;

const Chat = ({location, state, setState}) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const ENDPOINT = 'localhost:3131'


    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        socket.emit('join', {name, room}, ({ error }) =>{});

        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);

        })
    },[messages])

    //Send Messages
    const sendMessage = () => console.log('Send Messages');

    return (<h1>Chat</h1>)
};

export default Chat;