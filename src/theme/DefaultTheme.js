/**
 * Default Theme
 * This is the default applicable theme
 */
import colors from '../assest/styles/colors.scss';
import {createTheme} from "@mui/material";

const DefaultTheme = createTheme({
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        },
        btnColor: {
            white: colors.btnColorWhite,
            black: colors.btnColorBlack,
        },
        subText: {
            main: colors.subText
        }
    },
    typography: {
        "fontFamily": `"Montserrat", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        button: {
            textTransform: 'none'
        },
        AppBar: {}
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: colors.secondary,
                }
            }
        }
    }
});

export default DefaultTheme;
