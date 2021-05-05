import React from 'react'
import clsx from "clsx";
import useStyles from 'styles/sidebar'
import {Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";

export default function Sidebar({users}) {
    console.log(users, 'users')
    const classes = useStyles();
    return (
        <Drawer variant='permanent'
                className={clsx(classes.drawer, classes.drawerOpen)}
                classes={{paper: clsx(classes.drawerOpen)}}>
            <div className={classes.toolbarMargin}/>
            <List>
                <Typography align='center' variant='h5'>Users</Typography>
                {users.length > 0 &&
                users.map((user, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon><Avatar alt={user.name[0]} src='/'/></ListItemIcon>
                        <ListItemText primary={user.name} secondary={user.room}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}