// src/pages/NotFoundPage.tsx
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TransparentBox from '../components/TransparentBox'; // Importa el componente reutilizable

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: '64px', // Espaciado superior para evitar que el contenido sea cubierto por la barra de navegación
        marginBottom: '20px', // Espaciado inferior
        display: 'flex', // Centrar el contenido
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh', // Asegura que el contenido esté centrado verticalmente
      }}
    >
      <TransparentBox>
        <Typography variant="h4" gutterBottom>
          404 - Página No Encontrada
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
        >
          Volver al Inicio
        </Button>
      </TransparentBox>
    </Container>
  );
};

export default NotFoundPage;