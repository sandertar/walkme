import { red } from '@mui/material/colors';
import { ThemeOptions, createTheme } from '@mui/material/styles';

import defaultTheme from './defaultTheme';
import ButtonBaseStyles from './components/ButtonBase';
import ButtonStyles from './components/Button';
import grey from './palettes/grey';

// Default shadow for MuiMenu before we have proper shadow tokens
const shadows: ThemeOptions['shadows'] = [...defaultTheme.shadows];
shadows[8] = `
  0px 2px 4px rgba(18, 18, 18, 0.02),
  0px 4px 8px rgba(18, 18, 18, 0.03),
  0px 8px 24px rgba(18, 18, 18, 0.04),
  0px 32px 80px rgba(18, 18, 18, 0.08)
`;

export const lightTheme = createTheme({
  shadows,
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
    overline: {
      fontSize: '0.625rem',
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#5cf6c0',
    },
    error: {
      main: red.A400,
      light: '#FCEBEC',
    },
    background: {
      default: '#F7F8FA',
      paper: '#FFF',
    },
    action: {
      hover: '#F7F8FA',
    },
    grey: grey,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: ButtonBaseStyles,
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: ButtonStyles,
    },
  },
});
