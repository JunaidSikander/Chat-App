import {makeStyles} from "@material-ui/core";

const chat = makeStyles(theme => ({
    container: {
        display: 'flex'
    },
    content: {
        display: 'flex',
        flexGrow: 1
    },
    toolbarMargin: {
        marginTop: '3.5em'
    },
    inputContainer: {
        paddingLeft: '1em'
    }
}));

export default chat;