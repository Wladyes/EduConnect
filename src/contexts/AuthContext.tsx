// src/contexts/AuthContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types/User';

interface AuthContextProps {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (updatedUser: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Validar que el usuario tenga las propiedades necesarias
  const isValidUser = (user: any): user is User => {
    return (
      user &&
      typeof user.id === 'string' &&
      typeof user.name === 'string' &&
      typeof user.email === 'string' &&
      isValidUserRole(user.role) // Usa la función de tipo guardia aquí
    );
  };

  // Función de tipo guardia para validar el rol
  function isValidUserRole(role: any): role is UserRole {
    return role === 'administrador' || role === 'publicador' || role === 'usuario';
  }

  // Cargar el usuario desde localStorage al cargar la aplicación
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      if (isValidUser(parsedUser)) {
        // Asegurarse de que el rol esté en minúsculas y sea válido
        const normalizedRole = parsedUser.role.toLowerCase();
        if (isValidUserRole(normalizedRole)) {
          const normalizedUser: User = { ...parsedUser, role: normalizedRole };
          setUser(normalizedUser);
        } else {
          console.warn('El rol del usuario almacenado no es válido.');
          localStorage.removeItem('user'); // Eliminar datos inválidos
        }
      } else {
        console.warn('El usuario almacenado no tiene las propiedades correctas.');
        localStorage.removeItem('user'); // Eliminar datos inválidos
      }
    }
  }, []);

  // Función para iniciar sesión
  const login = (user: User) => {
    // Asegurarse de que el rol esté en minúsculas y sea válido
    const normalizedRole = user.role.toLowerCase();
    if (!isValidUserRole(normalizedRole)) {
      console.error('El rol proporcionado no es válido.');
      return;
    }

    const normalizedUser: User = { ...user, role: normalizedRole };
    setUser(normalizedUser);
    localStorage.setItem('user', JSON.stringify(normalizedUser));
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userRole', normalizedUser.role);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('sessionExpiry');
  };

  // Función para actualizar los datos del usuario
  const updateUser = (updatedUser: Partial<User>) => {
    if (user) {
      const newUser = { ...user, ...updatedUser };

      // Asegurarse de que el rol actualizado sea válido
      if (newUser.role) {
        const normalizedRole = newUser.role.toLowerCase();
        if (isValidUserRole(normalizedRole)) {
          newUser.role = normalizedRole;
        } else {
          console.error('El rol actualizado no es válido.');
          return;
        }
      }

      if (!isValidUser(newUser)) {
        console.error('El usuario actualizado no tiene las propiedades correctas.');
        return;
      }

      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};