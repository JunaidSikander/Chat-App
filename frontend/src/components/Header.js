import React from 'react'
import useStyles from 'styles/header'
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useHistory} from "react-router-dom";

export default function Header() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <>
            <AppBar position='fixed' className={classes.appbar}>
                <Toolbar variant='dense' disableGutters>
                    <Grid item container justify='space-between' alignItems='center'
                          style={{paddingLeft: '1em', paddingRight: '1em'}}>
                        <Grid item>
                            <Typography variant='h6'>
                                Room
                            </Typography>
                        </Grid>
                        <Grid item>
                            <IconButton className={classes.header} onClick={() => history.push('/')}>
                                <ExitToAppIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin}/>
        </>
    )
};