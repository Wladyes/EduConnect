// src/components/PostCard.tsx
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, TextField, Alert, Avatar } from '@mui/material';
import CommentList from './CommentList';
import { useAuth } from '../contexts/AuthContext';
import { Post } from '../types/Post';
import { Comment } from '../types/Comment';

interface PostCardProps {
  post: Post;
  savePosts: (posts: Post[]) => void;
  posts: Post[];
}

const PostCard: React.FC<PostCardProps> = ({ post, savePosts, posts }) => {
  const { user } = useAuth();
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState('');

  // Verificar si el usuario es el dueño de la publicación
  const isOwner = user?.id?.toString() === post.userId;

  // Verificar si el usuario es administrador
  const isAdmin = user?.role === 'administrador';

  // Agregar un nuevo comentario
  const handleAddComment = () => {
    if (!newComment.trim()) {
      setError('El comentario no puede estar vacío.');
      return;
    }
    setError('');

    const newCommentObject: Comment = {
      id: Date.now().toString(),
      content: newComment,
      postId: post.id,
      userId: user?.id?.toString() || 'Desconocido',
      authorId: user?.id?.toString() || 'Desconocido',
      authorName: user?.name || 'Anónimo',
      authorImage: user?.profileImage || '',
      createdAt: new Date().toISOString(),
      likes: 0,
    };

    const updatedPosts = posts.map((p) =>
      p.id === post.id ? { ...p, comments: [...p.comments, newCommentObject] } : p
    );
    savePosts(updatedPosts);
    setNewComment('');
  };

  // Eliminar un comentario
  const handleDeleteComment = (commentId: string) => {
    const updatedPosts = posts.map((p) => {
      if (p.id === post.id) {
        return { ...p, comments: p.comments.filter((comment) => comment.id !== commentId) };
      }
      return p;
    });
    savePosts(updatedPosts);
  };

  // Manejar "likes" en un comentario
  const handleLikeComment = (commentId: string) => {
    const updatedPosts = posts.map((p) => {
      if (p.id === post.id) {
        return {
          ...p,
          comments: p.comments.map((comment) => {
            if (comment.id === commentId) {
              return { ...comment, likes: comment.likes + 1 };
            }
            return comment;
          }),
        };
      }
      return p;
    });
    savePosts(updatedPosts);
  };

  // Eliminar una publicación
  const handleDeletePost = () => {
    if (isOwner || isAdmin) {
      const updatedPosts = posts.filter((p) => p.id !== post.id);
      savePosts(updatedPosts);
    } else {
      setError('No tienes permiso para eliminar esta publicación.');
    }
  };

  return (
    <Card sx={{ marginBottom: 4 }}>
      <CardContent>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Avatar src={post.authorImage} alt={post.authorName} sx={{ marginRight: 2 }} />
          <div>
            <Typography variant="subtitle1" fontWeight="bold">
              {post.authorName || 'Anónimo'}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {new Date(post.createdAt).toLocaleString()}
            </Typography>
          </div>
        </Box>

        <Typography variant="h6">{post.content}</Typography>

        {error && <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>}

        <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
          <TextField
            label="Nuevo Comentario"
            variant="outlined"
            fullWidth
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            error={!!error}
            helperText={error}
          />
          <Button variant="contained" color="primary" onClick={handleAddComment}>
            Comentar
          </Button>
        </Box>

        <CommentList
          comments={post.comments}
          currentUserId={user?.id || ''}
          onDeleteComment={handleDeleteComment}
          onLikeComment={handleLikeComment}
        />

        {(isOwner || isAdmin) && (
          <Button
            variant="outlined"
            color="secondary"
            sx={{ marginTop: 2 }}
            onClick={handleDeletePost}
          >
            Eliminar Publicación
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PostCard;