import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';
import {grey} from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: '#506164'
        },
        secondary: {
            main: '#FFFFFF',
        },
        background: {
            paper: "#101010",
            default: "#1c1c1c",
        },
    },
    shape: {
        borderRadius: 4
    },
    overrides:{
    },
    props: {

    }
});

export default theme;