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
│   └── images/              # Carpeta para imágenes públicas accesibles desde el navegador
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Footer.tsx       # Componente para el pie de página
│   │   ├── LoadingSpinner.tsx  # Indicador de carga
│   │   ├── Logo.tsx         # Componente para mostrar el logo
│   │   ├── NavBar.tsx       # Barra de navegación
│   │   ├── NavButton.tsx    # Botón reutilizable para la navegación
│   │   ├── PostCard.tsx     # Tarjeta para publicaciones individuales
│   │   ├── TransparentBox.tsx  # Caja transparente para resaltar contenido
│   │   ├── UserAvatar.tsx   # Avatar del usuario
│   │   ├── CommentList.tsx  # Lista de comentarios
│   │   ├── CommentForm.tsx  # Formulario de comentarios
│   │   ├── TeamMemberCard.tsx  # Tarjeta para miembros del equipo
│   │   └── (otros componentes reutilizables)
│   ├── pages/               # Páginas principales
│   │   ├── HomePage.tsx     # Página de inicio
│   │   ├── AboutPage.tsx    # Página "Acerca de"
│   │   ├── PostsPage.tsx    # Página de publicaciones
│   │   ├── LoginPage.tsx    # Página de inicio de sesión
│   │   ├── RegisterPage.tsx # Página de registro
│   │   ├── AdminPage.tsx    # Página de administración
│   │   ├── ProfilePage.tsx  # Página de perfil de usuario
│   │   └── NotFoundPage.tsx # Página de error 404
│   ├── contexts/            # Contextos globales
│   │   └── AuthContext.tsx  # Contexto de autenticación
│   ├── routes/              # Configuración de rutas
│   │   ├── AppRoutes.tsx    # Definición de rutas de la aplicación
│   │   └── ProtectedRoute.tsx # Protección de rutas privadas
│   ├── types/               # Tipos e interfaces TypeScript
│   │   ├── User.ts          # Tipos de usuario
│   │   ├── Post.ts          # Tipos de publicaciones
│   │   ├── Comment.ts       # Tipos de comentarios
│   │   └── (otros tipos e interfaces)
│   ├── utils/               # Funciones auxiliares
│   │   ├── auth.ts          # Funciones de autenticación
│   │   ├── posts.ts         # Funciones de publicaciones
│   │   └── validation.ts    # Validaciones
│   ├── App.tsx              # Componente principal
│   ├── App.css              # Estilos globales
│   ├── main.tsx             # Punto de entrada de React
│   ├── index.css            # Estilos generales
│   ├── theme.ts             # Definición de temas
│   └── vite-env.d.ts        # Configuración de TypeScript para Vite
├── package.json             # Configuración de dependencias
├── tsconfig.json            # Configuración de TypeScript
├── vite.config.ts           # Configuración de Vite
├── index.html               # Archivo HTML principal
└── README.md                # Documentación del proyecto


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

- **Wladymir Escobar** - Desarrollador Frontend\
  Email: [gwescobar@espe.edu.ec](mailto\:gwescobar@espe.edu.ec)
- **Margarita Fajardo** - Desarrolladora Backend\
  Email: [mcfajardo1@espe.edu.ec](mailto\:mcfajardo1@espe.edu.ec)
- **Sandy Mariño** - Gestora de Proyecto\
  Email: [sjmarino1@espe.edu.ec](mailto\:sjmarino1@espe.edu.ec)

---

## Notas Importantes

### Restricción para Registrar Administradores

- Solo es posible registrar usuarios con rol de **Administrador** si el correo electrónico sigue el patrón `admin<number>@educonnect`.

### Seguridad de Contraseñas

- Las contraseñas deben tener al menos 6 caracteres e incluir una letra, un número y un carácter especial.
- Las contraseñas se cifran utilizando **bcrypt** antes de almacenarse.

### Almacenamiento de Datos

- Los datos de usuarios, publicaciones y comentarios se almacenan en `localStorage`.

