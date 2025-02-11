// src/pages/PostsPage.tsx
import React, { useState, useEffect } from "react";
import { Container, Typography, Button, TextField, Box, Alert } from "@mui/material";
import PostCard from "../components/PostCard";
import TransparentBox from "../components/TransparentBox";
import { useAuth } from "../contexts/AuthContext";

const PostsPage: React.FC = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState("");
  const [error, setError] = useState("");

  // Cargar publicaciones desde localStorage al montar el componente
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    setPosts(storedPosts);
  }, []);

  // Guardar publicaciones en localStorage y actualizar el estado
  const savePosts = (updatedPosts: any[]) => {
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  // Crear una nueva publicación
  const handleCreatePost = () => {
    if (!newPost.trim()) {
      setError("El contenido de la publicación no puede estar vacío.");
      return;
    }
    setError("");

    // Crear el objeto de la nueva publicación con todas las propiedades necesarias
    const newPostObject = {
      id: Date.now(), // ID único basado en la marca de tiempo
      userId: user?.id || "Desconocido", // ID del usuario que crea la publicación
      authorName: user?.name || "Anónimo", // Nombre del autor
      authorImage: user?.profileImage || "", // Imagen del autor
      content: newPost, // Contenido de la publicación
      createdAt: new Date().toISOString(), // Fecha de creación
      comments: [], // Lista vacía de comentarios
    };

    // Actualizar la lista de publicaciones
    const updatedPosts = [newPostObject, ...posts];
    savePosts(updatedPosts);
    setNewPost(""); // Limpiar el campo de entrada
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: "64px", marginBottom: "20px" }}>
      <TransparentBox>
        <Typography variant="h4" component="h1" gutterBottom>Publicaciones</Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Comparte tus ideas o pensamientos con la comunidad.
        </Typography>
        {error && <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>}
        <Box sx={{ display: "flex", gap: 2, marginBottom: 4 }}>
          <TextField
            label="Nueva Publicación"
            placeholder="Escribe algo interesante..."
            variant="outlined"
            fullWidth
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            error={!!error}
            helperText={error}
          />
          <Button variant="contained" color="primary" onClick={handleCreatePost}>Publicar</Button>
        </Box>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} savePosts={savePosts} posts={posts} />
        ))}
      </TransparentBox>
    </Container>
  );
};

export default PostsPage;