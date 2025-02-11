// src/utils/posts.ts

import { Comment } from "../types/Comment";

export interface Post {
  id: string;
  content: string;
  userId: string;
  createdAt: string;
  updatedAt?: string;
  comments: Comment[];
  authorName: string;
  authorImage: string;
}