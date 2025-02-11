// src/pages/ProfilePage.tsx
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Avatar, Alert } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import TransparentBox from '../components/TransparentBox';

const ProfilePage: React.FC = () => {
  const { user, updateUser } = useAuth(); // Obtenemos el usuario autenticado y la función para actualizarlo
  const [name, setName] = useState(user?.name || ''); // Usamos el nombre del usuario
  const [profileImage, setProfileImage] = useState(user?.profileImage || ''); // Usamos la imagen de perfil
  const [success, setSuccess] = useState(false);

  // Manejar la actualización del perfil
  const handleSave = () => {
    updateUser({ name, profileImage }); // Actualizamos el usuario en el contexto
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000); // Muestra un mensaje de éxito por 3 segundos
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: '0 auto',
        padding: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh', // Centra verticalmente el contenido
      }}
    >
      <TransparentBox>
        <Typography variant="h4" gutterBottom>
          Perfil de Usuario
        </Typography>
        {success && <Alert severity="success">Perfil actualizado correctamente.</Alert>}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Imagen de perfil */}
          <Avatar
            src={profileImage}
            alt={name}
            sx={{ width: 100, height: 100, margin: '0 auto' }}
          />
          {/* Botón para cambiar la imagen */}
          <Button variant="contained" component="label">
            Cambiar Imagen
            <input
              type="file"
              hidden
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const reader = new FileReader();
                  reader.onload = () => setProfileImage(reader.result as string); // Convertir la imagen a base64
                  reader.readAsDataURL(e.target.files[0]);
                }
              }}
            />
          </Button>
          {/* Campo para cambiar el nombre */}
          <TextField
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          {/* Botón para guardar los cambios */}
          <Button variant="contained" color="primary" onClick={handleSave}>
            Guardar Cambios
          </Button>
        </Box>
      </TransparentBox>
    </Box>
  );
};

export default ProfilePage;