// src/components/CommentForm.tsx
import { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface CommentFormProps {
  onSubmit: (content: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Escribe un comentario"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
};

export default CommentForm;