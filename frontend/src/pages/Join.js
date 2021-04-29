import React, {useState} from "react";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import useStyles from 'styles/Join.styles'

const Join = () => {
    const classes = useStyles();
    const [state, setState] = useState({name: '', room: ''});

    const handleChange = (event) => setState({...state, [event.target.id]: event.target.value});
    return (
        <Grid container className={classes.root} direction="column"
              justify="center" alignItems="center">
            <Grid item>
                <Typography className={classes.title} gutterBottom variant='h5'>
                    Join Chat App
                </Typography>
            </Grid>
            <Grid item className={classes.gridMargin}>
                <TextField
                    classes={{root: classes.rootInput}}
                    id='name'
                    onChange={handleChange}
                    placeholder='Name'
                    InputProps={{disableUnderline: true}}
                />
            </Grid>
            <Grid item className={classes.gridMargin}>
                <TextField
                    classes={{root: classes.rootInput}}
                    id='room'
                    onChange={handleChange}
                    placeholder='Room'
                    InputProps={{disableUnderline: true}}
                />
            </Grid>
            <Grid item className={classes.gridMargin}>
                <Button classes={{contained: classes.contained}} color='primary' component={Link}
                        onClick={(event => (!state.name || !state.room) ? event.preventDefault() : null)}
                        to={`/chat?name=${state.name}&room=${state.room}`} variant='contained'>
                    Join Chat Room
                </Button>
            </Grid>
        </Grid>
    )
};

export default Join;