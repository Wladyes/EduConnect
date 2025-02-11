// src/routes/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: JSX.Element;
  role?: string; // Rol requerido para acceder a la ruta (opcional)
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const { user } = useAuth();

  // Verificar si el usuario está autenticado
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Verificar si el usuario tiene el rol adecuado (si se requiere un rol específico)
  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  // Si todas las condiciones se cumplen, renderizar el componente hijo
  return children;
};

export default ProtectedRoute;