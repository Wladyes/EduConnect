// src/themes.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#1976d2', // Azul principal
    },
    secondary: {
        main: '#4B0082', // Azul índigo
    },
    background: {
      default: '#F5F5F5', // Fondo claro
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;