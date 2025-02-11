// src/components/UserAvatar.tsx
import { Avatar } from '@mui/material';

interface UserAvatarProps {
  name: string;
  avatarUrl?: string; // URL del avatar del usuario (opcional)
}

const UserAvatar: React.FC<UserAvatarProps> = ({ name, avatarUrl }) => {
  // Imagen predeterminada para usuarios sin avatar
  const defaultAvatar = 'https://via.placeholder.com/150?text=Avatar';

  return (
    <Avatar
      alt={`Avatar de ${name}`} // Texto alternativo para accesibilidad
      src={avatarUrl || defaultAvatar} // Usa la URL del avatar o la imagen predeterminada
      sx={{
        width: 50, // Ancho del avatar
        height: 50, // Altura del avatar
        fontSize: '1.5rem', // Tamaño de la inicial si no hay imagen
        backgroundColor: avatarUrl ? 'transparent' : '#f0f0f0', // Fondo gris si no hay imagen
        color: avatarUrl ? 'inherit' : '#555', // Color del texto si no hay imagen
      }}
    >
      {/* Si no hay avatarUrl, muestra la inicial del nombre */}
      {!avatarUrl && name.charAt(0).toUpperCase()}
    </Avatar>
  );
};

export default UserAvatar;