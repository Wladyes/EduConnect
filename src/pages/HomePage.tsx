// src/pages/HomePage.tsx
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TransparentBox from '../components/TransparentBox'; // Importa el componente reutilizable

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: 'center',
        marginTop: '64px', // Espaciado para evitar que el texto sea cubierto por la barra de navegación
        marginBottom: '20px', // Espaciado inferior
      }}
    >
      <TransparentBox>
        {/* Título de bienvenida */}
        <Typography variant="h3" component="h1" gutterBottom>
          Bienvenido a EduConnect
        </Typography>

        {/* Descripción breve */}
        <Typography variant="h5" component="p" gutterBottom>
          La red social académica para estudiantes y docentes. Comparte publicaciones, comenta ideas y colabora en un entorno educativo dinámico.
        </Typography>

        {/* Botones de navegación */}
        <Box sx={{ marginTop: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ marginRight: 2 }}
            onClick={() => navigate('/about')}
          >
            Acerca de
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            onClick={() => navigate('/posts')}
          >
            Ver Publicaciones
          </Button>
        </Box>
      </TransparentBox>
    </Container>
  );
};

export default HomePage;