import {makeStyles} from "@material-ui/core";


const conversationStyle = makeStyles(theme => ({
    bubble: {
        border: "0.5px solid black",
        borderRadius: "10px",
        margin: "0.5rem",
        padding: "1rem",
        display: "inline-block"
    },
    msg: {
        padding: theme.spacing(1, 2),
        borderRadius: 4,
        margin: '.5rem',
        display: "inline-block",
        wordBreak: "break-all",
        fontFamily:
        // eslint-disable-next-line max-len
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    left: {
        borderTopRightRadius: theme.spacing(2.5),
        borderBottomRightRadius: theme.spacing(2.5),
        backgroundColor: theme.palette.grey[100],
        textAlign: "left"
    },
    leftFirst: {
        borderTopLeftRadius: theme.spacing(2.5)
    },
    leftLast: {
        borderBottomLeftRadius: theme.spacing(2.5)
    },
    rightRow: {
        textAlign: "right"
    },
    right: {
        borderTopLeftRadius: theme.spacing(2.5),
        borderBottomLeftRadius: theme.spacing(2.5),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white
    },
    rightFirst: {
        borderTopRightRadius: theme.spacing(2.5)
    },
    rightLast: {
        borderBottomRightRadius: theme.spacing(2.5)
    }
}));

export default conversationStyle;