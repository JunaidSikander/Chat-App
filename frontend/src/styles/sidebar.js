import {makeStyles} from "@material-ui/core";

const drawerWidth = 180;

const sidebarStyles =  makeStyles( (theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }
}));

export default sidebarStyles;