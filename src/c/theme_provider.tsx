import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Checkbox from '@mui/material/Checkbox';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import {orange} from '@mui/material/colors';


const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: "#101010",
            default: "#1c1c1c",
        },
    },

    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        allVariants: {
            color: '#FFF'
        }
    },

    shape: {
        borderRadius: 2
    },

});


const AppThemeProvider: NextPage = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default AppThemeProvider;



