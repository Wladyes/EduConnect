// src/components/TransparentBox.tsx
import React from 'react';
import { Box } from '@mui/material';

interface TransparentBoxProps {
  children: React.ReactNode;
}

const TransparentBox: React.FC<TransparentBoxProps> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco con transparencia
        padding: '20px', // Espaciado interno
        borderRadius: '12px', // Bordes redondeados
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra para dar profundidad
      }}
    >
      {children}
    </Box>
  );
};

export default TransparentBox;