// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main', // Color principal del tema
        color: 'white', // Color del texto
        textAlign: 'center',
        padding: '10px 0', // Espaciado interno
        position: 'fixed', // Fija el footer en la parte inferior
        bottom: 0, // Posición en la parte inferior
        width: '100%', // Asegura que ocupe todo el ancho de la pantalla
        zIndex: 1200, // Asegura que esté por encima de otros elementos si es necesario
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} EduConnect. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;