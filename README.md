# EduConnect

**EduConnect** es una aplicación web desarrollada con **React** y **TypeScript** que simula una red social académica dirigida a estudiantes y docentes. Permite la creación y gestión de publicaciones, comentarios y perfiles de usuario, fomentando la interacción y colaboración en un entorno educativo dinámico.

---

## Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
  - [Página de Inicio](#página-de-inicio)
  - [Registro e Inicio de Sesión](#registro-e-inicio-de-sesión)
  - [Publicaciones](#publicaciones)
  - [Perfil de Usuario](#perfil-de-usuario)
  - [Panel de Administración](#panel-de-administración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Dependencias Instaladas](#dependencias-instaladas)
- [Contribuciones](#contribuciones)
- [Notas Importantes](#notas-importantes)

---

## Características

### Gestión de Usuarios
- Registro de nuevos usuarios con roles de **Publicador** o **Administrador**.
- Inicio y cierre de sesión.
- Edición del perfil de usuario y cambio de imagen de perfil.

### Publicaciones
- Creación de nuevas publicaciones con contenido textual.
- Visualización de publicaciones existentes.
- Eliminación de publicaciones propias.

### Comentarios
- Agregar comentarios a las publicaciones.
- Visualización de comentarios asociados a cada publicación.
- Reacciones ("Me gusta") en los comentarios.
- Eliminación de comentarios propios.

### Administración
- Panel de administración para usuarios con rol de **Administrador**.
- Gestión de usuarios: cambio de roles y eliminación.
- Eliminación de publicaciones y comentarios desde el panel de administración.

### Seguridad y Validaciones
- Cifrado de contraseñas utilizando **bcrypt**.
- Validación de correos electrónicos y contraseñas.
- Restricciones en la eliminación de contenido según roles.

---

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/educonnect.git
   ```

2. **Navega al directorio del proyecto**:
   ```bash
   cd educonnect
   ```

3. **Instala las dependencias**:
   ```bash
   npm install
   ```

4. **Inicia la aplicación**:
   ```bash
   npm run dev
   ```

5. **Abre tu navegador web** y visita `http://localhost:3000` para ver la aplicación en funcionamiento.

---

## Estructura del Proyecto

```plaintext
educonnect/
├── public/
│   ├── images/
│   │   ├── avatar.png
│   │   ├── logo.png
│   │   └── background.jpg
├── src/
│   ├── components/          // Componentes reutilizables
│   ├── pages/               // Páginas principales de la aplicación
│   ├── contexts/            // Contextos para manejar estados globales
│   ├── routes/              // Configuración de rutas
│   ├── types/               // Tipos e interfaces de TypeScript
│   ├── utils/               // Utilidades y funciones auxiliares
│   ├── App.tsx              // Componente principal de la aplicación
│   ├── App.css              // Estilos globales para el componente App
│   ├── main.tsx             // Punto de entrada principal de React
│   ├── index.css            // Estilos globales de la aplicación
│   └── theme.ts             // Definición de temas
├── package.json             // Configuración de dependencias del proyecto
├── tsconfig.json            // Configuración de TypeScript
├── vite.config.ts           // Configuración de Vite
├── index.html               // Archivo HTML principal
└── README.md                // Documentación del proyecto
Tecnologías Utilizadas
React
TypeScript
Vite
Material-UI (MUI)
React Router DOM
bcryptjs
CSS3
localStorage
Dependencias Instaladas
Además de las tecnologías mencionadas, el proyecto utiliza las siguientes dependencias y librerías:
Dependencias Principales
@emotion/react
@emotion/styled
@mui/icons-material
@mui/material
bcryptjs
react
react-dom
react-router-dom
Dependencias de Desarrollo
@types/bcryptjs
@types/react
@types/react-dom
@types/react-router-dom
@vitejs/plugin-react
eslint
eslint-config-prettier
typescript
vite
Dependencias Adicionales para Compatibilidad
Para asegurar el correcto funcionamiento de ciertos módulos en el navegador, se instalaron:
Polyfills y Paquetes Adicionales:
bash


npm install --save-dev @esbuild-plugins/node-modules-polyfill @esbuild-plugins/node-globals-polyfill
npm install --save-dev crypto-browserify stream-browserify
Estos paquetes permiten utilizar funcionalidades de Node.js en un entorno de navegador, evitando errores relacionados con módulos faltantes.
Contribuciones
Wladymir Escobar - Desarrollador Frontend
Email: gwescobar@espe.edu.ec
Margarita Fajardo - Desarrolladora Backend
Email: mcfajardo1@espe.edu.ec
Sandy Mariño - Gestora de Proyecto
Email: sjmarino1@espe.edu.ec
Notas Importantes
Restricción para Registrar Administradores:
Solo es posible registrar usuarios con rol de Administrador si el correo electrónico sigue el patrón admin<number>@educonnect (por ejemplo, admin1@educonnect).
Si intentas registrar un administrador con un correo que no cumpla este patrón, el sistema te asignará el rol de Publicador.
Esta restricción se implementa para controlar quiénes pueden acceder a las funciones administrativas de la aplicación.
Seguridad de Contraseñas:
Las contraseñas deben tener al menos 6 caracteres e incluir una letra, un número y un carácter especial.
Las contraseñas se cifran utilizando bcrypt antes de almacenarse.
Almacenamiento de Datos:
Los datos de usuarios, publicaciones y comentarios se almacenan en localStorage del navegador.
Esto implica que los datos se mantendrán entre sesiones en el mismo navegador, pero no estarán disponibles si cambias de navegador o dispositivo.