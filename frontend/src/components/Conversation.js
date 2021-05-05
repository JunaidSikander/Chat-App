import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import useStyles from "styles/Conversation.style";

export default function Conversation ({message, index, user}) {
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
        <Grid item container justify={side === 'left' ? 'flex-start' : 'flex-end'}
              style={{backgroundColor: ''}}>
            <Grid item className={classes[`${side}Row`]}>
                <Typography align={"left"}
                            className={`${classes.msg} ${classes[side]} ${attachClass(index)}`}>
                    {message.text}
                </Typography>
            </Grid>
        </Grid>
    );
};