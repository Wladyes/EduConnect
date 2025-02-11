// Archivo: types/Post.ts
import { Comment } from './Comment';

export interface Post {
  id: string;
  content: string;
  userId: string;
  createdAt: string;
  updatedAt?: string;
  comments: Comment[];
  authorName: string;   // Añadir esta línea
  authorImage: string;  // Añadir esta línea
}