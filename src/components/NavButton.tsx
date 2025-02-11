// src/components/NavButton.tsx
import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface NavButtonProps {
  children: string; // Texto del botón
  to: string; // Ruta a la que redirige el botón
  icon?: React.ReactElement; // Ícono opcional para el botón
  onClick?: () => void; // Función opcional para manejar clics
}

const NavButton: React.FC<NavButtonProps> = ({ to, children, icon, onClick }) => {
  return (
    <Button
      color="inherit"
      component={Link}
      to={to}
      onClick={onClick}
      startIcon={icon} // Aquí se pasa el ícono al botón
      sx={{
        '&:hover': {
          backgroundColor: '#4B0082', // Fondo índigo al pasar el mouse
          color: '#fff', // Texto blanco
        },
        textTransform: 'none', // Evita que el texto esté en mayúsculas
      }}
    >
      {children}
    </Button>
  );
};

export default NavButton;