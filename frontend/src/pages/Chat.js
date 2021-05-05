import React, {useEffect, useState} from "react";
import io from 'socket.io-client'
import queryString from "query-string";
import useStyles from 'styles/chat'
import {FormControl, Grid, Hidden, IconButton, Input, InputAdornment} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import {Conversation, Header, Sidebar} from "components";

let socket;

const Chat = ({history, location, state, setState}) => {
    const classes = useStyles();
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://localhost:3131/';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        setState({...state, name, room});

        socket = io(ENDPOINT);

        socket.emit('join', {name, room}, (error) => {
            if (error) {
                alert(error)
                history.push('/');
            }
        });

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        });

        socket.on('roomData', ({users}) => {
            setUsers(users);
        });
    }, [])

    //Send Messages
    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className={classes.container}>
            <Header/>
            <Hidden xsDown>
                <Sidebar users={users}/>
            </Hidden>
            <div className={classes.content}>
                <Grid container className={classes.toolbarMargin}>
                    <Grid item container>
                        {messages.map((message, index) =>
                            <Conversation key={index} index={index} user={state.name} message={message}/>)}
                    </Grid>
                    <Grid item container className={classes.inputContainer}>
                        <FormControl fullWidth variant='filled'>
                            <Input
                                id="message"
                                type='text'
                                placeholder='Type Message'
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                                value={message}
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton onClick={(event => sendMessage(event))}>
                                            <SendIcon/>
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
};

export default Chat;