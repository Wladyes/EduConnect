// src/pages/AboutPage.tsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import TeamMemberCard from '../components/TeamMemberCard';
import TransparentBox from '../components/TransparentBox'; // Importa el componente reutilizable

const AboutPage: React.FC = () => {
  // Información de los miembros del equipo
  const teamMembers = [
    {
      name: 'Wladymir Escobar',
      role: 'Desarrollador Frontend',
      description: 'Encargado de la implementación de la interfaz de usuario y la experiencia visual del proyecto.',
      photoUrl: './images/W705cdb.jpg', 
      contacto: 'gwescobar@espe.edu.ec', // Correo electrónico ESPE
    },
    {
      name: 'Margarita Fajardo',
      role: 'Desarrolladora Backend',
      description: 'Responsable de la lógica del servidor, la base de datos y la integración de APIs.',
      photoUrl: './images/mcfajardo.jpg', // 
      contacto: 'mcfajardo1@espe.edu.ec', // Correo electrónico ESPE
    },
    {
      name: 'Sandy Mariño',
      role: 'Gestor de Proyecto',
      description: 'Lideró la planificación, organización y seguimiento del proyecto para garantizar su éxito.',
      photoUrl: './images/sjmarino1.jpg', // 
      contacto: 'sjmarino1@espe.edu.ec', // Correo electrónico ESPE
    },
  ];

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: 4,
        marginBottom: 4,
      }}
    >
      <TransparentBox>
        {/* Título de la página */}
        <Typography variant="h4" component="h1" gutterBottom>
          Acerca de Nosotros
        </Typography>

        {/* Descripción general del proyecto */}
        <Typography variant="body1" paragraph>
          Este proyecto fue desarrollado por un equipo de trabajo dedicado y apasionado, compuesto por tres miembros que colaboraron para crear una solución innovadora y funcional. A continuación, te presentamos a los integrantes del equipo:
        </Typography>

        {/* Lista de miembros del equipo */}
        <Box>
          {teamMembers.map((member, index) => (
            <Box key={index} sx={{ marginTop: index !== 0 ? 4 : 2 }}>
              <TeamMemberCard
                name={member.name}
                role={member.role}
                description={member.description}
                photoUrl={member.photoUrl}
                contacto={member.contacto}
              />
            </Box>
          ))}
        </Box>
      </TransparentBox>
    </Container>
  );
};

export default AboutPage;