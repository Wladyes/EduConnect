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
│   ├── components/
│   │   ├── Avatar.tsx
│   │   ├── Comment.tsx
│   │   ├── Navbar.tsx
│   │   ├── Post.tsx
│   │   ├── Profile.tsx
│   │   ├── UserList.tsx
│   │   └── AdminPanel.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── AdminPage.tsx
│   │   ├── PostsPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   ├── PostsContext.tsx
│   │   ├── UsersContext.tsx
│   │   └── ThemeContext.tsx
│   ├── routes/
│   │   ├── PrivateRoute.tsx
│   │   ├── PublicRoute.tsx
│   │   └── Router.tsx
│   ├── types/
│   │   ├── Post.ts
│   │   ├── User.ts
│   │   └── Comment.ts
│   ├── utils/
│   │   ├── formatDate.ts
│   │   ├── validateEmail.ts
│   │   └── storage.ts
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── index.css
│   └── theme.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
└── README.md
```

---

## Tecnologías Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Material-UI (MUI)**
- **React Router DOM**
- **bcryptjs**
- **CSS3**
- **localStorage**

---

## Dependencias Instaladas

### Dependencias Principales
- `@emotion/react`
- `@emotion/styled`
- `@mui/icons-material`
- `@mui/material`
- `bcryptjs`
- `react`
- `react-dom`
- `react-router-dom`

### Dependencias de Desarrollo
- `@types/bcryptjs`
- `@types/react`
- `@types/react-dom`
- `@types/react-router-dom`
- `@vitejs/plugin-react`
- `eslint`
- `eslint-config-prettier`
- `typescript`
- `vite`

---

## Contribuciones

- **Wladymir Escobar** - Desarrollador Frontend  
  Email: gwescobar@espe.edu.ec  
- **Margarita Fajardo** - Desarrolladora Backend  
  Email: mcfajardo1@espe.edu.ec  
- **Sandy Mariño** - Gestora de Proyecto  
  Email: sjmarino1@espe.edu.ec  

---

## Notas Importantes

### Restricción para Registrar Administradores
- Solo es posible registrar usuarios con rol de **Administrador** si el correo electrónico sigue el patrón `admin<number>@educonnect`.

### Seguridad de Contraseñas
- Las contraseñas deben tener al menos 6 caracteres e incluir una letra, un número y un carácter especial.
- Las contraseñas se cifran utilizando **bcrypt** antes de almacenarse.

### Almacenamiento de Datos
- Los datos de usuarios, publicaciones y comentarios se almacenan en `localStorage`.


