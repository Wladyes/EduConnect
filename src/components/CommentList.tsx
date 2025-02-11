// src/components/CommentList.tsx
import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import { Comment } from "../types/Comment";
import { useAuth } from "../contexts/AuthContext";
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

interface CommentListProps {
  comments: Comment[];
  currentUserId: string;
  onDeleteComment: (commentId: string) => void;
  onLikeComment: (commentId: string) => void; // función para manejar likes
}

const CommentList: React.FC<CommentListProps> = ({ comments, currentUserId, onDeleteComment, onLikeComment }) => {
  const { user } = useAuth();

  return (
    <List>
      {comments.map((comment) => (
        <div key={comment.id}>
          <ListItem alignItems="flex-start">
            {/* Imagen del autor del comentario */}
            <ListItemAvatar>
              <Avatar src={comment.authorImage} alt={comment.authorName} />
            </ListItemAvatar>
            {/* Texto del comentario */}
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontWeight="bold">
                  {comment.authorName}
                </Typography>
              }
              secondary={
                <>
                  <Typography variant="body2" color="text.primary">
                    {comment.content}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block">
                    {new Date(comment.createdAt).toLocaleString()}
                  </Typography>
                </>
              }
            />
            {/* Botón de eliminar comentario */}
            {comment.authorId === currentUserId && (
              <IconButton edge="end" aria-label="delete" onClick={() => onDeleteComment(comment.id)}>
                <DeleteIcon />
              </IconButton>
            )}
            {/* Botón de like */}
            <Box display="flex" alignItems="center" ml={2}>
              <IconButton edge="end" aria-label="like" onClick={() => onLikeComment(comment.id)}>
                <ThumbUpIcon />
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                {comment.likes} {/* Mostrar el número de likes */}
              </Typography>
            </Box>
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default CommentList;