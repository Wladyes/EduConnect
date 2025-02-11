// Archivo: types/Comment.ts
export interface Comment {
  id: string; // ID único del comentario
  postId: string; // ID de la publicación a la que pertenece el comentario
  userId: string; // ID del usuario que creó el comentario
  authorId: string; // ID del autor del comentario
  authorName: string; // Nombre del autor del comentario
  authorImage: string; // Imagen del autor del comentario
  content: string; // Contenido del comentario
  createdAt: string; // Fecha de creación del comentario
  likes: number; // Número de "likes" del comentario
}