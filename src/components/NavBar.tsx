// src/components/NavBar.tsx
import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavButton from './NavButton';
import Logo from './Logo';
import { useAuth } from '../contexts/AuthContext';

// Íconos de Material UI
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: 1300 }}>
      <Toolbar>
        {/* Logo redirige a la página de inicio */}
        <Logo />

        {/* Rutas públicas para usuarios no autenticados */}
        {!user && (
          <>
            <NavButton to="/" icon={<HomeIcon />}>
              Inicio
            </NavButton>
            <NavButton to="/about" icon={<InfoIcon />}>
              Acerca de
            </NavButton>
            <NavButton to="/login" icon={<LoginIcon />}>
              Iniciar Sesión
            </NavButton>
            <NavButton to="/register" icon={<PersonAddIcon />}>
              Registrarse
            </NavButton>
          </>
        )}

        {/* Rutas protegidas para usuarios autenticados */}
        {user && (
          <>
            <NavButton to="/" icon={<HomeIcon />}>
              Inicio
            </NavButton>
            <NavButton to="/posts" icon={<ArticleIcon />}>
              Publicaciones
            </NavButton>
            {/* Botón de administración solo para administradores */}
            {user.role === 'administrador' && (
              <NavButton to="/admin" icon={<AdminPanelSettingsIcon />}>
                Administración
              </NavButton>
            )}
            <NavButton to="/profile" icon={<AccountCircleIcon />}>
              Perfil
            </NavButton>
            <NavButton to="/" onClick={handleLogout} icon={<LogoutIcon />}>
              Cerrar Sesión
            </NavButton>

            {/* Información del usuario autenticado */}
            <Box sx={{ marginLeft: 2, display: 'flex', alignItems: 'center' }}>
              <AccountCircleIcon sx={{ marginRight: 1 }} />
              <Typography variant="body1">
                {user.name} ({user.role === 'administrador' ? 'Administrador' : 'Publicador'})
              </Typography>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;