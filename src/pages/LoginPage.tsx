// src/pages/LoginPage.tsx
// src/pages/LoginPage.tsx

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Alert, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import TransparentBox from '../components/TransparentBox';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) => user.email === email);

    if (!user) {
      setError('El correo electrónico no está registrado.');
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      setError('La contraseña es incorrecta.');
      return;
    }

    login(user);

    if (user.role === 'administrador') {
      navigate('/admin');
    } else if (user.role === 'publicador') {
      navigate('/posts');
    } else {
      navigate('/');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '64px', marginBottom: '20px' }}>
      <TransparentBox>
        <Typography variant="h4" gutterBottom>
          Iniciar Sesión
        </Typography>
        {error && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {error}
          </Alert>
        )}
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField
            label="Correo Electrónico"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" size="large" onClick={handleLogin}>
            Iniciar Sesión
          </Button>
        </Box>
      </TransparentBox>
    </Container>
  );
};

export default LoginPage;