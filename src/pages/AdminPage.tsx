// src/pages/AdminPage.tsx
import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import TransparentBox from '../components/TransparentBox'; // Caja reutilizable para diseño
import { useAuth } from '../contexts/AuthContext'; // Contexto de autenticación

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface Post {
  id: string;
  content: string;
  userId: string;
  comments: Comment[];
}

interface Comment {
  id: string;
  content: string;
  postId: string;
  userId: string;
}

const AdminPage: React.FC = () => {
  const { user } = useAuth(); // Obtenemos el usuario autenticado
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [successMessage, setSuccessMessage] = useState('');

  // Verificar si el usuario es administrador
  useEffect(() => {
    if (user?.role !== 'administrador') {
      window.location.href = '/'; // Redirigir a la página de inicio si no es administrador
    }
  }, [user]);

  // Cargar usuarios y publicaciones desde localStorage al cargar la página
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setUsers(storedUsers);
    setPosts(storedPosts);
  }, []);

  // Guardar los usuarios actualizados en localStorage
  const saveUsers = (updatedUsers: User[]) => {
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  // Guardar las publicaciones actualizadas en localStorage
  const savePosts = (updatedPosts: Post[]) => {
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  // Cambiar el rol de un usuario
  const handleRoleChange = (id: string, newRole: string) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, role: newRole } : user
    );
    saveUsers(updatedUsers);
    setSuccessMessage('Rol actualizado correctamente.');
    setTimeout(() => setSuccessMessage(''), 3000); // Mensaje de éxito temporal
  };

  // Eliminar un usuario
  const handleDeleteUser = (id: string) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    const updatedPosts = posts.filter((post) => post.userId !== id); // Eliminar publicaciones del usuario
    saveUsers(updatedUsers);
    savePosts(updatedPosts);
    setSuccessMessage('Usuario eliminado correctamente.');
    setTimeout(() => setSuccessMessage(''), 3000); // Mensaje de éxito temporal
  };

  // Eliminar una publicación
  const handleDeletePost = (postId: string) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    savePosts(updatedPosts);
    setSuccessMessage('Publicación eliminada correctamente.');
    setTimeout(() => setSuccessMessage(''), 3000); // Mensaje de éxito temporal
  };

  // Eliminar un comentario
  const handleDeleteComment = (postId: string, commentId: string) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? { ...post, comments: post.comments.filter((comment) => comment.id !== commentId) }
        : post
    );
    savePosts(updatedPosts);
    setSuccessMessage('Comentario eliminado correctamente.');
    setTimeout(() => setSuccessMessage(''), 3000); // Mensaje de éxito temporal
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }}>
      <TransparentBox>
        <Typography variant="h4" gutterBottom>
          Panel de Administración
        </Typography>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}

        {/* Tabla de usuarios */}
        <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
          Usuarios Registrados
        </Typography>
        <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Correo Electrónico</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      disabled={user.email.startsWith('admin') && user.role === 'administrador'} // Evitar cambiar el rol de administradores principales
                    >
                      <MenuItem value="publicador">Publicador</MenuItem>
                      <MenuItem value="administrador">Administrador</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDeleteUser(user.id)}
                      disabled={user.email.startsWith('admin')} // Evitar eliminar administradores principales
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Tabla de publicaciones */}
        <Typography variant="h5" gutterBottom>
          Publicaciones
        </Typography>
        <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Contenido</TableCell>
                <TableCell>Autor</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.content}</TableCell>
                  <TableCell>{users.find((user) => user.id === post.userId)?.name || 'Desconocido'}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Tabla de comentarios */}
        <Typography variant="h5" gutterBottom>
          Comentarios
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Contenido</TableCell>
                <TableCell>Autor</TableCell>
                <TableCell>Publicación</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) =>
                post.comments.map((comment) => (
                  <TableRow key={comment.id}>
                    <TableCell>{comment.content}</TableCell>
                    <TableCell>{users.find((user) => user.id === comment.userId)?.name || 'Desconocido'}</TableCell>
                    <TableCell>{post.content}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDeleteComment(post.id, comment.id)}
                      >
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </TransparentBox>
    </Container>
  );
};

export default AdminPage;