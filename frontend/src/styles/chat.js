import {makeStyles} from "@material-ui/core";

const chat = makeStyles(theme => ({
    container: {
        display: 'flex',
        height: '100vh'
    },
    content: {
        display: 'flex',
        flexGrow: 1
    },
    toolbarMargin: {
        marginTop: '3em'
    },
    inputContainer: {
        paddingLeft: '1em'
    }
}));

export default chat;