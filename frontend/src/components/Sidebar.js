import React from 'react'
import clsx from "clsx";
import useStyles from 'styles/sidebar'
import {Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import queryString from "query-string";
import {useLocation} from "react-router-dom";

export default function Sidebar({users}) {
    const classes = useStyles();
    const location = useLocation();
    const {name} = queryString.parse(location.search);

    return (
        <Drawer variant='permanent'
                className={clsx(classes.drawer, classes.drawerOpen)}
                classes={{paper: clsx(classes.drawerOpen)}}>
            <div className={classes.toolbarMargin}/>
            <List>
                <Typography align='center' className={classes.main_title}>USERS</Typography>
                {users.length > 0 &&
                users.map((user, index) => (
                    <ListItem button key={index} selected={user.name === name.toLowerCase()}>
                        <ListItemIcon><Avatar alt={user.name[0]} src='/'/></ListItemIcon>
                        <ListItemText primary={user.name} secondary={user.room}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}