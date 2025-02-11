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

5. **Abre tu navegador web** y visita `http://localhost:.......` para ver la aplicación en funcionamiento.

---

## Uso

### Página de Inicio
- Introducción a **EduConnect** y acceso al menú de navegación.

### Registro e Inicio de Sesión

#### Registro
- Completa el formulario de registro proporcionando:
  - Nombre de usuario.
  - Correo electrónico.
  - Contraseña.
  - Rol (Publicador o Administrador).
- **Nota**: Para registrar un usuario con rol de **Administrador**, el correo electrónico debe seguir el patrón `admin<number>@educonnect`.

#### Inicio de Sesión
- Accede con tus credenciales para utilizar las funcionalidades de la aplicación.

### Publicaciones
- Crear, comentar y reaccionar a publicaciones.
- Eliminar publicaciones propias o comentarios según rol.

### Perfil de Usuario
- Edita tu nombre de usuario y cambia tu imagen de perfil.

### Panel de Administración
- Administrar usuarios y contenido.

---

## Estructura del Proyecto

```plaintext
educonnect/
├── src/
│   ├── components/
│   ├── pages/
│   ├── contexts/
│   ├── routes/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
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

- **Restricción para Registrar Administradores**: Solo correos con el patrón `admin<number>@educonnect` pueden registrarse como administradores.
- **Seguridad de Contraseñas**: Se cifran con **bcrypt**.
- **Almacenamiento de Datos**: Se usa `localStorage`.

---

