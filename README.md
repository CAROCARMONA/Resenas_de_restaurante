# 🍽️ Reseñas de Restaurante

Aplicación web que permite a los usuarios dejar reseñas de restaurantes. Está compuesta por un **frontend en React** y
un **backend en Node.js + Express + MongoDB**, diseñada con enfoque responsive usando **Bootstrap** y buenas prácticas de desarrollo.

---

## 🛠️ Tecnologías Utilizadas

### 🔷 Frontend
- React
- Bootstrap
- SCSS / CSS

### 🔶 Backend
- Node.js + Express
- MongoDB + Mongoose
- MongoDB Compass

---

## 📌 Funcionalidades Principales

- Registro e inicio de sesión de usuarios.
- Visualización de reseñas de restaurantes y sus reseñas.
- Publicación, edición y eliminación de reseñas (CRUD).
- Sistema de puntuación.
- Diseño responsivo adaptado a móviles y escritorio.

---

## ⚙️ Backend – API REST Sencilla

### Endpoints Básicos

- `POST /api/usuario/crear` – Creación de usuario  
- `POST /api/usuario/iniciarsesion` – Inicio de sesión  
- `GET /api/resena/obtener` – Obtener todas las reseñas 
- `GET /api/resena/obteneridUsuario/:idUsuario` – Obtener las reseñas por usuario  
- `POST /api/resena/crear` – Crear nueva reseña  
- `PUT /api/resena/actualizar/:id` – Editar reseña existente  
- `DELETE /api/resena/borrar/:id` – Eliminar reseña  

> ⚠️ Solo se permite modificar o eliminar la reseña si pertenece al usuario autenticado.

---

## ✅ Buenas Prácticas Aplicadas

- CRUD sencillo y funcional con validaciones.
- Estructura MVC clara (Model, View, Controller).
- Middleware para autenticación con JWT.
- Separación de rutas, controladores y modelos.
- Código limpio, modular y comentado.

---

## 📁 Estructura de Carpetas


