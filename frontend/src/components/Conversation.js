import React from 'react';
import {Grid, List, ListItemText, Typography} from "@material-ui/core";
import useStyles from "styles/Conversation.style";

export default function Conversation({message, index, user}) {
    const classes = useStyles();
    const side = message.user.toLowerCase() === user.toLowerCase() ? 'right' : 'left'
    const attachClass = index => {
        if (index === 0) {
            return classes[`${side}First`];
        }
        if (index === message.text.length - 1) {
            return classes[`${side}Last`];
        }
        return "";
    };

    return (
        <Grid item container justify={side === 'left' ? 'flex-start' : 'flex-end'}>
            <Grid item className={classes[`${side}Row`]}>
                <List>
                    <ListItemText
                        className={`${classes.msg} ${classes[side]} ${attachClass(index)}`}
                        classes={{secondary: side === 'right' ? classes.secondaryText : ''}}
                        primary={message.text}
                        secondary={
                            <Typography component='span'>
                                {side === 'left'
                                    ? <Grid item>user: {message.user} </Grid>
                                    : <Grid item style={{color: '#DDD'}}>me</Grid>}
                            </Typography>
                        }/>
                </List>
            </Grid>
        </Grid>
    );
};