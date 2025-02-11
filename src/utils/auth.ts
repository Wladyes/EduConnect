// src/utils/auth.ts
import bcrypt from 'bcryptjs';

/**
 * Cifra una contraseña utilizando bcrypt.
 * @param password - La contraseña en texto plano.
 * @returns La contraseña cifrada.
 */
export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10); // Cifra la contraseña con un factor de costo de 10
};

/**
 * Compara una contraseña en texto plano con una contraseña cifrada.
 * @param password - La contraseña en texto plano ingresada por el usuario.
 * @param hashedPassword - La contraseña cifrada almacenada.
 * @returns `true` si las contraseñas coinciden, `false` en caso contrario.
 */
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

/**
 * Valida si un correo electrónico tiene un formato válido.
 * @param email - El correo electrónico a validar.
 * @returns `true` si el correo es válido, `false` en caso contrario.
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos electrónicos
  return emailRegex.test(email);
};

/**
 * Verifica si la sesión del usuario ha expirado.
 * @returns `true` si la sesión ha expirado, `false` si aún es válida.
 */
export const isSessionExpired = (): boolean => {
  const sessionExpiry = localStorage.getItem('sessionExpiry');
  return sessionExpiry ? Date.now() > parseInt(sessionExpiry) : true;
};

/**
 * Establece una sesión con un tiempo de expiración.
 * @param duration - Duración de la sesión en milisegundos (por ejemplo, 1 hora = 3600000 ms).
 */
export const setSession = (duration: number): void => {
  const expiryTime = Date.now() + duration; // Calcula el tiempo de expiración
  localStorage.setItem('sessionExpiry', expiryTime.toString());
};

/**
 * Elimina la sesión del usuario, limpiando los datos de autenticación.
 */
export const clearSession = (): void => {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('userRole');
  localStorage.removeItem('sessionExpiry');
};