// src/App.tsx
import React, { useEffect } from 'react';
import './App.css'; // Importa los estilos globales
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { AuthProvider } from './contexts/AuthContext'; // Importa el AuthProvider

// Función para validar roles de usuario
const isValidUserRole = (role: string): boolean => {
  const validRoles = ['administrador', 'publicador']; // Define los roles válidos
  return validRoles.includes(role);
};

const App: React.FC = () => {
  // Script de migración para actualizar los datos en localStorage
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]'); // Obtiene los usuarios del localStorage

    const updatedUsers = users
      .map((user: any) => {
        // Normalizar el rol a minúsculas si existe
        if (user.role) {
          const normalizedRole = user.role.toLowerCase();
          if (isValidUserRole(normalizedRole)) {
            return { ...user, role: normalizedRole }; // Actualiza el rol si es válido
          } else {
            console.warn(`Rol inválido para el usuario ${user.email}: ${user.role}`);
            // Opcional: asignar un rol por defecto o eliminar el usuario
            return null; // Elimina usuarios con roles inválidos
          }
        }
        return user; // Si no tiene rol, no se modifica
      })
      .filter(Boolean); // Elimina usuarios nulos

    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Guarda los usuarios actualizados en localStorage
  }, []); // Este efecto se ejecuta solo una vez al cargar la aplicación

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider> {/* Envuelve la aplicación con AuthProvider */}
        <BrowserRouter>
          <NavBar />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;