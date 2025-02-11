// Archivo: types/User.ts

export type UserRole = 'administrador' | 'publicador' | 'usuario';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt?: string;
  profileImage?: string;
}