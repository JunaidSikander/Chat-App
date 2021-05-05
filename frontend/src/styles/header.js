import {makeStyles} from "@material-ui/core";

const header =  makeStyles( (theme) => ({
    appbar: {
        zIndex: theme.zIndex.modal + 1
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '1em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '0.5em',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '0.1em',
        },
    },
    header: {
        color: '#FFF'
    }
}));

export default header;