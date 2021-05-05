import React, {useEffect, useState} from "react";
import io from 'socket.io-client'
import queryString from "query-string";
import useStyles from 'styles/Chat.styles'
import {AppBar, FormControl, Grid, IconButton, Input, InputAdornment, Toolbar, Typography} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import CancelIcon from '@material-ui/icons/Cancel';
import Conversation from "components/Conversation";

let socket;

const Chat = ({history, location, state, setState}) => {
    const classes = useStyles();
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://localhost:3131/'


    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        setState({...state, name, room});

        socket = io(ENDPOINT);

        socket.emit('join', {name, room}, (error) => {
            if(error){
                alert(error)
                history.push('/');
            }
        });

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        });

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });
    }, [])

    //Send Messages
    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <Grid container>
            <Grid item>
                <AppBar position='fixed'>
                    <Toolbar variant='dense'>
                        <Grid item container justify='space-between' alignItems='center'>
                            <Grid item>
                                <Typography className={classes.header} variant='h6'>
                                    {state.room}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton className={classes.header}
                                            onClick={() => {
                                                history.goBack();
                                                setState({name: '', room: ''});
                                            }}>
                                    <CancelIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <div style={{margin: '3em'}}/>
            </Grid>
            <Grid item container>
                {messages.map((message, index) => <Conversation key={index} index={index} user={state.name} message={message}/>)}
            </Grid>
                <Grid item container style={{paddingLeft: '1em'}}>
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
    )
};

export default Chat;