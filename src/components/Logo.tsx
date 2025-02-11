// src/components/Logo.tsx
import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logo: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Redirige a la página de inicio
  };

  return (
    <Box
      component="img"
      src="./images/logo.jpg" // Ruta del logotipo
      alt="EduConnect Logo"
      onClick={handleClick} // Redirige al hacer clic
      sx={{
        height: 50, // Altura del logotipo
        marginRight: 2, // Espaciado a la derecha
        cursor: 'pointer', // Cambia el cursor a "puntero" para indicar que es clicable
      }}
    />
  );
};

export default Logo;