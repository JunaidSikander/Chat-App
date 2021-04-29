import {makeStyles} from "@material-ui/core";

const joinStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        background: 'linear-gradient(to bottom, #ffffff 0%, #99ccff 100%)'
    },
    contained: {
        backgroundColor: theme.palette.primary.dark,
        padding: '1em 4em',
        borderRadius: '25px',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        }
    },
    rootInput: {
        '& input': {
            padding: '1em 2.5em',
            borderRadius: '25px',
            border: `2px solid ${theme.palette.primary.light}`,

            '&.MuiOutlinedInput-notchedOutline': {
                backgroundColor: 'red',
                color: 'color'
            }
        }
    },
    title: {
        color: theme.palette.primary.main
    },
    gridMargin: {
        marginTop: '2em'
    }
}));

export default joinStyles;