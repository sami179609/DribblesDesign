import { createTheme } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';

const theme = createTheme({
  palette: {
    primary: grey,
  },
  typography: {
    fontFamily: 'sans-serif',
    fontWeight:600,
    h1: {
      fontSize: 23,
      fontWeight: '600',
      fontFamily: 'Roboto',
    },
    h2: {
      fontSize: 17,
      letterSpacing: '',
    },
    h3: {
      fontSize: 16,
    },
    h4: {
      fontSize: 14,
    },
    subtitle1: {
      fontSize: 14,
      fontFamily: 'Roboto',
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 500,
      fontFamily: 'Roboto',
    },
  },
});

export default theme;