// src/components/TeamMemberCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  photoUrl: string;
  contacto: string; // Campo para el correo electrónico
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  description,
  photoUrl,
  contacto,
}) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Columna en móviles, fila en pantallas más grandes
        alignItems: 'center',
        padding: 2,
        marginBottom: 2,
        boxShadow: 3,
      }}
    >
      {/* Foto del miembro */}
      <Avatar
        src={photoUrl}
        alt={`Foto de ${name}`}
        sx={{
          width: 80,
          height: 80,
          marginRight: { xs: 0, sm: 2 }, // Ajuste de margen derecho
          marginBottom: { xs: 2, sm: 0 }, // Margen inferior en móviles
        }}
      />
      {/* Información del miembro */}
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {role}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        {/* Campo para el correo electrónico */}
        <Typography variant="body2" color="text.secondary">
          📧 {contacto}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
