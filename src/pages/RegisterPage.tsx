// src/pages/RegisterPage.tsx
// src/pages/RegisterPage.tsx

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, MenuItem, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import TransparentBox from '../components/TransparentBox';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState(''); // Cambia 'username' por 'name'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Publicador');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidAdminEmail = (email: string) => {
    const adminEmailRegex = /^admin\d+@educonnect$/;
    return adminEmailRegex.test(email);
  };

  const isValidPassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    let hasError = false;

    if (!name) {
      setNameError('El nombre de usuario es obligatorio.');
      hasError = true;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('El correo electrónico es obligatorio.');
      hasError = true;
    } else if (!isValidEmail(email) && !isValidAdminEmail(email)) {
      setEmailError('El correo electrónico no es válido.');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('La contraseña es obligatoria.');
      hasError = true;
    } else if (!isValidPassword(password)) {
      setPasswordError('Debe incluir una letra, un número y un carácter especial.');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (role === 'Administrador' && !isValidAdminEmail(email)) {
      setError('Rol restringido: Usted no tiene credenciales de EduConnect.');
      setRole('Publicador');
      hasError = true;
    } else {
      setError('');
    }

    if (hasError) return;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: Date.now().toString(), // Asigna un ID único
      name, // Asegúrate de usar 'name' en lugar de 'username'
      email,
      password: hashedPassword,
      role: role.toLowerCase(), // Almacena el rol en minúsculas para consistencia
      createdAt: new Date().toISOString(),
    };

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some((user: any) => user.email === email)) {
      setError('El correo electrónico ya está registrado.');
      return;
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    setSuccess(true);
    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '64px', marginBottom: '20px' }}>
      <TransparentBox>
        <Typography variant="h4" gutterBottom>
          Registro de Usuario
        </Typography>
        {error && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ marginBottom: 2 }}>
            Registro exitoso. Redirigiendo...
          </Alert>
        )}

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="Nombre de Usuario"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!nameError}
            helperText={nameError}
            required
          />
          <TextField
            label="Correo Electrónico"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
            required
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
            required
          />
          <TextField
            select
            label="Rol"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            fullWidth
          >
            <MenuItem value="Publicador">Publicador</MenuItem>
            <MenuItem value="Administrador">Administrador</MenuItem>
          </TextField>
          <Button variant="contained" color="primary" size="large" onClick={handleRegister}>
            Registrarse
          </Button>
        </Box>
      </TransparentBox>
    </Container>
  );
};

export default RegisterPage;